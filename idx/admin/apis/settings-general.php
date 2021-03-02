<?php
/**
 * REST API: Settings_General
 *
 * Adds routes for the general settings page.
 *
 * @package IMPress_for_IDX_Broker
 */

namespace IDX\Admin\Apis;

/**
 * Class for general/settings page routes.
 *
 * Supports GET and POST requests that return/set the IDX Broker API key, global wrapper,
 * reCAPTCHA settings, and cron schedule timing.
 */
class Settings_General extends \IDX\Admin\Rest_Controller {
	/**
	 * Registers routes and creates local IDX API object.
	 */
	public function __construct() {
		register_rest_route(
			$this->namespace,
			$this->route_name( 'settings/general' ),
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get' ),
				'permission_callback' => array( $this, 'admin_check' ),
			)
		);

		register_rest_route(
			$this->namespace,
			$this->route_name( 'settings/general' ),
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'post' ),
				'permission_callback' => array( $this, 'admin_check' ),
				'args'                => array(
					'apiKey'          => array(
						'required' => false,
						'type'     => 'string',
					),
					'reCAPTCHA'       => array(
						'required' => false,
						'type'     => 'boolean',
					),
					'updateFrequency' => array(
						'required' => false,
						'type'     => 'string',
						// TODO: Create whitelist of timings and sync this list.
						'enum'     => array(
							'five_minutes',
							'hourly',
							'twice_daily',
							'weekly',
							'two_weeks',
							'monthly',
							'disabled',
						),
					),
					'wrapperName'     => array(
						'required' => false,
						'type'     => 'string',
					),
				),
			)
		);
	}

	/**
	 * GET request
	 *
	 * @return WP_REST_Response
	 */
	public function get() {
		return rest_ensure_response(
			array(
				'apiKey'          => get_option( 'idx_broker_apikey', '' ),
				'reCAPTCHA'       => boolval( get_option( 'idx_recaptcha_enabled', 0 ) ),
				'updateFrequency' => get_option( 'idx_cron_schedule', '' ),
				'wrapperName'     => get_option( 'idx_broker_dynamic_wrapper_page_name', '' ),
			)
		);
	}

	/**
	 * POST request
	 *
	 * @param string $payload Settings to update.
	 * @return WP_REST_Response
	 */
	public function post( $payload ) {
		if ( isset( $payload['apiKey'] ) ) {
			$error = $this->refresh_api( $payload['apiKey'] );
			if ( is_wp_error( $error ) ) {
				return rest_ensure_response( $error );
			}
		}

		if ( isset( $payload['reCAPTCHA'] ) ) {
			update_option( 'idx_recaptcha_enabled', (int) filter_var( $payload['reCAPTCHA'], FILTER_VALIDATE_BOOLEAN ) );
		}

		if ( isset( $payload['updateFrequency'] ) ) {
			$error = $this->update_cron_frequency( $payload['updateFrequency'] );
			if ( is_wp_error( $error ) ) {
				return rest_ensure_response( $error );
			}
		}

		if ( isset( $payload['wrapperName'] ) ) {
			$error = $this->create_wrapper( $payload['wrapperName'] );
			if ( is_wp_error( $error ) ) {
				return rest_ensure_response( $error );
			}
		}
		return rest_ensure_response( null );
	}

	/**
	 * Checks if api key is valid.
	 *
	 * @param \IDX\IDX_Api $idx_api API object.
	 * @return WP_Error|null
	 */
	private function api_error_test( $idx_api ) {
		$error        = null;
		$system_links = $idx_api->idx_api_get_systemlinks();
		if ( is_wp_error( $system_links ) ) {
			$error = $system_links;
		}
		return $error;
	}

	/**
	 * Refreshes IDX Broker API settings and sets a cron task.
	 *
	 * @param string $api_key IDX Broker API key.
	 * @return WP_Error|null
	 */
	private function refresh_api( $api_key ) {
		$sanitized_key = sanitize_text_field( wp_unslash( $api_key ) );
		update_option( 'idx_broker_apikey', $sanitized_key, false );

		$idx_api = new \Idx\Idx_Api();
		$idx_api->clear_wrapper_cache();
		$idx_api->idx_clean_transients();
		$error = $this->api_error_test( $idx_api );
		if ( $error ) {
			return $error;
		}

		// Fire an omnibar location update and schedule a daily cron.
		if ( ! wp_get_schedule( 'idx_omnibar_get_locations' ) ) {
			wp_schedule_event( time(), 'daily', 'idx_omnibar_get_locations' );
		}
		new \IDX\Widgets\Omnibar\Get_Locations();
	}

	/**
	 * Checks if api key is valid.
	 *
	 * @param string $wrapper_name Wrapper name.
	 * @return WP_Error|null
	 */
	private function create_wrapper( $wrapper_name ) {
		$idx_wrappers = new \IDX\Wrappers();
		$error        = $idx_wrappers->idx_create_dynamic_page( $wrapper_name );
		return $error;
	}

	/**
	 * Updates cron update frequency.
	 *
	 * @param string $timing Cron update event recurrence schedule.
	 * @return WP_Error|null
	 */
	private function update_cron_frequency( $timing ) {
		$schedules = wp_get_schedules();
		if ( isset( $schedules[ $timing ] ) ) {
			update_option( 'idx_cron_schedule', $timing );
			return null;
		}
		// Uses same error format as \IDX\IDX_Api.
		return new \WP_Error(
			'cron_update_error',
			'500: Update frequency option does not exist.',
			array(
				'status'  => 500,
				'message' => 'Update frequency option does not exist.',
			)
		);
	}
}

new Settings_General();

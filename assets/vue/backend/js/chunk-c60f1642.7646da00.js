(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c60f1642"],{2982:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("impress-listings-advanced-content",e._b({attrs:{formDisabled:e.formDisabled},on:{"form-field-update":e.formUpdate}},"impress-listings-advanced-content",e.localStateValues,!1)),a("idx-button",{attrs:{size:"lg"},on:{click:e.save}},[e._v(" Save ")])],1)},o=[],s=(a("96cf"),a("1da1")),n=a("5530"),i=a("12e8"),l=a("2f62"),d=a("871d"),c=a("b387"),u=a("b939"),m=i["a"].listingsSettings.repo,f={name:"listings-advanced-content-tab",inject:[m],mixins:[c["a"],u["a"]],components:{impressListingsAdvancedContent:d["a"]},data:function(){return{formDisabled:!1}},methods:{save:function(){this.saveHandler(this[m],"advanced")}},watch:{enabled:function(){this.loadData(this[m],"advanced")}},computed:Object(n["a"])({},Object(l["d"])({enabled:function(e){return e.listingsGeneral.enabled}})),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.module="listingsAdvanced",e.enabled&&e.loadData(e[m],"advanced");case 2:case"end":return t.stop()}}),t)})))()}},p=f,g=a("2877"),b=Object(g["a"])(p,r,o,!1,null,null,null);t["default"]=b.exports},"871d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-block",{attrs:{tag:"fieldset",className:{"form-content":!0,"form-content--disabled":e.formDisabled}}},[a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("CSS Settings")]),a("p",[e._v("Here you can deregister the WP Listings CSS files and move to your theme's css file for ease of customization.")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.mainCssLabel)+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.deregisterMainCss,disabled:e.formDisabled,label:e.mainCssLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"deregisterMainCss",value:!e.deregisterMainCss})}}})],1)],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.widgetsCssLabel)+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.deregisterWidgetCss,disabled:e.formDisabled,label:e.widgetsCssLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"deregisterWidgetCss",value:!e.deregisterWidgetCss})}}})],1)],1),a("hr"),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Form Submissions to IDX Broker")]),a("p",[e._v("Send all contact form submissions to IDX Broker as a lead."),a("br"),e._v(" "),a("b",[e._v("Note:")]),e._v(" This option only works while using default contact forms.")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.sendFormLabel)+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.sendFormSubmission,disabled:e.formDisabled,label:e.sendFormLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"sendFormSubmission",value:!e.sendFormSubmission})}}})],1)],1),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default Form Shortcode")]),a("p",[e._v(" If you use a Contact Form plugin, you may enter the form shortcode here to display on all listings. Additionally, each listing can use a custom form. If no short code is entered the template uses default contact forms. ")])],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"form-shortcode"}},[e._v("Form Shortcode")]),a("idx-form-input",{attrs:{type:"text",id:e.$idxStrap.prefix+"form-shortcode",disabled:e.formDisabled,value:e.formShortcode},on:{change:function(t){return e.$emit("form-field-update",{key:"formShortcode",value:t.target.value})}}})],1),a("hr"),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Google Maps")]),a("p",[e._v("Listings can be automatically mapped if a latitude and longitude is provided. A Google Maps API Key is required - "),a("a",{attrs:{target:"_blank",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"}},[e._v("click here")]),e._v(" to register.")])],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"google-maps"}},[e._v("Google Maps API Key")]),a("idx-form-input",{attrs:{type:"text",id:e.$idxStrap.prefix+"google-maps",disabled:e.formDisabled,value:e.googleMapsAPIKey},on:{change:function(t){return e.$emit("form-field-update",{key:"googleMapsAPIKey",value:t.target.value})}}})],1),a("hr"),a("idx-block",{attrs:{className:"form-content__label"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Custom Wrapper")]),a("p",[e._v("If your theme's content HTML ID's and Classes are different than the included template, you can enter the HTML of your content wrapper beginning and end.")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.useCustomWrapperLabel)+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.useCustomWrapper,disabled:e.formDisabled,label:e.useCustomWrapperLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"useCustomWrapper",value:!e.useCustomWrapper})}}})],1)],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"wrapper-start-html"}},[e._v("Wrapper Start HTML")]),a("idx-form-input",{attrs:{disabled:!e.useCustomWrapper||e.formDisabled,type:"text",id:e.$idxStrap.prefix+"wrapper-start-html",value:e.wrapperStart},on:{change:function(t){return e.$emit("form-field-update",{key:"wrapperStart",value:t.target.value})}}})],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"wrapper-end-html"}},[e._v("Wrapper End HTML")]),a("idx-form-input",{attrs:{disabled:!e.useCustomWrapper||e.formDisabled,type:"text",id:e.$idxStrap.prefix+"wrapper-end-html",value:e.wrapperEnd},on:{change:function(t){return e.$emit("form-field-update",{key:"wrapperEnd",value:t.target.value})}}})],1),a("hr"),a("idx-block",{attrs:{className:"form-content__label"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Plugin Uninstallation")]),a("p",[e._v("Checking this option will delete "),a("b",[e._v("all")]),e._v(" plugin data when uninstalling the plugin.")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.pluginUninstallationLabel)+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.deletePluginDataOnUninstall,disabled:e.formDisabled,label:e.pluginUninstallationLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"deletePluginDataOnUninstall",value:!e.deletePluginDataOnUninstall})}}})],1)],1)],1)},o=[],s={name:"ListingsAdvanced",inheritAttrs:!1,props:{deregisterMainCss:{type:Boolean,default:!1},deregisterWidgetCss:{type:Boolean,default:!1},sendFormSubmission:{type:Boolean,default:!0},formShortcode:{type:String,default:""},googleMapsAPIKey:{type:String,default:""},wrapperStart:{type:String,default:""},wrapperEnd:{type:String,default:""},deletePluginDataOnUninstall:{type:Boolean,default:!1},useCustomWrapper:{type:Boolean,default:!1},formDisabled:{type:Boolean,default:!1}},created:function(){this.mainCssLabel="Deregister IMPress Listings Main CSS?",this.widgetsCssLabel="Deregister IMPress Listings Widgets CSS?",this.sendFormLabel="Send Form Submissions to IDX Broker",this.pluginUninstallationLabel="Delete Plugin Data on Uninstall",this.useCustomWrapperLabel="Use Custom Wrapper?"}},n=s,i=(a("dcb4"),a("2877")),l=Object(i["a"])(n,r,o,!1,null,null,null);t["a"]=l.exports},b387:function(e,t,a){"use strict";a("b64b");var r=a("ade3"),o=a("5530");t["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.$store.state[this.module]),this.$store.state.guidedSetup[this.module].changes),this.formChanges)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var t=Object(r["a"])({},e.key,e.value);this.formChanges=Object(o["a"])(Object(o["a"])({},this.formChanges),t)}},beforeRouteLeave:function(e,t,a){if(this.formIsUpdated){var r=window.confirm("Do you really want to leave? You have unsaved changes!");r?a():a(!1)}else a()}}},b939:function(e,t,a){"use strict";a("96cf");var r=a("1da1");t["a"]={data:function(){return{formDisabled:!1}},methods:{loadData:function(e){var t=arguments,a=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var o,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.length>1&&void 0!==t[1]?t[1]:"",a.formDisabled=!0,r.prev=2,r.next=5,e.get(o);case 5:s=r.sent,n=s.data,a.updateState(n),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](2),a.errorAction();case 13:a.formDisabled=!1;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},updateState:function(e){for(var t in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:t,value:e[t]})},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},saveAction:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=""===t?"Changes Saved":t,this.updateState(this.formChanges),this.formChanges={},this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!1,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:t}})}),3e3)},errorAction:function(){var e=this,t="We're experiencing a problem, please try again";this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!0,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!0,text:t}})}),3e3)},saveHandler:function(e){var t=arguments,a=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var o,s,n,i,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.length>1&&void 0!==t[1]?t[1]:"",s=t.length>2&&void 0!==t[2]?t[2]:a.formChanges,n=t.length>3&&void 0!==t[3]?t[3]:"",a.formDisabled=!0,r.prev=4,r.next=7,e.post(s,o);case 7:i=r.sent,l=i.status,204===l?a.saveAction(n):a.errorAction(),a.formDisabled=!1,r.next=22;break;case 13:if(r.prev=13,r.t0=r["catch"](4),a.formDisabled=!1,401!==r.t0.response.status){r.next=21;break}return a.errorAction(),r.abrupt("return",!1);case 21:a.errorAction();case 22:return r.abrupt("return",!0);case 23:case"end":return r.stop()}}),r,null,[[4,13]])})))()},enablePluginAction:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.formDisabled=!0,a.prev=1,t.formUpdate({key:"enabled",value:!t.enabled}),a.next=5,e.post({enabled:!t.enabled},"enable");case 5:r=a.sent,o=r.status,204===o?location.reload():t.errorAction(),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](1),t.errorAction();case 13:t.formDisabled=!1;case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))()}}}},dcb4:function(e,t,a){"use strict";a("eb81")},eb81:function(e,t,a){}}]);
//# sourceMappingURL=chunk-c60f1642.7646da00.js.map
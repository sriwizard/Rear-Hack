/*! For license information please see 68c1705a4ad215603d691be68c1b6d615f0d588b.fffd8fe10b9fc5b38aed.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+HxP":function(e,t,n){var r=n("h9MS");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"0oPD":function(e,t){t.f=Object.getOwnPropertySymbols},"2UiQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return'(function(i,s,o,g,r,a,m){i["SlardarMonitorObject"]=r;(i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)}),(i[r].l=1*new Date());(a=s.createElement(o)),(m=s.getElementsByTagName(o)[0]);a.async=1;a.src=g;m.parentNode.insertBefore(a,m);i[r].globalPreCollectError=function(){i[r]("precollect","error",arguments)};if(typeof i.addEventListener==="function"){i.addEventListener("error",i[r].globalPreCollectError,true)}if(\'PerformanceLongTaskTiming\'in i){var g=i[r].lt={e:[]};g.o=new PerformanceObserver(function(l){g.e=g.e.concat(l.getEntries())});g.o.observe({entryTypes:[\'longtask\']})}})(window,document,"script","https://mon-va.byteoversea.com/slardar/sdk.js?bid='.concat(e,'","Slardar");')}},"2agv":function(e,t,n){"use strict";var r=n("8Xl/"),o=n("/6KZ"),a=n("dCrc"),i=n("oICS"),c=n("Ng5M"),s=n("gou2"),u=n("ErhN"),l=n("VJcA");o(o.S+o.F*!n("Clx3")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,f,p=a(e),d="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,v=void 0!==g,h=0,_=l(p);if(v&&(g=r(g,m>2?arguments[2]:void 0,2)),void 0==_||d==Array&&c(_))for(n=new d(t=s(p.length));t>h;h++)u(n,h,v?g(p[h],h):p[h]);else for(f=_.call(p),n=new d;!(o=f.next()).done;h++)u(n,h,v?i(f,g,[o.value,h],!0):o.value);return n.length=h,n}})},"5hJT":function(e,t,n){var r=n("X6VK");r(r.S+r.F,"Object",{assign:n("NR3o")})},"9K2m":function(e,t,n){"use strict";
/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,g=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116;function h(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case i:case s:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case u:return e;default:return t}}case v:case g:case a:return t}}}function _(e){return h(e)===p}t.typeOf=h,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=g,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=m,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===p||e===s||e===c||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d)},t.isAsyncMode=function(e){return _(e)||h(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return h(e)===l},t.isContextProvider=function(e){return h(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return h(e)===d},t.isFragment=function(e){return h(e)===i},t.isLazy=function(e){return h(e)===v},t.isMemo=function(e){return h(e)===g},t.isPortal=function(e){return h(e)===a},t.isProfiler=function(e){return h(e)===s},t.isStrictMode=function(e){return h(e)===c},t.isSuspense=function(e){return h(e)===m}},"9fEB":function(e,t,n){"use strict";var r=n("Ehqu"),o=n("NWVE"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=a(n("mXGw")),c=a(n("GlZI")),s=n("9rrO"),u=n("bxxT"),l=n("vI6Y");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=a.props[l],p=o[l]||new r;p.has(f)?i=!1:(p.add(f),o[l]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var g=c.default();function v(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(g,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}v.rewind=g.rewind,t.default=v},"9rrO":function(e,t,n){"use strict";var r=n("NWVE"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("mXGw"));t.AmpStateContext=a.createContext({})},AYQN:function(e,t,n){e.exports=n("Vlwe")},E29J:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n("DGju"),o=!1;function a(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o=n;var i={sampleRate:1,bid:t,pid:e,ignoreStatic:[],ignoreAjax:[/\.byteoversea\.com/],domain:"mon-va.byteoversea.com"};n&&(i.plugins={sentry:{release:"1.0.1.856",debug:!r.g,environment:r.g?"production":"development",ignoreErrors:[/Blocked a frame with origin/,/__msg_type/,/vid_mate_check is not defined/]}}),Slardar("config",i),Slardar("send","pageview"),n&&Slardar("Sentry",(function(e){e.configureScope((function(e){for(var t in a)e.setTag(t,a[t])}))}))}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};o&&Slardar?Slardar("Sentry",(function(r){r.captureMessage(e,{level:t,extra:n})})):console.error("Sentry required initialize before use")}},Ehqu:function(e,t,n){e.exports=n("bdJ0")},ErhN:function(e,t,n){"use strict";var r=n("eOWL"),o=n("zJT+");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},GeWT:function(e,t,n){"use strict";var r=n("xVO4"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var i=l(n);f&&(i=i.concat(f(n)));for(var c=s(t),g=s(n),v=0;v<i.length;++v){var h=i[v];if(!a[h]&&(!r||!r[h])&&(!g||!g[h])&&(!c||!c[h])){var _=p(n,h);try{u(t,h,_)}catch(y){}}}return t}return t}},GlZI:function(e,t,n){"use strict";var r=n("9doh"),o=n("1poX"),a=n("SDhN"),i=(n("Vrjk"),n("Gq4l")),c=n("WDFj"),s=n("Kf7N"),u=n("Ehqu");n("NWVE")(t,"__esModule",{value:!0});var l=n("mXGw");t.default=function(){var e,t=new u;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){function u(e){return r(this,u),o(this,a(u).call(this,e))}return c(u,s),i(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(l.Component))}},"IXD+":function(e,t,n){"use strict";var r=n("Yvct"),o=n("O/tV");e.exports=n("VX2v")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},Kf7N:function(e,t,n){var r=n("+HxP"),o=n("lvlZ"),a=n("fVAM");e.exports=function(e){return r(e)||o(e)||a()}},NR3o:function(e,t,n){"use strict";var r=n("LuBU"),o=n("0oPD"),a=n("IdFN"),i=n("UnHL"),c=n("Cmsx"),s=Object.assign;e.exports=!s||n("E7Vc")((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=r}))?function(e,t){for(var n=i(e),s=arguments.length,u=1,l=o.f,f=a.f;s>u;)for(var p,d=c(arguments[u++]),m=l?r(d).concat(l(d)):r(d),g=m.length,v=0;g>v;)f.call(d,p=m[v++])&&(n[p]=d[p]);return n}:s},Vlwe:function(e,t,n){n("WwSA"),n("2agv"),e.exports=n("TaGV").Array.from},XZM3:function(e,t,n){n("pFlO")("Set")},bdJ0:function(e,t,n){n("iKhv"),n("WwSA"),n("k/kI"),n("IXD+"),n("mVXz"),n("XZM3"),n("mPQl"),e.exports=n("TaGV").Set},bxxT:function(e,t,n){"use strict";var r=n("NWVE"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("mXGw"));t.HeadManagerContext=a.createContext(null)},fVAM:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},iJ8E:function(e,t,n){"use strict";n("5hJT"),n("yIlq");var r=n("gki9"),o=n.n(r),a=(n("V7cS"),n("SDJZ")),i=n.n(a),c=n("NToG"),s=n.n(c),u=n("K4DB"),l=n.n(u),f=n("+IV6"),p=n.n(f),d=n("eef+"),m=n.n(d),g=(n("GkPX"),n("mXGw")),v=n.n(g),h=n("GeWT"),_=n.n(h),y=n("DGju"),w=n("pGeE"),b=n("v0uu"),S=n("9fEB"),E=n.n(S),k=n("bBV7"),C=n("E29J"),P=n("nuqo"),T=n("2UiQ"),M={slardar:{open:!0,pageId:"",bid:""},sentry:{open:!0,dsn:"https://ff7a7f86a2e8481abacfb5e046d5046a@patrol-sg.snssdk.com/335"},googleAnalytics:{open:!0,name:y.g?b.c.TIKTOK_WEB:b.c.TIKTOK_TEST,code:""},googleTagManager:{open:!0,name:b.d.TIKTOK_WEB},report:{open:!1},saveRegion:!1};t.a=function(e,t){return function(n){var r=function(r){function a(){var n,r;i()(this,a);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(r=l()(this,(n=p()(a)).call.apply(n,[this].concat(c))))._params=e,r._config=t,r.handleRouterChange=function(){var e=w(M,r._config).onDidMount;"function"===typeof e&&e()},r.handleSlardarConfig=function(){var e=r.props.$region,t=w(M,r._config),n=t.slardar,o=t.sentry,a=n.open,i=n.pageId,c=n.bid;if(!a||!y.g)return null;i&&c?Object(C.b)(i,c,o.open,{region:e}):console.error("\u4f7f\u7528 Slardar \u9700\u8981\u4f20\u5165 pageId \u548c bid","pageHead")},r}return m()(a,r),s()(a,[{key:"componentDidMount",value:function(){this.handleSlardarConfig();var e=w(M,this._config),t=e.onDidMount,n=e.saveRegion;"function"===typeof t&&t();var r=this.props.$region;n&&r&&(document.body.dataset.region=r),k.Router.events.on("routeChangeComplete",this.handleRouterChange)}},{key:"componentWillUnmount",value:function(){k.Router.events.off("routeChangeComplete",this.handleRouterChange)}},{key:"render",value:function(){var r=this.props,a=-1!==b.a.EURO_COUNTRY_LIST.indexOf(r.$region);"function"===typeof e&&(this._params=e(o()({},r))),"function"===typeof t&&(this._config=t(o()({},r)));var i,c=r.statusCode,s=0===(void 0===c?0:c)?"index, follow":"noindex, follow",u=this._params,l=u.title,f=u.keywords,p=u.description,d=u.chromeThemeColor,m=u.alternateHref,g=u.canonicalHref,h=u.amphtmlHref,_=u.robotsContent,y=void 0===_?s:_,S=u.context,k=void 0===S?function(){}:S,C=w(M,this._config),N=C.googleAnalytics,D=C.report,V=C.googleTagManager,$=C.slardar,R=r.$host,G=r.$pageUrl,F=o()({},N,{params:{page_title:l,page_path:G,page_location:"https://".concat(R).concat(G)}});if(Object(P.e)(F,r.$cookieConsent),Object(P.e)(V,r.$cookieConsent),V.open=V.open&&!a,!l){var J=(i=n).displayName||i.name||"UnknownComponent";console.error("Warning: ".concat(J,"\u9875\u9762title\u672a\u8bbe\u7f6e"))}var W=$.open?v.a.createElement("script",{dangerouslySetInnerHTML:{__html:Object(T.a)($.bid)}}):null,H=$.open?v.a.createElement("script",{id:"slardar-independent-inline",dangerouslySetInnerHTML:{__html:'!function(){var t=function(){return(t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function e(){return"object"==typeof window}function n(){return e()&&s(window.performance)}function r(){return n()&&o(window.performance.getEntries)}function i(){return n()&&s(window.performance.timing)}function o(t){return"function"==typeof t}function a(t){return"[object Array]"===Object.prototype.toString.call(t)}function s(t){return"object"==typeof t&&null!==t&&!a(t)}function c(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var u=function(){var t=this;this.name="FMPMonitor",this._callback=function(){},this._observer=null,this._startTime=Date.now(),this._list=[],this.setup=function(n){if(e()){if(!e()||"function"!=typeof window.MutationObserver)return null;t._callback=o(n)?n:function(){},t._startTime=Date.now(),t._list=[],t._observer=new MutationObserver(t._count),o(t._observer.observe)&&t._observer.observe(document,{childList:!0,subtree:!0})}},this._count=function(){var e=Date.now()-t._startTime,n=document.querySelector("body");n?t._list.push({score:t._score(n,1,!1),time:e}):t._list.push({score:0,time:e})},this._score=function(e,n,r){var i=0,o=e.tagName;if("SCRIPT"!==o&&"STYLE"!==o&&"META"!==o&&"HEAD"!==o){var a=e.children?e.children.length:0;if(a>0)for(var s=e.children,c=a-1;c>=0;c--)i+=t._score(s[c],n+1,i>0);if(i<=0&&!r&&!(e.getBoundingClientRect&&e.getBoundingClientRect().top<window.innerHeight))return 0;i+=1+.5*n}return i},this._getFmp=function(){if(!t._observer)return 0;if(!t._list.length)return 0;o(t._observer.disconnect)&&t._observer.disconnect();for(var e={time:t._list[0].time,rate:0},n=1;n<t._list.length;n++)if(t._list[n].time>=t._list[n-1].time){var r=t._list[n].score-t._list[n-1].score;e.rate<r&&(e={time:t._list[n].time,rate:r})}return e.time},this._getTimeGap=function(){return t._startTime-performance.timing.navigationStart},this._formatEvent=function(e){return{name:t.name,type:"post",event:{ev_type:"fmp",fmp:e}}},this.getLoadFmp=function(){var e=t._getFmp(),n=e?t._getTimeGap()+e:0,r=t._formatEvent(n);return t._callback(r),r},this.getFmp=function(){var e=t._getFmp(),n=t._formatEvent(e);return t._callback(n),n}};(new function(){var e=this;this.name="PerformanceMonitor",this.hasLoaded=!1,this.setup=function(t){i()&&(e._callback=t,e._sendParams={ev_type:"perf",has_resource:0},function(t){"complete"!==document.readyState?window.addEventListener("load",(function(){setTimeout((function(){t()}),0)}),!1):t()}((function(){e.hasLoaded=!0,e._perfLog()})),window.onbeforeunload=function(){e._perfLog()},e._fmpMonitor=new u,e._fmpMonitor.setup())},this._hasResource=function(n){e._sendParams=t({},e._sendParams,n.event,{has_resource:1})},this._hasFID=function(t){e._sendParams.fid=t.fid},this._hasFirstScreen=function(t){i()&&(e._sendParams.firstscreen=t.time-window.performance.timing.navigationStart)},this._getParams=function(){if(i()){var t={},n=window.performance.timing;t.dns=n.domainLookupEnd-n.domainLookupStart,t.tcp=n.connectEnd-n.connectStart,t.request=n.responseStart-n.requestStart,t.response=n.responseEnd-n.responseStart,t.processing=n.domComplete-n.domLoading,t.blank=n.responseEnd-n.navigationStart,t.domready=n.domInteractive-n.navigationStart,t.load=n.loadEventEnd-n.navigationStart,n.secureConnectionStart&&(t.ssl=n.connectEnd-n.secureConnectionStart),t.domparse=n.domInteractive-n.responseEnd,t.resource=n.loadEventStart-n.domContentLoadedEventEnd,t.ttfb=n.responseStart-n.requestStart,t.redirct=n.redirectEnd-n.redirectStart;var o=e._getPaintTime("first-paint"),s=e._getPaintTime("first-contentful-paint");return o&&(t.fp=Math.round(o)),s&&(t.fcp=Math.round(s)),t.navigation=function(){if(!r())return window.performance.timing;var t=window.performance.getEntriesByType("navigation");return a(t)?0===t.length?window.performance.timing:t[0]:window.performance.timing}(),t.bounced=!e.hasLoaded,t}},this._getPaintTime=function(t){if(r()){var e=performance.getEntriesByType("paint");if(a(e)){var n=e.filter((function(e){return e.name===t}));return n.length&&n[0]&&s(n[0])&&n[0].startTime||0}}return 0},this._perfLog=function(){if(i()){if(e._sendParams=t({},e._sendParams,e._getParams()),e._fmpMonitor&&o(e._fmpMonitor.getLoadFmp)){var n=e._fmpMonitor.getLoadFmp()||{};e._sendParams.fmp=n.event&&n.event.fmp||0}e._sendParams.firstscreen||(e._sendParams.firstscreen=e._sendParams.domready),o(e._callback)&&e._callback({name:e.name,type:"post",event:e._sendParams})}},this._ttiCallback=function(t){t&&t>0&&(e._sendParams.tti=t),e._callback({name:e.name,type:"post",event:e._sendParams})}}).setup((function(e){var n=e.event,r=t({bid:"tiktok_web_inline_beta",pid:window.__pid__,sample_rate:1,timestamp:Date.now(),upload_reason:"sample",url:window.location.href,version:"Slardar"in window?Slardar.version:"unknown",slardar_session_id:c(),slardar_web_id:c()},n),i=new XMLHttpRequest;i.open("POST","https://mon-va.byteoversea.com/log/sentry/v2/api/slardar/main/"),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(r))}))}();\n'}}):null;return v.a.createElement(v.a.Fragment,null,v.a.createElement(E.a,null,v.a.createElement("title",null,l),f&&v.a.createElement("meta",{name:"keywords",content:f}),p&&v.a.createElement("meta",{name:"description",content:p}),d&&v.a.createElement("meta",{name:"theme-color",content:d}),y&&v.a.createElement("meta",{name:"robots",content:y}),g&&v.a.createElement("link",{rel:"canonical",href:g}),h&&v.a.createElement("link",{rel:"amphtml",href:h}),v.a.createElement("script",{async:"async",src:"https://sf-tb-sg.ibytedtos.com/obj/ttfe-malisg/tiktok/modernizr-custom.min.js"}),m&&v.a.createElement("link",{rel:"alternate",media:"only screen and (max-width: 640px)",href:m}),O(I()),O(x()),O(j(D)),O(L(F)),O(A(V)),O(k(this.props)),v.a.createElement("script",{dangerouslySetInnerHTML:{__html:'window.__pid__="'.concat($.pageId,'"')}}),W,H),v.a.createElement(n,this.props))}}]),a}(g.PureComponent);return _()(r,n),r}};var O=function(e){return g.Children.map(e,(function(e){return e}))},I=function(){return[v.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"}),v.a.createElement("meta",{name:"google",content:"notranslate"}),v.a.createElement("meta",{name:"format-detection",content:"telephone=no"})]},x=function(e){return[v.a.createElement("link",{rel:"dns-prefetch",href:"//s0.ipstatp.com"}),v.a.createElement("link",{rel:"dns-prefetch",href:"//s16.tiktokcdn.com"}),v.a.createElement("link",{rel:"dns-prefetch",href:"//v16.tiktokcdn.com"}),v.a.createElement("link",{rel:"dns-prefetch",href:"//p16.muscdn.com"}),v.a.createElement("link",{rel:"shortcut icon",href:"//s16.tiktokcdn.com/musical/resource/wap/static/image/logo_144c91a.png?v=2",type:"image/x-icon"})]},j=function(e){if(!e.open)return null;var t=y.g?Date.parse(new Date):0;return[v.a.createElement("script",{defer:"defer",src:"https://s0.ipstatp.com/growth/fe_sdk/reportsdk/sdk.js?t=".concat(t)})]},L=function(e){var t=e.open,n=e.name,r=e.code,o=e.params;if(!t)return null;if(!n)throw new Error("\u4f7f\u7528 gtag \u9700\u8981\u4f20\u5165 name");var a=Object.assign({},o,{anonymize_ip:!0}),i=JSON.stringify(a),c=[v.a.createElement("script",{key:"a",async:"async",src:"https://www.googletagmanager.com/gtag/js?id=".concat(n)}),v.a.createElement("script",{key:"b",dangerouslySetInnerHTML:{__html:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag() {\n            dataLayer.push(arguments);\n        }\n        gtag('js', new Date());\n        gtag('config', '".concat(n,"', ").concat(i,");\n    ")}})];return r&&c.push.apply(c,[v.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n                function gtag_report_conversion(url) {\n                    var callback = function () {\n                        if (typeof(url) != 'undefined') {\n                            window.location = url;\n                        }\n                    };\n                    gtag('event', 'conversion', {\n                        'send_to': '".concat(n,"/").concat(r,"',\n                        'event_callback': callback,\n                    });\n                    return false;\n                }")}}),v.a.createElement("script",{dangerouslySetInnerHTML:{__html:"gtag('config', '".concat(n,"', { 'anonymize_ip': true });")}})]),c},A=function(e){var t=e.open,n=e.name;if(!t)return null;if(!n)throw new Error("\u4f7f\u7528 GTM \u9700\u8981\u4f20\u5165 name");return[v.a.createElement("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','".concat(n,"');")}})]}},lvlZ:function(e,t,n){var r=n("AYQN"),o=n("9PeA");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},"m/ch":function(e,t,n){"use strict";var r=n("gki9"),o=n.n(r),a=n("RiSW"),i=n.n(a),c=(n("W1QL"),n("7lGJ"),n("SDJZ")),s=n.n(c),u=n("NToG"),l=n.n(u),f=n("K4DB"),p=n.n(f),d=n("+IV6"),m=n.n(d),g=n("eef+"),v=n.n(g),h=n("mXGw"),_=n.n(h),y=n("GeWT"),w=n.n(y),b=n("hGcu"),S=n("J2F4"),E=n("wS7J"),k=n("bBV7");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=function(n){function r(){var t,n;s()(this,r);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=p()(this,(t=m()(r)).call.apply(t,[this].concat(c))))._config=e,n.mounted=!1,n.initInstances=function(e){var t=n.props,r=t.$abTestVersion,o=t.$region;n.closeChannelInstanceOpend();var a=e.channels,i=void 0===a?[]:a,c=b.a.instances;i.forEach((function(e){c[e]?b.a.openChannel(e):b.a.init({appId:e,region:o,abTestVersion:r})}))},n.configInstances=function(e){var t=b.a.instances,r=sessionStorage.getItem(E.b);for(var o in r||sessionStorage.setItem(E.b,e.page_name),e.region=n.props.$region,e.is_landing_page=r?0:1,e.page_url||(e.page_url=location.href),t)t[o].config({"header.custom":{landing_page:r||e.page_name}});var a=e=n.setPrevousInfo(e),c=(a.channels,a.routeChangePageView,a.seo_ab_version),s=i()(a,["channels","routeChangePageView","seo_ab_version"]);for(var u in t)t[u].setCommonParams(s),t[u].event(S.f.PAGE_VIEW,{seo_ab_version:c});b.a.initCallback()},n.setPrevousInfo=function(e){var t=JSON.parse(sessionStorage.getItem(E.d))||{};return location.href!==t.href?(sessionStorage.setItem(E.d,JSON.stringify({href:location.href,pageName:e.page_name,twoPrev:t.pageName})),e.previous_page=t.pageName):e.previous_page=t.twoPrev,e},n.handleRouterStart=function(){n.closeChannelInstanceOpend()},n.handleRouterChange=function(){var e="function"===typeof n._config?n._config(o()({},n.props)):n._config;(e=n.setPrevousInfo(e)).is_landing_page=0,e.page_url||(e.page_url=location.href),n.initInstances(e);var t=b.a.instances,r=e,a=(r.open,r.seo_ab_version),c=r.routeChangePageView,s=i()(r,["open","seo_ab_version","routeChangePageView"]);for(var u in t)t[u].setCommonParams(s),c&&n.mounted&&t[u].event(S.f.PAGE_VIEW,{seo_ab_version:a});b.a.initCallback()},n}return v()(r,n),l()(r,[{key:"componentDidMount",value:function(){var e="function"===typeof this._config?this._config(o()({},this.props)):this._config;this.initInstances(e),this.configInstances(e),k.Router.events.on("routeChangeStart",this.handleRouterStart),k.Router.events.on("routeChangeComplete",this.handleRouterChange),this.mounted=!0}},{key:"componentDidUpdate",value:function(){this._config=e}},{key:"closeChannelInstanceOpend",value:function(){var e=b.a.instances;for(var t in e)e[t].open=!1;b.a.openChannels=[]}},{key:"componentWillUnmount",value:function(){k.Router.events.off("routeChangeStart",this.handleRouterStart),k.Router.events.off("routeChangeComplete",this.handleRouterChange)}},{key:"render",value:function(){var e=this.props;return _.a.createElement(t,e)}}]),r}(h.PureComponent);return w()(n,t),n}}},mPQl:function(e,t,n){n("+9rI")("Set")},mVXz:function(e,t,n){var r=n("/6KZ");r(r.P+r.R,"Set",{toJSON:n("BGbK")("Set")})},vI6Y:function(e,t,n){"use strict";var r=n("NWVE"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=o(n("mXGw")),i=n("9rrO");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(i.AmpStateContext))}},wS7J:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i}));var r=25,o=49,a="webapp_tiktok_open",i="webapp_tiktok_privious"},xVO4:function(e,t,n){"use strict";e.exports=n("9K2m")}}]);
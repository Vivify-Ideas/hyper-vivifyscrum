!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=l(o),i=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"renderLogo",value:function(){return a.default.createElement("svg",{viewBox:"0 0 14.01 13.99",style:this.props.style,id:this.props.id},a.default.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.default.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.default.createElement("path",{d:"M5.92,14a.58.58,0,0,1-.41-.17L.17,8.56A.59.59,0,1,1,1,7.73l4.87,4.8,7.09-9a.6.6,0,0,1,.82-.1.58.58,0,0,1,.1.82l-7.5,9.53A.52.52,0,0,1,6,14Z"}),a.default.createElement("path",{d:"M6.07,10.44a.57.57,0,0,1-.58-.57.63.63,0,0,1,.12-.37L12.8.22a.6.6,0,0,1,.82-.1.58.58,0,0,1,.1.82L6.53,10.22A.55.55,0,0,1,6.07,10.44Z"}))))}},{key:"renderArrow",value:function(){return a.default.createElement("svg",{viewBox:"0 0 40 43.4",style:this.props.style,id:this.props.id},a.default.createElement("g",{id:"double-caret_Layer_2","data-name":"Layer 2"},a.default.createElement("g",{id:"double-caret_Layer_1-2","data-name":"Layer 1"},a.default.createElement("g",{id:"double-caret_Side-menu-update"},a.default.createElement("g",{id:"double-caret_Collapse"},a.default.createElement("path",{id:"double-caret_Combined-Shape",d:"M0,40.08l20-20,20,20-3.31,3.31L20,26.7,3.31,43.4ZM0,20,20,0,40,20,36.69,23.3,20,6.63,3.31,23.33Z"}))))))}},{key:"renderDownload",value:function(){return a.default.createElement("svg",{viewBox:"0 0 512 512",style:this.props.style,id:this.props.id},a.default.createElement("g",null,a.default.createElement("path",{d:"M442.55,203.072c4.172-11.615,6.45-24.132,6.45-37.184c0-60.751-49.248-110-110-110c-34.805,0-65.829,16.169-85.985,41.4   c-12.395-6.021-26.31-9.4-41.015-9.4c-51.915,0-94,42.085-94,94c0,0.28,0.008,0.559,0.011,0.839   C68.92,189.095,31,231.062,31,281.888c0,55.229,44.771,100,100,100h63.646l-60.209-73.732h89.538v-93.102h88.667v93.102   l88.729,0.002l-60.207,73.73H381c55.229,0,100-44.771,100-100C481,249.873,465.954,221.375,442.55,203.072z"}),a.default.createElement("polygon",{points:"302.885,317.047 302.885,224.085 232.923,224.085 232.923,317.047 154.35,317.047 211.128,386.578    267.904,456.111 324.68,386.578 381.456,317.049  "})))}},{key:"renderReload",value:function(){return a.default.createElement("svg",{viewBox:"0 0 16 16",style:this.props.style,id:this.props.id},a.default.createElement("path",{d:"M 12.007 8.01 L 12.007 8.488 L 12 8.488 C 12 10.974 9.985 12.988 7.5 12.988 C 5.015 12.988 3 10.974 3 8.488 C 3 6.17 4.759 4.284 7.012 4.037 L 7.012 6.549 L 11.519 3.775 L 7.012 1 L 7.012 3.013 C 4.203 3.26 2 5.615 2 8.488 C 2 11.526 4.462 13.988 7.5 13.988 C 10.509 13.988 12.95 11.571 12.996 8.572 L 13 8.572 L 13 8.01 L 12.007 8.01 Z"}))}},{key:"renderConfiguration",value:function(){return a.default.createElement("svg",{viewBox:"0 0 48 48",style:this.props.style,id:this.props.id},a.default.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}),a.default.createElement("path",{d:"M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97l-.75-5.3c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97l-4.98-2.01c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31c-.08.64-.14 1.29-.14 1.95s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zm-14.86 5.05c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}))}},{key:"render",value:function(){switch(this.props.name){case"logo":return this.renderLogo();case"arrow":return this.renderArrow();case"download":return this.renderDownload();case"reload":return this.renderReload();case"configuration":return this.renderConfiguration();default:return a.default.createElement(o.Fragment,null)}}}]),t}();t.default=u,u.propTypes={name:i.default.string.isRequired,id:i.default.string,style:i.default.object}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBoardAuthConfig=function(){var e=localStorage.getItem("vivifyscrum_config");return Object.assign({code:"",email:"",token:"",filterByAssignee:""},JSON.parse(e)||{})}},function(e,t){e.exports=require("rebass")},function(e,t){e.exports=require("animejs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startAnimation=void 0;var r,o=n(5),a=(r=o)&&r.__esModule?r:{default:r};var i={rotate:"1turn",easing:"easeInOutSine",duration:1500,delay:function(e,t){return 250*t},direction:"alternate"};t.startAnimation=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;(0,a.default)(Object.assign({},i,t,{targets:e}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=c(o),i=c(n(0)),l=n(4),u=n(3);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state=(0,u.getBoardAuthConfig)(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"saveConfigAndExit",value:function(){localStorage.setItem("vivifyscrum_config",JSON.stringify(this.state)),this.props.toggleConfigurationPage()}},{key:"handleChange",value:function(e,t){var n={};n[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){var e=this;return a.default.createElement(o.Fragment,null,a.default.createElement(l.Toolbar,null,a.default.createElement(l.NavLink,null,"Configuration")),a.default.createElement(l.Container,null,a.default.createElement(l.Label,null,"Board Code"),a.default.createElement(l.Input,{placeholder:"Enter Board Code",value:this.state.code,onChange:function(t){return e.handleChange("code",t)}}),a.default.createElement(l.Label,null,"User email"),a.default.createElement(l.Input,{placeholder:"Enter your email",value:this.state.email,onChange:function(t){return e.handleChange("email",t)}}),a.default.createElement(l.Label,null,"Board API token"),a.default.createElement(l.Input,{placeholder:"Enter Board API token",value:this.state.token,onChange:function(t){return e.handleChange("token",t)}}),a.default.createElement(l.Label,null,"Filter By Assignee"),a.default.createElement(l.Input,{placeholder:"Enter Assignee Name partial to track Items",value:this.state.filterByAssignee,onChange:function(t){return e.handleChange("filterByAssignee",t)}}),a.default.createElement(l.ButtonOutline,{children:"Save and Go Back",style:{color:"#FFF",marginTop:"2rem"},onClick:this.saveConfigAndExit.bind(this)})))}}]),t}();t.default=s,s.propTypes={toggleConfigurationPage:i.default.func.isRequired}},function(e,t){e.exports=require("react-modal-image")},function(e,t){e.exports=require("snarkdown")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=f(o),i=f(n(10)),l=f(n(9)),u=n(8),c=f(n(2)),s=f(n(0));function f(e){return e&&e.__esModule?e:{default:e}}var d={Bug:"201, 25, 25",Story:"78, 173, 146",Improvement:"34, 190, 233",Task:"255, 157, 2",Note:"239, 211, 0",Idea:"243, 10, 177"},p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={expanded:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"parseMarkdown",value:function(e){return(0,l.default)(e).replace(/(src=")(?!https?:\/\/)\/?([^"]+\.(jpe?g|png|gif|bmp))"/gi,'$1https://vivifyscrum.com/$2"')}},{key:"onImagePreview",value:function(e){"IMG"===e.target.tagName&&i.default.render(a.default.createElement(u.Lightbox,{large:e.target.src,onClose:function(){return i.default.unmountComponentAtNode(document.getElementById("vivifyscrum-image-modal"))}}),document.getElementById("vivifyscrum-image-modal"))}},{key:"toggleItemItemState",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"getItemRgbaColor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".4";return"rgba("+d[e]+", "+t+")"}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{style:{display:"flex",flexDirection:"column",position:"relative",width:"100%",flexGrow:1,marginBottom:"1rem"}},this.props.children,a.default.createElement("div",{style:{background:this.getItemRgbaColor(this.props.item.type),padding:".5rem"}},a.default.createElement("span",{dangerouslySetInnerHTML:{__html:this.parseMarkdown(this.props.item.name)}}),this.props.item.description&&""!==this.props.item.description&&a.default.createElement("a",{style:{position:"relative",float:"right"},onClick:function(){return e.toggleItemItemState()}},a.default.createElement(c.default,{name:"arrow",style:{transition:"transform .1s ease",transform:this.state.expanded?"rotate(0deg)":"rotate(180deg)",width:"1rem",height:"1rem",fill:"#4ead92"}}))),this.state.expanded&&a.default.createElement(o.Fragment,null,a.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.parseMarkdown(this.props.item.description)},style:{maxWidth:"22rem",display:"inline-block",overflow:"hidden",background:"rgba(255, 255, 255, .2)",padding:".1rem"},onClick:function(t){return e.onImagePreview(t)}})))}}]),t}();t.default=p,p.propTypes={item:s.default.object.isRequired,children:s.default.any}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(1)),a=u(n(0)),i=u(n(2)),l=n(4);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={visible:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"toggleColumnVisibility",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){return o.default.createElement("div",{id:"vivifyscrum-column",style:{position:"absolute",width:"22rem",right:this.state.visible?0:"-22.3rem",height:"100%",background:"rgba(255, 255, 255, .1)"}},o.default.createElement("a",null,o.default.createElement(i.default,{name:"logo",style:{width:"1.8rem",height:"1.8rem",position:"absolute",left:"-2.5rem",fill:"#4ead92"}})),o.default.createElement("a",{onClick:this.toggleColumnVisibility.bind(this)},o.default.createElement(i.default,{name:"arrow",style:{transition:"transform .1s ease",transform:this.state.visible?"rotate(90deg)":"rotate(270deg)",width:"1.2rem",height:"1.2rem",position:"absolute",left:"-2rem",bottom:"1rem",fill:"#4ead92"}})),this.props.board&&o.default.createElement("div",{style:{background:"rgba(255, 255, 255, .2)",padding:".5rem",marginBottom:"1rem",maxWidth:"18rem"}},o.default.createElement(l.Truncate,null,o.default.createElement("span",null,this.props.board.code," - ",this.props.board.name))),o.default.createElement("div",{style:{height:"calc(100% - 2rem)",overflowY:"auto"}},this.props.children))}}]),t}();t.default=c,c.propTypes={children:a.default.any,board:a.default.object}},function(e,t){e.exports=require("vivify-cli/src/mapper.js")},function(e,t){e.exports=require("vivify-cli/src/api.js")},function(e,t){e.exports=require("fbjs/lib/emptyFunction")},function(e,t){e.exports=require("fbjs/lib/emptyObject")},function(e,t){e.exports=require("fbjs/lib/invariant")},function(e,t){e.exports=require("object-assign")},function(e,t,n){"use strict";
/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(18),o=n(17),a=n(16),i=n(15),l="function"==typeof Symbol&&Symbol.for,u=l?Symbol.for("react.element"):60103,c=l?Symbol.for("react.portal"):60106,s=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,d=l?Symbol.for("react.provider"):60109,p=l?Symbol.for("react.context"):60110,m=l?Symbol.for("react.async_mode"):60111,y=l?Symbol.for("react.forward_ref"):60112,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="http://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function b(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||v}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var w=E.prototype=new _;w.constructor=E,r(w,b.prototype),w.isPureReactComponent=!0;var C={current:null},k=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:u,type:e,key:a,ref:i,props:o,_owner:C.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var P=/\/+/g,S=[];function A(e,t,n,r){if(S.length){var o=S.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function I(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case c:a=!0}}if(a)return n(r,e,""===t?"."+M(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+M(o=e[i],i);a+=I(o,l,n,r)}else if(null===e||void 0===e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)a+=I(o=o.value,l=t+M(o,i++),n,r);else"object"===o&&g("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,i.thatReturnsArgument):null!=e&&(x(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function T(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),t=A(t,a,r,o),null==e||I(e,"",R,t),L(t)}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=A(null,null,t,n),null==e||I(e,"",B,t),L(t)},count:function(e){return null==e?0:I(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return T(e,t,null,i.thatReturnsArgument),t},only:function(e){return x(e)||g("143"),e}},createRef:function(){return{current:null}},Component:b,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:s,StrictMode:f,unstable_AsyncMode:m,createElement:j,cloneElement:function(e,t,n){(null===e||void 0===e)&&g("267",e);var o=void 0,a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)k.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:u,type:e.type,key:i,ref:l,props:a,_owner:c}},createFactory:function(e){var t=j.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:r}},$=Object.freeze({default:q}),F=$&&q||$;e.exports=F.default?F.default:F},function(e,t,n){"use strict";e.exports=n(19)},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(20),i=y(n(0)),l=y(n(14)),u=y(n(13)),c=y(n(12)),s=y(n(11)),f=y(n(2)),d=y(n(7)),p=n(6),m=n(3);function y(e){return e&&e.__esModule?e:{default:e}}function h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}t.decorateTerms=function(e,t){var n=t.React,y=function(t){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,t));return n.state={board:null,items:[],isConfigurationPage:!1},n.onDecorated=n.onDecorated.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n.Component),o(i,[{key:"onDecorated",value:function(e){this.terms=e,this.props.onDecorated&&this.props.onDecorated(e)}},{key:"filterItems",value:function(e){var t=(0,m.getBoardAuthConfig)().filterByAssignee;return e.columns.map(function(e){return e.items}).reduce(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return[].concat(h(e),h(t))}).filter(function(e){return e.assignees.map(function(e){return e.name.toLowerCase()}).join(";").indexOf(t.toLowerCase())>-1&&(!e.done_at||""===e.done_at)})}},{key:"getItems",value:function(){var e=this;return(0,p.startAnimation)("#animation-icon"),l.default.getBoardApiRequest((0,m.getBoardAuthConfig)()).then(function(e){var t=e.data;return u.default.prepareBoardData(t)}).then(function(t){e.setState({board:t,items:e.filterItems(t)})})}},{key:"toggleConfigurationPage",value:function(){this.setState({isConfigurationPage:!this.state.isConfigurationPage})}},{key:"render",value:function(){return n.createElement(e,r({},this.props,{onDecorated:this.onDecorated,customChildren:n.createElement(a.Fragment,null,n.createElement(c.default,{board:this.state.board},this.state.isConfigurationPage?n.createElement(d.default,{toggleConfigurationPage:this.toggleConfigurationPage.bind(this)}):n.createElement(a.Fragment,null,n.createElement("a",{onClick:this.getItems.bind(this),style:{position:"absolute",right:0,top:0}},n.createElement(f.default,{id:"animation-icon",name:this.state.board?"reload":"download",style:{width:"1.8rem",height:"1.8rem",fill:"#4ead92"}})),n.createElement("a",{onClick:this.toggleConfigurationPage.bind(this),style:{position:"absolute",right:"2rem",top:0}},n.createElement(f.default,{name:"configuration",style:{width:"1.8rem",height:"1.8rem",fill:"#4ead92"}})),this.state.items.map(function(e){return n.createElement(s.default,{item:e,key:e.id})}))),n.createElement("div",{id:"vivifyscrum-image-modal"}))}))}}]),i}();return y.propTypes={onDecorated:i.default.any},y}}]));
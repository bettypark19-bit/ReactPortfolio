import{a as e,i as t,n,r,t as i}from"./rolldown-runtime-COnpUsM8.js";var a=i((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function O(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,O(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),O(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=O(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=O(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return O(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function k(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function A(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oe={map:k,forEach:function(e,t,n){k(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ae)}catch(e){ae(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),o=i(((e,t)=>{t.exports=a()}));function s(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e){if(Array.isArray(e))return e}function l(e){if(Array.isArray(e))return s(e)}function u(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function p(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=E(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function m(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function g(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function _(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?y(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t){return c(e)||g(e,t)||E(e,t)||_()}function S(e){return l(e)||h(e)||E(e)||v()}function C(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function w(e){var t=C(e,`string`);return typeof t==`symbol`?t:t+``}function T(e){"@babel/helpers - typeof";return T=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},T(e)}function E(e,t){if(e){if(typeof e==`string`)return s(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}var ee=function(){},D={},te={},ne=null,re={mark:ee,measure:ee};try{typeof window<`u`&&(D=window),typeof document<`u`&&(te=document),typeof MutationObserver<`u`&&(ne=MutationObserver),typeof performance<`u`&&(re=performance)}catch{}var ie=(D.navigator||{}).userAgent,O=ie===void 0?``:ie,k=D,A=te,ae=ne,oe=re;k.document;var j=!!A.documentElement&&!!A.head&&typeof A.addEventListener==`function`&&typeof A.createElement==`function`,se=~O.indexOf(`MSIE`)||~O.indexOf(`Trident/`),ce,le=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ue=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,de={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},fe={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},pe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],M=`classic`,me=`duotone`,he=`sharp`,ge=`sharp-duotone`,_e=`chisel`,ve=`etch`,ye=`graphite`,be=`jelly`,xe=`jelly-duo`,Se=`jelly-fill`,Ce=`notdog`,we=`notdog-duo`,Te=`slab`,Ee=`slab-press`,De=`thumbprint`,Oe=`utility`,ke=`utility-duo`,Ae=`utility-fill`,je=`whiteboard`,Me=`Classic`,Ne=`Duotone`,Pe=`Sharp`,Fe=`Sharp Duotone`,Ie=`Chisel`,Le=`Etch`,Re=`Graphite`,ze=`Jelly`,Be=`Jelly Duo`,Ve=`Jelly Fill`,He=`Notdog`,Ue=`Notdog Duo`,We=`Slab`,Ge=`Slab Press`,Ke=`Thumbprint`,qe=`Utility`,Je=`Utility Duo`,Ye=`Utility Fill`,Xe=`Whiteboard`,Ze=[M,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je];ce={},m(m(m(m(m(m(m(m(m(m(ce,M,Me),me,Ne),he,Pe),ge,Fe),_e,Ie),ve,Le),ye,Re),be,ze),xe,Be),Se,Ve),m(m(m(m(m(m(m(m(m(ce,Ce,He),we,Ue),Te,We),Ee,Ge),De,Ke),Oe,qe),ke,Je),Ae,Ye),je,Xe);var Qe={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},$e={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},et=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),tt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},nt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],rt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},it=[`kit`];m(m({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var at={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ot={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},st={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ct={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},lt,ut={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},dt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];lt={},m(m(m(m(m(m(m(m(m(m(lt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),m(m(m(m(m(m(m(m(m(lt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),m(m({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ft={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},pt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},mt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ht=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(dt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),gt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],_t=[1,2,3,4,5,6,7,8,9,10],vt=_t.concat([11,12,13,14,15,16,17,18,19,20]),yt=[].concat(S(Object.keys(pt)),gt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY],_t.map(function(e){return`${e}x`}),vt.map(function(e){return`w-${e}`})),bt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},N=`___FONT_AWESOME___`,xt=16,St=`fa`,Ct=`svg-inline--fa`,P=`data-fa-i2svg`,wt=`data-fa-pseudo-element`,Tt=`data-fa-pseudo-element-pending`,Et=`data-prefix`,Dt=`data-icon`,Ot=`fontawesome-i2svg`,kt=`async`,At=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],jt=[`::before`,`::after`,`:before`,`:after`],Mt=function(){try{return!0}catch{return!1}}();function Nt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[M]}})}var Pt=b({},de);Pt[M]=b(b(b(b({},{"fa-duotone":`duotone`}),de[M]),rt.kit),rt[`kit-duotone`]);var Ft=Nt(Pt),It=b({},tt);It[M]=b(b(b(b({},{duotone:`fad`}),It[M]),ct.kit),ct[`kit-duotone`]);var Lt=Nt(It),Rt=b({},mt);Rt[M]=b(b({},Rt[M]),st.kit);var zt=Nt(Rt),Bt=b({},ft);Bt[M]=b(b({},Bt[M]),at.kit),Nt(Bt);var Vt=le,Ht=`fa-layers-text`,Ut=ue;Nt(b({},Qe));var Wt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Gt=fe,Kt=[].concat(S(it),S(yt)),qt=k.FontAwesomeConfig||{};function Jt(e){var t=A.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Yt(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}A&&typeof A.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=x(e,2),n=t[0],r=t[1],i=Yt(Jt(n));i!=null&&(qt[r]=i)});var Xt={styleDefault:`solid`,familyDefault:M,cssPrefix:St,replacementClass:Ct,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qt.familyPrefix&&(qt.cssPrefix=qt.familyPrefix);var F=b(b({},Xt),qt);F.autoReplaceSvg||(F.observeMutations=!1);var I={};Object.keys(Xt).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(t){F[e]=t,Zt.forEach(function(e){return e(I)})},get:function(){return F[e]}})}),Object.defineProperty(I,`familyPrefix`,{enumerable:!0,set:function(e){F.cssPrefix=e,Zt.forEach(function(e){return e(I)})},get:function(){return F.cssPrefix}}),k.FontAwesomeConfig=I;var Zt=[];function Qt(e){return Zt.push(e),function(){Zt.splice(Zt.indexOf(e),1)}}var L=xt,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $t(e){if(!(!e||!j)){var t=A.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=A.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return A.head.insertBefore(t,r),e}}var en=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function tn(){for(var e=12,t=``;e-- >0;)t+=en[Math.random()*62|0];return t}function z(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function nn(e){return e.classList?z(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function rn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function an(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${rn(e[n])}" `},``).trim()}function on(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function sn(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function cn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function ln(e){var t=e.transform,n=e.width,r=n===void 0?xt:n,i=e.height,a=i===void 0?xt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&se?c+=`translate(${t.x/L-r/2}em, ${t.y/L-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/L}em), calc(-50% + ${t.y/L}em)) `:c+=`translate(${t.x/L}em, ${t.y/L}em) `,c+=`scale(${t.size/L*(t.flipX?-1:1)}, ${t.size/L*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var un=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function dn(){var e=St,t=Ct,n=I.cssPrefix,r=I.replacementClass,i=un;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var fn=!1;function pn(){I.autoAddCss&&!fn&&($t(dn()),fn=!0)}var mn={mixout:function(){return{dom:{css:dn,insertCss:pn}}},hooks:function(){return{beforeDOMElementCreation:function(){pn()},beforeI2svg:function(){pn()}}}},B=k||{};B[N]||(B[N]={}),B[N].styles||(B[N].styles={}),B[N].hooks||(B[N].hooks={}),B[N].shims||(B[N].shims=[]);var V=B[N],hn=[],gn=function(){A.removeEventListener(`DOMContentLoaded`,gn),_n=1,hn.map(function(e){return e()})},_n=!1;j&&(_n=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),_n||A.addEventListener(`DOMContentLoaded`,gn));function vn(e){j&&(_n?setTimeout(e,0):hn.push(e))}function H(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?rn(e):`<${t} ${an(r)}>${a.map(H).join(``)}</${t}>`}function yn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},xn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:bn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Sn(e){return S(e).length===1?e.codePointAt(0).toString(16):null}function Cn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function wn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Cn(t);typeof V.hooks.addPack==`function`&&!r?V.hooks.addPack(e,Cn(t)):V.styles[e]=b(b({},V.styles[e]||{}),i),e===`fas`&&wn(`fa`,t)}var U=V.styles,Tn=V.shims,En=Object.keys(zt),Dn=En.reduce(function(e,t){return e[t]=Object.keys(zt[t]),e},{}),On=null,kn={},An={},jn={},Mn={},Nn={};function Pn(e){return~Kt.indexOf(e)}function Fn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Pn(i)?i:null}var In=function(){var e=function(e){return xn(U,function(t,n,r){return t[r]=xn(n,e,{}),t},{})};kn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),An=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Nn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in U||I.autoFetchSvg,n=xn(Tn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});jn=n.names,Mn=n.unicodes,On=Un(I.styleDefault,{family:I.familyDefault})};Qt(function(e){On=Un(e.styleDefault,{family:I.familyDefault})}),In();function Ln(e,t){return(kn[e]||{})[t]}function Rn(e,t){return(An[e]||{})[t]}function W(e,t){return(Nn[e]||{})[t]}function zn(e){return jn[e]||{prefix:null,iconName:null}}function Bn(e){var t=Mn[e],n=Ln(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function G(){return On}var Vn=function(){return{prefix:null,iconName:null,rest:[]}};function Hn(e){var t=M,n=En.reduce(function(e,t){return e[t]=`${I.cssPrefix}-${t}`,e},{});return Ze.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Dn[r].includes(e)}))&&(t=r)}),t}function Un(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?M:t,r=Ft[n][e];if(n===me&&!e)return`fad`;var i=Lt[n][e]||Lt[n][r],a=e in V.styles?e:null;return i||a||null}function Wn(e){var t=[],n=null;return e.forEach(function(e){var r=Fn(I.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Gn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Kn=ht.concat(nt);function qn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Gn(e.filter(function(e){return Kn.includes(e)})),a=Gn(e.filter(function(e){return!Kn.includes(e)})),o=x(i.filter(function(e){return r=e,!pe.includes(e)}),1)[0],s=o===void 0?null:o,c=Hn(i),l=b(b({},Wn(a)),{},{prefix:Un(s,{family:c})});return b(b(b({},l),Zn({values:e,family:c,styles:U,config:I,canonical:l,givenPrefix:r})),Jn(n,r,l))}function Jn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?zn(i):{},o=W(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!U.far&&U.fas&&!I.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Yn=Ze.filter(function(e){return e!==M||e!==me}),Xn=Object.keys(mt).filter(function(e){return e!==M}).map(function(e){return Object.keys(mt[e])}).flat();function Zn(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===me,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Yn.includes(n)&&(Object.keys(s).find(function(e){return Xn.includes(e)})||l.autoFetchSvg)&&(r.prefix=et.get(n).defaultShortPrefixId,r.iconName=W(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=G()||`fas`),r}var Qn=function(){function e(){u(this,e),this.definitions={}}return f(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=b(b({},e.definitions[n]||{}),t[n]),wn(n,t[n]);var r=zt[M][n];r&&wn(r,t[n]),In()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),$n=[],K={},q={},er=Object.keys(q);function tr(e,t){var n=t.mixoutsTo;return $n=e,K={},Object.keys(q).forEach(function(e){er.indexOf(e)===-1&&delete q[e]}),$n.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),T(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){K[e]||(K[e]=[]),K[e].push(r[e])})}e.provides&&e.provides(q)}),n}function nr(e,t){var n=[...arguments].slice(2);return(K[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function J(e){var t=[...arguments].slice(1);(K[e]||[]).forEach(function(e){e.apply(null,t)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function rr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||G();if(t)return t=W(n,t)||t,yn(ir.definitions,n,t)||yn(V.styles,n,t)}var ir=new Qn,X={noAuto:function(){I.autoReplaceSvg=!1,I.observeMutations=!1,J(`noAuto`)},config:I,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(J(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,vn(function(){ar({autoReplaceSvgRoot:t}),J(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(T(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Un(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${I.cssPrefix}-`)>-1||e.match(Vt))){var r=qn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=G();return{prefix:i,iconName:W(i,e)||e}}}},library:ir,findIconDefinition:rr,toHtml:H},ar=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?A:e;(Object.keys(V.styles).length>0||I.autoFetchSvg)&&j&&I.autoReplaceSvg&&X.dom.i2svg({node:t})};function or(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return H(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(j){var t=A.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function sr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(sn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=on(b(b({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function cr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${I.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:b(b({},i),{},{id:o}),children:r}]}]}function lr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function ur(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[I.replacementClass,a?`${I.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:b(b({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!lr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[P]=``);var _=b(b({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:b({},l.styles)}),v=r.found&&n.found?Y(`generateAbstractMask`,_)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,x=v.attributes;return _.children=y,_.attributes=x,s?cr(_):sr(_)}function dr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=b(b({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[P]=``);var l=b({},a.styles);sn(i)&&(l.transform=ln({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=on(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function fr(e){var t=e.content,n=e.extra,r=b(b({},n.attributes),{},{class:n.classes.join(` `)}),i=on(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var pr=V.styles;function mr(e){var t=e[0],n=e[1],r=x(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${I.cssPrefix}-${Gt.GROUP}`},children:[{tag:`path`,attributes:{class:`${I.cssPrefix}-${Gt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${I.cssPrefix}-${Gt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var hr={found:!1,width:512,height:512};function gr(e,t){!Mt&&!I.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function _r(e,t){var n=t;return t===`fa`&&I.styleDefault!==null&&(t=G()),new Promise(function(r,i){if(n===`fa`){var a=zn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){var o=pr[t][e];return r(mr(o))}gr(e,t),r(b(b({},hr),{},{icon:I.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var vr=function(){},yr=I.measurePerformance&&oe&&oe.mark&&oe.measure?oe:{mark:vr,measure:vr},br=`FA "7.2.0"`,xr=function(e){return yr.mark(`${br} ${e} begins`),function(){return Sr(e)}},Sr=function(e){yr.mark(`${br} ${e} ends`),yr.measure(`${br} ${e}`,`${br} ${e} begins`,`${br} ${e} ends`)},Cr={begin:xr,end:Sr},wr=function(){};function Tr(e){return typeof(e.getAttribute?e.getAttribute(P):null)==`string`}function Er(e){var t=e.getAttribute?e.getAttribute(Et):null,n=e.getAttribute?e.getAttribute(Dt):null;return t&&n}function Dr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Or(){return I.autoReplaceSvg===!0?Nr.replace:Nr[I.autoReplaceSvg]||Nr.replace}function kr(e){return A.createElementNS(`http://www.w3.org/2000/svg`,e)}function Ar(e){return A.createElement(e)}function jr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?kr:Ar:t;if(typeof e==`string`)return A.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(jr(e,{ceFn:n}))}),r}function Mr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Nr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(jr(e),t)}),t.getAttribute(P)===null&&I.keepOriginalSource){var n=A.createComment(Mr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~nn(t).indexOf(I.replacementClass))return Nr.replace(e);var r=RegExp(`${I.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===I.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return H(e)}).join(`
`);t.setAttribute(P,``),t.innerHTML=a}};function Pr(e){e()}function Fr(e,t){var n=typeof t==`function`?t:wr;if(e.length===0)n();else{var r=Pr;I.mutateApproach===kt&&(r=k.requestAnimationFrame||Pr),r(function(){var t=Or(),r=Cr.begin(`mutate`);e.map(t),r(),n()})}}var Ir=!1;function Lr(){Ir=!0}function Rr(){Ir=!1}var zr=null;function Br(e){if(ae&&I.observeMutations){var t=e.treeCallback,n=t===void 0?wr:t,r=e.nodeCallback,i=r===void 0?wr:r,a=e.pseudoElementsCallback,o=a===void 0?wr:a,s=e.observeMutationsRoot,c=s===void 0?A:s;zr=new ae(function(e){if(!Ir){var t=G();z(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Tr(e.addedNodes[0])&&(I.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&I.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Tr(e.target)&&~Wt.indexOf(e.attributeName))if(e.attributeName===`class`&&Er(e.target)){var r=qn(nn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Et,a||t),s&&e.target.setAttribute(Dt,s)}else Dr(e.target)&&i(e.target)})}}),j&&zr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vr(){zr&&zr.disconnect()}function Hr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Ur(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=qn(nn(e));return i.prefix||=G(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Rn(i.prefix,e.innerText)||Ln(i.prefix,Sn(e.innerText))),!i.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Wr(e){return z(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Gr(){return{iconName:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ur(e),r=n.iconName,i=n.prefix,a=n.rest,o=Wr(e),s=nr(`parseNodeAttributes`,{},e);return b({iconName:r,prefix:i,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Hr(e):[],attributes:o}},s)}var qr=V.styles;function Jr(e){var t=I.autoReplaceSvg===`nest`?Kr(e,{styleParser:!1}):Kr(e);return~t.extra.classes.indexOf(Ht)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function Yr(){return[].concat(S(nt),S(ht))}function Xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=A.documentElement.classList,r=function(e){return n.add(`${Ot}-${e}`)},i=function(e){return n.remove(`${Ot}-${e}`)},a=I.autoFetchSvg?Yr():pe.concat(Object.keys(qr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Ht}:not([${P}])`].concat(a.map(function(e){return`.${e}:not([${P}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=z(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Cr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Jr(t);n&&e.push(n)}catch(e){Mt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Fr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Zr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jr(e).then(function(e){e&&Fr([e],t)})}function Qr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:rr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:rr(i||{}),e(r,b(b({},n),{},{mask:i}))}}var $r=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?R:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return or(b({type:`icon`},e),function(){return J(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),ur({icons:{main:mr(v),mask:s?mr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:b(b({},R),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ei={mixout:function(){return{icon:Qr($r)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Xr,e.nodeCallback=Zr,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?A:t,r=e.callback;return Xr(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([_r(n,r),o.iconName?_r(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=x(o,2),u=l[0],d=l[1];t([e,ur({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=on(a);o.length>0&&(n.style=o);var s;return sn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ti={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return or({type:`layer`},function(){J(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${I.cssPrefix}-layers`].concat(S(r)).join(` `)},children:n}]})}}}},ni={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return or({type:`counter`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),fr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${I.cssPrefix}-layers-counter`].concat(S(a))}})})}}}},ri={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?R:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return or({type:`text`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),dr({content:e,transform:b(b({},R),r),extra:{attributes:s,styles:l,classes:[`${I.cssPrefix}-layers-text`].concat(S(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(se){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,dr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},ii=RegExp(`"`,`ug`),ai=[1105920,1112319],oi=b(b(b(b({},{FontAwesome:{normal:`fas`,400:`fas`}}),$e),bt),ot),si=Object.keys(oi).reduce(function(e,t){return e[t.toLowerCase()]=oi[t],e},{}),ci=Object.keys(si).reduce(function(e,t){var n=si[t];return e[t]=n[900]||S(Object.entries(n))[0][1],e},{});function li(e){return Sn(S(e.replace(ii,``))[0]||``)}function ui(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(ii,``),r=n.codePointAt(0),i=r>=ai[0]&&r<=ai[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function di(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(si[n]||{})[i]||ci[n]}function fi(e,t){var n=`${Tt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=z(e.children).filter(function(e){return e.getAttribute(wt)===t})[0],o=k.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ut),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=di(s,l),p=li(d),m=c[0].startsWith(`FontAwesome`),h=ui(o),g=Ln(f,p),_=g;if(m){var v=Bn(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Et)!==f||a.getAttribute(Dt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Gr(),x=y.extra;x.attributes[wt]=t,_r(g,f).then(function(i){var a=ur(b(b({},y),{},{icons:{main:i,mask:Vn()},prefix:f,iconName:_,extra:x,watchable:!0})),o=A.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return H(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function pi(e){return Promise.all([fi(e,`::before`),fi(e,`::after`)])}function mi(e){return e.parentNode!==document.head&&!~At.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var hi=function(e){return!!e&&jt.some(function(t){return e.includes(t)})},gi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=p(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(hi(a)){var o=jt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var n;if(t)n=e;else if(I.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=p(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=p(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=p(gi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){I.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=z(n).filter(mi).map(pi),i=Cr.begin(`searchPseudoElements`);Lr(),Promise.all(r).then(function(){i(),Rr(),e()}).catch(function(){i(),Rr(),t()})})}}var vi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=_i,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?A:t;I.searchPseudoElements&&_i(n)}}},yi=!1,bi={mixout:function(){return{dom:{unwatch:function(){Lr(),yi=!0}}}},hooks:function(){return{bootstrap:function(){Br(nr(`mutationObserverCallbacks`,{}))},noAuto:function(){Vr()},watch:function(e){var t=e.observeMutationsRoot;yi?Rr():Br(nr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},xi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Si={mixout:function(){return{parse:{transform:function(e){return xi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=xi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:b({},a.outer),children:[{tag:`g`,attributes:b({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:b(b({},t.icon.attributes),a.path)}]}]}}}},Ci={x:0,y:0,width:`100%`,height:`100%`};function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ti(e){return e.tag===`g`?e.children:[e]}tr([mn,ei,ti,ni,ri,vi,bi,Si,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?qn(n.split(` `).map(function(e){return e.trim()})):Vn();return r.prefix||=G(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=cn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:b(b({},Ci),{},{fill:`white`})},p=c.children?{children:c.children.map(wi)}:{},m={tag:`g`,attributes:b({},d.inner),children:[wi(b({tag:c.tag,attributes:b(b({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:b({},d.outer),children:[m]},g=`mask-${a||tn()}`,_=`clip-${a||tn()}`,v={tag:`mask`,attributes:b(b({},Ci),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ti(u)},v]};return t.push(y,{tag:`rect`,attributes:b({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ci)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;k.matchMedia&&(t=k.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:b(b({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=b(b({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:b(b({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:b(b({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:b(b({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:b(b({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:b(b({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:b(b({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:b(b({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:X}),X.noAuto,X.config,X.library,X.dom;var Ei=X.parse;X.findIconDefinition,X.toHtml;var Di=X.icon;X.layer,X.text,X.counter;var Oi=i(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),ki=i(((e,t)=>{var n=Oi();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Ai=i(((e,t)=>{t.exports=ki()()})),ji=r({author:()=>Ii,bugs:()=>Fi,default:()=>Ji,dependencies:()=>zi,description:()=>Mi,engines:()=>Ri,exports:()=>Ki,homepage:()=>Pi,keywords:()=>Ni,license:()=>`MIT`,main:()=>Hi,module:()=>Ui,name:()=>Vi,repository:()=>Li,sideEffects:()=>qi,style:()=>Wi,types:()=>Gi,version:()=>Bi}),Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi=n((()=>{Mi=`The iconic font, CSS, and SVG framework`,Ni=[`font`,`awesome`,`fontawesome`,`icon`,`svg`,`bootstrap`],Pi=`https://fontawesome.com`,Fi={url:`https://github.com/FortAwesome/Font-Awesome/issues`},Ii=`The Font Awesome Team (https://github.com/orgs/FortAwesome/people)`,Li={type:`git`,url:`https://github.com/FortAwesome/Font-Awesome`},Ri={node:`>=6`},zi={"@fortawesome/fontawesome-common-types":`7.2.0`},Bi=`7.2.0`,Vi=`@fortawesome/fontawesome-svg-core`,Hi=`index.js`,Ui=`index.mjs`,Wi=`styles.css`,Gi=`./index.d.ts`,Ki={".":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,style:`./styles.css`,default:`./index.js`},"./index":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,default:`./index.js`},"./index.js":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,default:`./index.js`},"./plugins":{types:`./index.d.ts`,module:`./plugins.mjs`,import:`./plugins.mjs`,default:`./plugins.mjs`},"./import.macro":`./import.macro.js`,"./import.macro.js":`./import.macro.js`,"./styles":`./styles.css`,"./styles.css":`./styles.css`,"./package.json":`./package.json`},qi=[`./index.js`,`./index.mjs`,`./styles.css`],Ji={description:Mi,keywords:Ni,homepage:Pi,bugs:Fi,author:Ii,repository:Li,engines:Ri,dependencies:zi,version:Bi,name:Vi,main:Hi,module:Ui,"jsnext:main":`index.mjs`,style:Wi,license:`MIT`,types:Gi,exports:Ki,sideEffects:qi}})),Z=e(Ai()),Xi=e(o());function Zi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Qi(e){if(Array.isArray(e))return e}function $i(e){if(Array.isArray(e))return Zi(e)}function Q(e,t,n){return(t=ua(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ea(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ta(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function na(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ra(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ia(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ia(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ia(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function aa(e,t){if(e==null)return{};var n,r,i=oa(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function oa(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function sa(e,t){return Qi(e)||ta(e,t)||fa(e,t)||na()}function ca(e){return $i(e)||ea(e)||fa(e)||ra()}function la(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ua(e){var t=la(e,`string`);return typeof t==`symbol`?t:t+``}function da(e){"@babel/helpers - typeof";return da=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},da(e)}function fa(e,t){if(e){if(typeof e==`string`)return Zi(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zi(e,t):void 0}}var pa=`7.0.0`,ma;try{ma=(Yi(),t(ji).default).version}catch{ma=typeof process<`u`&&{}.FA_VERSION||`7.0.0`}function ha(e){var t=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,a=e.shake,o=e.flash,s=e.spin,c=e.spinPulse,l=e.spinReverse,u=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,m=e.listItem,h=e.flip,g=e.size,_=e.rotation,v=e.pull,y=e.swapOpacity,b=e.rotateBy,x=e.widthAuto,S=ga(ma,pa),C=Q(Q(Q(Q(Q(Q({"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h===`horizontal`||h===`both`,"fa-flip-vertical":h===`vertical`||h===`both`},`fa-${g}`,g!=null),`fa-rotate-${_}`,_!=null&&_!==0),`fa-pull-${v}`,v!=null),`fa-swap-opacity`,y),`fa-rotate-by`,S&&b),`fa-width-auto`,S&&x);return Object.keys(C).map(function(e){return C[e]?e:null}).filter(function(e){return e})}function ga(e,t){for(var n=sa(e.split(`-`),2),r=n[0],i=n[1],a=sa(t.split(`-`),2),o=a[0],s=a[1],c=r.split(`.`),l=o.split(`.`),u=0;u<Math.max(c.length,l.length);u++){var d=c[u]||`0`,f=l[u]||`0`,p=parseInt(d,10),m=parseInt(f,10);if(p!==m)return p>m}for(var h=0;h<Math.max(c.length,l.length);h++){var g=c[h]||`0`,_=l[h]||`0`;if(g!==_&&g.length!==_.length)return g.length<_.length}return!(i&&!s)}function _a(e){return e-=0,e===e}function va(e){return _a(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}var ya=[`style`];function ba(e){return e.charAt(0).toUpperCase()+e.slice(1)}function xa(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=va(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith(`webkit`)?e[ba(r)]=i:e[r]=i,e},{})}function Sa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t==`string`)return t;var r=(t.children||[]).map(function(t){return Sa(e,t)}),i=Object.keys(t.attributes||{}).reduce(function(e,n){var r=t.attributes[n];switch(n){case`class`:e.attrs.className=r,delete t.attributes.class;break;case`style`:e.attrs.style=xa(r);break;default:n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[va(n)]=r}return e},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=aa(n,ya);return i.attrs.style=$($({},i.attrs.style),o),e.apply(void 0,[t.tag,$($({},i.attrs),s)].concat(ca(r)))}var Ca=!1;try{Ca=!0}catch{}function wa(){if(!Ca&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function Ta(e){if(e&&da(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Ei.icon)return Ei.icon(e);if(e===null)return null;if(e&&da(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function Ea(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}var Da={border:!1,className:``,mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Oa=Xi.forwardRef(function(e,t){var n=$($({},Da),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=Ta(r),d=Ea(`classes`,[].concat(ca(ha(n)),ca((o||``).split(` `)))),f=Ea(`transform`,typeof n.transform==`string`?Ei.transform(n.transform):n.transform),p=Ea(`mask`,Ta(i)),m=Di(u,$($($($({},d),f),p),{},{symbol:a,title:s,titleId:c,maskId:l}));if(!m)return wa(`Could not find icon`,u),null;var h=m.abstract,g={ref:t};return Object.keys(n).forEach(function(e){Da.hasOwnProperty(e)||(g[e]=n[e])}),ka(h[0],g)});Oa.displayName=`FontAwesomeIcon`,Oa.propTypes={beat:Z.default.bool,border:Z.default.bool,beatFade:Z.default.bool,bounce:Z.default.bool,className:Z.default.string,fade:Z.default.bool,flash:Z.default.bool,mask:Z.default.oneOfType([Z.default.object,Z.default.array,Z.default.string]),maskId:Z.default.string,fixedWidth:Z.default.bool,inverse:Z.default.bool,flip:Z.default.oneOf([!0,!1,`horizontal`,`vertical`,`both`]),icon:Z.default.oneOfType([Z.default.object,Z.default.array,Z.default.string]),listItem:Z.default.bool,pull:Z.default.oneOf([`right`,`left`]),pulse:Z.default.bool,rotation:Z.default.oneOf([0,90,180,270]),rotateBy:Z.default.bool,shake:Z.default.bool,size:Z.default.oneOf([`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`]),spin:Z.default.bool,spinPulse:Z.default.bool,spinReverse:Z.default.bool,symbol:Z.default.oneOfType([Z.default.bool,Z.default.string]),title:Z.default.string,titleId:Z.default.string,transform:Z.default.oneOfType([Z.default.string,Z.default.object]),swapOpacity:Z.default.bool,widthAuto:Z.default.bool};var ka=Sa.bind(null,Xi.createElement),Aa={prefix:`fas`,iconName:`expand`,icon:[448,512,[],`f065`,`M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z`]},ja={prefix:`fas`,iconName:`file-lines`,icon:[384,512,[128441,128462,61686,`file-alt`,`file-text`],`f15c`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z`]},Ma={prefix:`fas`,iconName:`scissors`,icon:[512,512,[9984,9986,9988,`cut`],`f0c4`,`M192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L256 192 216.5 152.5c4.9-12.6 7.5-26.2 7.5-40.5 0-61.9-50.1-112-112-112S0 50.1 0 112 50.1 224 112 224c14.3 0 27.9-2.7 40.5-7.5L192 256zm97.9 97.9L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6l-145.3-145.3-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z`]},Na={prefix:`fas`,iconName:`compress`,icon:[448,512,[],`f066`,`M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z`]},Pa={prefix:`fas`,iconName:`pen-nib`,icon:[512,512,[10001],`f5ad`,`M368.5 18.3l-50.1 50.1 125.3 125.3 50.1-50.1c21.9-21.9 21.9-57.3 0-79.2L447.7 18.3c-21.9-21.9-57.3-21.9-79.2 0zM279.3 97.2l-.5 .1-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-2.9 8.7-1.9 18.2 2.5 26L161.7 316.4c-1.1-4-1.6-8.1-1.6-12.4 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-4.3 0-8.5-.6-12.4-1.6L40.3 505.7c7.8 4.4 17.2 5.4 26 2.5l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 .1-.5-135.5-135.5z`]},Fa={prefix:`fas`,iconName:`grip`,icon:[512,512,[58119,`grid-horizontal`,`grip-horizontal`],`f58d`,`M88 96c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0zM280 224l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40zm192 0l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40zm0 192l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40zM280 288c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0zM88 416l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40z`]},Ia={prefix:`fab`,iconName:`github`,icon:[512,512,[],`f09b`,`M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`]};export{Fa as a,Oa as c,ja as i,o as l,Na as n,Pa as o,Aa as r,Ma as s,Ia as t};
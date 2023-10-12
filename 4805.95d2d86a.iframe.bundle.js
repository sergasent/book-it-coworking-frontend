/*! For license information please see 4805.95d2d86a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[4805],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@remix-run/router/dist/router.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Action;__webpack_require__.d(__webpack_exports__,{Ep:function(){return createPath},J0:function(){return invariant},RQ:function(){return joinPaths},X3:function(){return AbortedDeferredError},Zn:function(){return stripBasename},Zq:function(){return getPathContributingMatches},aU:function(){return Action},cP:function(){return parsePath},lX:function(){return createBrowserHistory},pC:function(){return resolveTo}}),function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname:pathname,search:search,hash:hash}=window.location;return createLocation("",{pathname:pathname,search:search,hash:hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:createPath(to)}),null,options)}function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?parsePath(to):to,{state:state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function createPath(_ref){let{pathname:pathname="/",search:search="",hash:hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window:window=document.defaultView,v5Compat:v5Compat=!1}=options,globalHistory=window.history,action=Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action:action,location:history.location,delta:delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref(to){return createHref(window,to)},createURL:createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){if(error instanceof DOMException&&"DataCloneError"===error.name)throw error;window.location.assign(url)}v5Compat&&listener&&listener({action:action,location:history.location,delta:1})},replace:function replace(to,state){action=Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action:action,location:history.location,delta:0})},go(n){return globalHistory.go(n)}};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search:search="",hash:hash=""}="string"==typeof to?parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname:pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";class AbortedDeferredError extends Error{}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},"./node_modules/react-router/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{F0:function(){return Router},FR:function(){return DataRouterStateContext},TH:function(){return useLocation},Us:function(){return NavigationContext},WU:function(){return useResolvedPath},oQ:function(){return useHref},s0:function(){return useNavigate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const DataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const DataRouterStateContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const NavigationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const LocationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const RouteContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({outlet:null,matches:[],isDataRoute:!1});function useHref(to,_temp){let{relative:relative}=void 0===_temp?{}:_temp;useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let{basename:basename,navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{hash:hash,pathname:pathname,search:search}=useResolvedPath(to,{relative:relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,pathname])),navigator.createHref({pathname:joinedPathname,search:search,hash:hash})}function useInRouterContext(){return null!=react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext)}function useLocation(){return useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location}function useIsomorphicLayoutEffect(cb){react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb)}function useNavigate(){let{isDataRoute:isDataRoute}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);return isDataRoute?function useNavigateStable(){let{router:router}=useDataRouterContext(DataRouterHook.UseNavigateStable),id=useCurrentRouteId(DataRouterStateHook.UseNavigateStable),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){void 0===options&&(options={}),activeRef.current&&("number"==typeof to?router.navigate(to):router.navigate(to,_extends({fromRouteId:id},options)))}),[router,id])}():function useNavigateUnstable(){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let dataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext),{basename:basename,navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase))),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);null==dataRouterContext&&"/"!==basename&&(path.pathname="/"===path.pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname,dataRouterContext])}()}function useResolvedPath(to,_temp2){let{relative:relative}=void 0===_temp2?{}:_temp2,{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase)));return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}react__WEBPACK_IMPORTED_MODULE_0__.Component;var DataRouterHook=function(DataRouterHook){return DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate",DataRouterHook}(DataRouterHook||{}),DataRouterStateHook=function(DataRouterStateHook){return DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId",DataRouterStateHook}(DataRouterStateHook||{});function useDataRouterContext(hookName){let ctx=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);return ctx||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),ctx}function useCurrentRouteId(hookName){let route=function useRouteContext(hookName){let route=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);return route||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),route}(),thisRoute=route.matches[route.matches.length-1];return thisRoute.route.id||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),thisRoute.route.id}(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition;function Router(_ref5){let{basename:basenameProp="/",children:children=null,location:locationProp,navigationType:navigationType=_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.aU.Pop,navigator:navigator,static:staticProp=!1}=_ref5;useInRouterContext()&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({basename:basename,navigator:navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.cP)(locationProp));let{pathname:pathname="/",search:search="",hash:hash="",state:state=null,key:key="default"}=locationProp,locationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{let trailingPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zn)(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search:search,hash:hash,state:state,key:key},navigationType:navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider,{value:navigationContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{children:children,value:locationContext}))}new Promise((()=>{}));react__WEBPACK_IMPORTED_MODULE_0__.Component},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
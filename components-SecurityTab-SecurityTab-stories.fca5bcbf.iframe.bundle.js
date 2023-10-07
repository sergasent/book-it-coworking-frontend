/*! For license information please see components-SecurityTab-SecurityTab-stories.fca5bcbf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[420],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/SecurityTab/SecurityTab.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SecurityTabDemo:function(){return SecurityTabDemo},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SecurityTab_stories}});var _SecurityTabDemo$para,_SecurityTabDemo$para2,_SecurityTabDemo$para3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SecurityTab_SecurityTab=function SecurityTab(_ref){var user=_ref.user;return(0,jsx_runtime.jsxs)("section",{className:"security",children:[(0,jsx_runtime.jsx)("h2",{className:"security__title",children:"Безопасность и конфиденциальность"}),(0,jsx_runtime.jsxs)("ul",{className:"security__board",children:[(0,jsx_runtime.jsxs)("li",{className:"security__board-row",children:[(0,jsx_runtime.jsxs)("div",{className:"security__password-container",children:[(0,jsx_runtime.jsx)("span",{className:"security__feature-name",children:"Пароль"}),(0,jsx_runtime.jsx)("span",{children:function hidePassword(password){return"*".repeat(Math.min(20,password.length))}(user.password)})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Сбросить",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsxs)("li",{className:"security__board-row",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{className:"security__feature-name",children:"Активные сессии"}),(0,jsx_runtime.jsx)("p",{className:"security__feature-description",children:"Нажмите “Выйти”, и в течение 10 минут вы выйдете из аккаунта на всех устройствах, кроме этого"})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Изменить",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsxs)("li",{className:"security__board-row",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{className:"security__feature-name",children:"Выйти из аккаунта"}),(0,jsx_runtime.jsx)("p",{className:"security__feature-description",children:"Завершить сеанс"})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Выйти",btnClass:"button__profile-edit"})]})]})]})};SecurityTab_SecurityTab.defaultProps={user:{password:"",sessions:[]}},SecurityTab_SecurityTab.__docgenInfo={description:"",methods:[],displayName:"SecurityTab",props:{user:{defaultValue:{value:'{\n  password: "",\n  sessions: [],\n}',computed:!1},description:"",type:{name:"shape",value:{password:{name:"string",required:!1},sessions:{name:"arrayOf",value:{name:"string"},required:!1}}},required:!1}}};var SecurityTab_stories={title:"Pages/Profile/Tabs/SecurityTab",component:SecurityTab_SecurityTab,tags:["autodocs"],parameters:{layout:"centered"}},SecurityTabDemo={args:{user:{password:"qwerty12345",sessions:[]}}};SecurityTabDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},SecurityTabDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_SecurityTabDemo$para=SecurityTabDemo.parameters)||void 0===_SecurityTabDemo$para?void 0:_SecurityTabDemo$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    user: {\n      password: "qwerty12345",\n      sessions: []\n    }\n  }\n}'},null===(_SecurityTabDemo$para2=SecurityTabDemo.parameters)||void 0===_SecurityTabDemo$para2||null===(_SecurityTabDemo$para3=_SecurityTabDemo$para2.docs)||void 0===_SecurityTabDemo$para3?void 0:_SecurityTabDemo$para3.source)})});var __namedExportsOrder=["SecurityTabDemo"]},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
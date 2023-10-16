/*! For license information please see components-Contacts-Contacts-stories.8a1ba279.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[8802],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/Contacts/Contacts.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContactsDemo:function(){return ContactsDemo},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Contacts_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),contactsItems=__webpack_require__("./src/config/contactsItems.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),ContactsItem_ContactsItem=function ContactsItem(_ref){var info=_ref.info,header=_ref.header,img=_ref.img;return(0,jsx_runtime.jsxs)("li",{className:"contacts-item",children:[(0,jsx_runtime.jsx)("img",{className:"contacts-item__image",src:img,alt:"иконка контакта"}),(0,jsx_runtime.jsx)("p",{className:"contacts-item__info",children:info}),(0,jsx_runtime.jsx)("h3",{className:"contacts-item__header",children:header})]})};ContactsItem_ContactsItem.defaultProps={info:void 0,header:void 0,img:void 0},ContactsItem_ContactsItem.__docgenInfo={description:"",methods:[],displayName:"ContactsItem",props:{info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},header:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},img:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}};var SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),team_photo_namespaceObject=__webpack_require__.p+"77f4b3d0b4f5d6d88208.png",Contacts_Contacts=function Contacts(){return(0,jsx_runtime.jsxs)("section",{className:"contacts","aria-label":"страница контактов компании",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Контакты"}),(0,jsx_runtime.jsx)("ul",{className:"contacts__list",children:contactsItems.Pf.map((function(data){return(0,jsx_runtime.jsx)(ContactsItem_ContactsItem,{info:data.info,header:data.header,img:data.img},data.id)}))}),(0,jsx_runtime.jsx)("div",{className:"contacts__overlay"}),(0,jsx_runtime.jsxs)("div",{className:"contacts__team",children:[(0,jsx_runtime.jsx)("img",{src:team_photo_namespaceObject,alt:"фотография команды"}),(0,jsx_runtime.jsxs)("div",{className:"contacts__team_description",children:[(0,jsx_runtime.jsx)("h3",{className:"contacts__team_header",children:"Наша команда"}),(0,jsx_runtime.jsx)("p",{className:"contacts__team_info",children:"Наша команда — это группа амбициозных профессионалов, преданная идеи поддержки айти специалистов. Мы создали эту сеть коворкингов, чтобы предоставить им оптимальную среду для творчества и роста. Мы постоянно работаем над улучшением наших пространств, чтобы обеспечить высокий уровень комфорта и возможностей для инноваций. Наша цель — сделать работу для айтишников более продуктивной и вдохновляющей."})]})]})]})};Contacts_Contacts.__docgenInfo={description:"",methods:[],displayName:"Contacts"};var _ContactsDemo$paramet,_ContactsDemo$paramet2,_ContactsDemo$paramet3,components_Contacts_Contacts=Contacts_Contacts,Contacts_stories={title:"Pages/Contacts",component:components_Contacts_Contacts,parameters:{layout:"fullscreen"}},ContactsDemo=function ContactsDemo(){return(0,jsx_runtime.jsx)(components_Contacts_Contacts,{})};ContactsDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ContactsDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ContactsDemo$paramet=ContactsDemo.parameters)||void 0===_ContactsDemo$paramet?void 0:_ContactsDemo$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <Contacts />"},null===(_ContactsDemo$paramet2=ContactsDemo.parameters)||void 0===_ContactsDemo$paramet2||null===(_ContactsDemo$paramet3=_ContactsDemo$paramet2.docs)||void 0===_ContactsDemo$paramet3?void 0:_ContactsDemo$paramet3.source)})});var __namedExportsOrder=["ContactsDemo"];ContactsDemo.__docgenInfo={description:"",methods:[],displayName:"ContactsDemo"}},"./src/components/SectionTitle/SectionTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SectionTitle_SectionTitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionTitle_SectionTitle=function SectionTitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("h2",{className:"section-title".concat(titleClass?" ".concat(titleClass):""),children:titleText})};SectionTitle_SectionTitle.defaultProps={titleText:"",titleClass:""},SectionTitle_SectionTitle.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{titleText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/config/contactsItems.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{SB:function(){return INSTAGRAM_LINK},$J:function(){return MAIN_EMAIL},mk:function(){return MAIN_PHONE_NUMBER},Ko:function(){return TELEGRAM_LINK},v:function(){return TWITTER_LINK},kl:function(){return YOUTUBE_LINK},Pf:function(){return contactsItems}});__webpack_require__("./node_modules/react/index.js");var email_icons=__webpack_require__.p+"static/media/email-icons.886b22b47f2c95fa6e89d926106a1ffa.svg";var phone_icons=__webpack_require__.p+"static/media/phone-icons.501a132e862df87f3526e5a8e0922bd0.svg";var question_icons=__webpack_require__.p+"static/media/question-icons.0152f10562d4189be145d717fbdd955a.svg",MAIN_EMAIL="info@spotit.com",MAIN_PHONE_NUMBER="+7(800)-130-00-00",INSTAGRAM_LINK="https://instagram.com/spotit",YOUTUBE_LINK="https://youtube.com/spotit",TWITTER_LINK="https://twitter.com/spotit",TELEGRAM_LINK="https://t.me/spotit",contactsItems=[{id:1,info:"По вопросам информационного взаимодействия",header:"press@spotit.com",img:email_icons},{id:2,info:"Для остальных вопросов и предложени",header:MAIN_EMAIL,img:question_icons},{id:3,info:"Телефон для поддержки и обратной связи ",header:MAIN_PHONE_NUMBER,img:phone_icons}]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
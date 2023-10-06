/*! For license information please see 4743.abc4b570.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[4743],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/BookingsCard/BookingsCard.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return BookingsCard_BookingsCard}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),Popup=__webpack_require__("./src/components/Popup/Popup.jsx"),StarRating=__webpack_require__("./src/components/UI-kit/StarRating/StarRating.jsx");var time=__webpack_require__.p+"static/media/time.b900fce9bae5f45c3b154568a1de1f2a.svg";var card=__webpack_require__.p+"static/media/card.55cc540fde5cfb4d7fe66cea9e1d1b96.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),statusLabels={Confirmed:(0,jsx_runtime.jsx)("span",{className:"bookings-card__status bookings-card__status_confirmed",children:"Подтверждено"}),Processing:(0,jsx_runtime.jsx)("span",{className:"bookings-card__status bookings-card__status_processing",children:"В обработке"})},BookingsCard_BookingsCard=function BookingsCard(_ref){var content,item=_ref.item,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isPopupOpen=_useState2[0],setIsPopupOpen=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),isCancellationConfirmed=_useState4[0],setIsCancellationConfirmed=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),isReviewFormOpen=_useState6[0],setIsReviewFormOpen=_useState6[1],_useState7=(0,react.useState)(""),_useState8=(0,slicedToArray.Z)(_useState7,2),reviewText=_useState8[0],setReviewText=_useState8[1],_useState9=(0,react.useState)(0),_useState10=(0,slicedToArray.Z)(_useState9,2),reviewRating=_useState10[0],setReviewRating=_useState10[1],handleClosePopup=function handleClosePopup(){setIsPopupOpen(!1),setIsCancellationConfirmed(!1),setIsReviewFormOpen(!1)},handleOpenReviewForm=function handleOpenReviewForm(){setIsReviewFormOpen(!0),setIsPopupOpen(!0)};return content=isCancellationConfirmed?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{className:"bookings-card__popup-text bookings-card__popup-text_type_long",children:["Бронирование «",item.spot.name.toUpperCase()," с ",item.start_time," до"," ",item.end_time,"» отменено.",(0,jsx_runtime.jsx)("br",{})," Мы отправим вам подтверждение на почту и вернем предоплату."]}),(0,jsx_runtime.jsx)("p",{className:"bookings-card__popup-text",children:"Хотите создать бронирование на другую дату?"}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__button-container",children:[(0,jsx_runtime.jsx)(Button.Z,{btnText:"Назад",btnClass:"button__profile-transparent",onClick:handleClosePopup}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Создать",btnClass:"button__profile-edit",onClick:handleOpenReviewForm})]})]}):isReviewFormOpen?(0,jsx_runtime.jsxs)("div",{className:"bookings-card__popup-content",children:[(0,jsx_runtime.jsx)("p",{className:"bookings-card__popup-text bookings-card__popup-text_type_review",children:"Поставьте оценку и оставьте отзыв"}),(0,jsx_runtime.jsx)(StarRating.Z,{rating:reviewRating,onRatingChange:function handleRatingChange(rating){setReviewRating(rating)}}),(0,jsx_runtime.jsx)("textarea",{id:"review",name:"review",className:"bookings-card__review-text",maxLength:300,placeholder:"Текст",value:reviewText,onChange:function handleReviewTextChange(e){var newText=e.target.value;setReviewText(newText)}}),(0,jsx_runtime.jsxs)("p",{className:"bookings-card__character-count",children:[reviewText.length,"/",300]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Отправить",btnClass:"button__profile-review",onClick:function handleReviewSubmit(){return"Рейтинг: ".concat(reviewRating," Текст: ").concat(reviewText)}})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{className:"bookings-card__popup-text",children:[function getPopupText(booking){return"Confirmed"===booking.status?"Бронирование уже подтверждено.":"Processing"===booking.status?"Бронирование еще находится в обработке.":"Отменить бронирование"}(item),(0,jsx_runtime.jsx)("br",{}),"Вы уверены, что хотите отменить его?"]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__button-container",children:[(0,jsx_runtime.jsx)(Button.Z,{btnText:"Назад",btnClass:"button__profile-transparent",onClick:handleClosePopup}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Отменить",btnClass:"button__profile-edit",onClick:function handleConfirmCancellation(){setIsCancellationConfirmed(!0)}})]})]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("li",{className:"bookings-card",children:[(0,jsx_runtime.jsx)("img",{className:"bookings-card__image",src:item.spot.image,alt:item.spot.name}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__text-container",children:[(0,jsx_runtime.jsx)("h3",{className:"bookings-card__name",children:item.spot.name}),!item.isFinished&&(0,jsx_runtime.jsx)("div",{className:"bookings-card__status",children:statusLabels[item.status]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__date-row ".concat(item.isFinished?"bookings-card__date-row_isfinished":""),children:[(0,jsx_runtime.jsx)("img",{src:time,alt:"Иконка часов"}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__date-container",children:[(0,jsx_runtime.jsx)("p",{className:"bookings-card__date",children:item.date}),(0,jsx_runtime.jsxs)("p",{className:"bookings-card__date",children:[item.start_time,"-",item.end_time]})]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__price-container",children:[(0,jsx_runtime.jsx)("img",{src:card,alt:"Иконка платежной карты"}),(0,jsx_runtime.jsxs)("span",{className:"bookings-card__price",children:[item.bill," ₽"]})]})]}),item.isFinished?(0,jsx_runtime.jsx)(Button.Z,{btnText:"Оставить отзыв",btnClass:"button__profile-bookings",onClick:handleOpenReviewForm}):(0,jsx_runtime.jsx)(Button.Z,{btnText:"Отменить",btnClass:"button__profile-bookings",onClick:function handleOpenPopup(){setIsPopupOpen(!0)}})]})]},item.id),(0,jsx_runtime.jsx)(Popup.Z,{isOpen:isPopupOpen,popupClass:"bookings-card__popup",onClickClose:handleClosePopup,children:content})]})};BookingsCard_BookingsCard.defaultProps={item:prop_types_default().shape({})},BookingsCard_BookingsCard.__docgenInfo={description:"",methods:[],displayName:"BookingsCard",props:{item:{defaultValue:{value:"PropTypes.shape({})",computed:!0},description:"",type:{name:"shape",value:{id:{name:"string",required:!1},spot:{name:"shape",value:{name:{name:"string",required:!1},image:{name:"string",required:!1}},required:!1},date:{name:"string",required:!1},start_time:{name:"string",required:!1},end_time:{name:"string",required:!1},bill:{name:"number",required:!1},isFinished:{name:"bool",required:!1},status:{name:"enum",value:[{value:'"Confirmed"',computed:!1},{value:'"Processing"',computed:!1}],required:!1}}},required:!1}}}},"./src/components/Popup/Popup.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Popup_Popup}});var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Popup_Popup(_ref){var isOpen=_ref.isOpen,children=_ref.children,onClickClose=_ref.onClickClose,popupClass=_ref.popupClass;return isOpen&&(0,jsx_runtime.jsx)("section",{className:"popup","aria-label":"всплывающая форма",children:(0,jsx_runtime.jsxs)("div",{className:"popup__container ".concat(popupClass),children:[children,(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_close",onClick:onClickClose})]})})}Popup_Popup.defaultProps={isOpen:!0,popupClass:"",onClickClose:function onClickClose(){}},Popup_Popup.__docgenInfo={description:"",methods:[],displayName:"Popup",props:{isOpen:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},popupClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClickClose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"element"},required:!0}}};var components_Popup_Popup=Popup_Popup},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./src/components/UI-kit/StarRating/StarRating.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StarRating=function StarRating(_ref){var rating=_ref.rating,onRatingChange=_ref.onRatingChange,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState2=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_React$useState,2),hoverRating=_React$useState2[0],setHoverRating=_React$useState2[1],handleStarClick=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(star){onRatingChange(star)}),[onRatingChange]),handleStarHover=function handleStarHover(star){setHoverRating(star)},renderStars=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){for(var stars=[],_loop=function _loop(i){stars.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"button button_type_review ".concat(i<=(hoverRating||rating)?"filled":""),onClick:function onClick(){return handleStarClick(i)},onMouseEnter:function onMouseEnter(){return handleStarHover(i)},onMouseLeave:function onMouseLeave(){return handleStarHover(0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:i<=(hoverRating||rating)?"#ffea30":"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:i<=(hoverRating||rating)?"#ffea30":"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},i))},i=1;i<=5;i+=1)_loop(i);return stars}),[rating,hoverRating,handleStarClick]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:renderStars})};StarRating.defaultProps={rating:0,onRatingChange:function onRatingChange(){}},StarRating.__docgenInfo={description:"",methods:[],displayName:"StarRating",props:{rating:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},onRatingChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}},__webpack_exports__.Z=react__WEBPACK_IMPORTED_MODULE_0__.memo(StarRating)},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/images/dummy-spot2.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"04ff475c35a85ed7a793.jpg"}}]);
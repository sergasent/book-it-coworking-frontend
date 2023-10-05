"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[2932],{"./src/images/star.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=__webpack_require__.p+"static/media/star.4e1cf4411991df33ff7fdf387eda8973.svg"},"./src/images/tag.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=__webpack_require__.p+"static/media/tag.b57d197ae227d96a414c7d0874723016.svg"},"./src/components/Profile/Profile.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProfileDemo:function(){return ProfileDemo},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Profile_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),ProfileDataTab=__webpack_require__("./src/components/ProfileDataTab/ProfileDataTab.jsx"),SecurityTab=__webpack_require__("./src/components/SecurityTab/SecurityTab.jsx"),PaymentTab=__webpack_require__("./src/components/PaymentTab/PaymentTab.jsx"),BookingsTab=__webpack_require__("./src/components/BookingsTab/BookingsTab.jsx"),FavoritesTab=__webpack_require__("./src/components/FavoritesTab/FavoritesTab.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Profile_Profile=function Profile(_ref){var user=_ref.user,favorites=_ref.favorites,bookings=_ref.bookings,_useState=(0,react.useState)("personalData"),_useState2=(0,slicedToArray.Z)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1],handleTabClick=function handleTabClick(tab){setActiveTab(tab)};return(0,jsx_runtime.jsxs)("section",{className:"profile",children:[(0,jsx_runtime.jsxs)("div",{className:"profile__menu",children:[(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button__profile button__profile_data ".concat("personalData"===activeTab?"button__profile_data-active":""),btnText:"Персональные данные",onClick:function onClick(){return handleTabClick("personalData")}}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button__profile button__profile_security ".concat("security"===activeTab?"button__profile_security-active":""),btnText:"Безопасность и конфиденциальность",onClick:function onClick(){return handleTabClick("security")},isActive:"security"===activeTab}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button__profile button__profile_payment ".concat("payment"===activeTab?"button__profile_payment-active":""),btnText:"Платежные данные",onClick:function onClick(){return handleTabClick("payment")},isActive:"payment"===activeTab}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button__profile button__profile_bookings ".concat("bookings"===activeTab?"button__profile_bookings-active":""),btnText:"Бронирования",onClick:function onClick(){return handleTabClick("bookings")},isActive:"bookings"===activeTab}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button__profile button__profile_favorites ".concat("favorites"===activeTab?"button__profile_favorites-active":""),btnText:"Избранное",onClick:function onClick(){return handleTabClick("favorites")},isActive:"favorites"===activeTab})]}),(0,jsx_runtime.jsx)("div",{className:"profile__tab",children:function renderTabContent(){switch(activeTab){case"personalData":return(0,jsx_runtime.jsx)(ProfileDataTab.p,{user:user});case"security":return(0,jsx_runtime.jsx)(SecurityTab.M,{user:user});case"payment":return(0,jsx_runtime.jsx)(PaymentTab.i,{user:user});case"bookings":return(0,jsx_runtime.jsx)(BookingsTab.h,{bookings:bookings});case"favorites":return(0,jsx_runtime.jsx)(FavoritesTab.N,{favorites:favorites});default:return null}}()})]})};Profile_Profile.defaultProps={user:{first_name:"",last_name:"",birth_date:"",phone:"",email:"",occupation:"",password:"",card:{}},favorites:[],bookings:[]},Profile_Profile.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{user:{defaultValue:{value:'{\n  first_name: "",\n  last_name: "",\n  birth_date: "",\n  phone: "",\n  email: "",\n  occupation: "",\n  password: "",\n  card: {},\n}',computed:!1},description:"",type:{name:"shape",value:{first_name:{name:"string",required:!1},last_name:{name:"string",required:!1},birth_date:{name:"string",required:!1},phone:{name:"string",required:!1},email:{name:"string",required:!1},occupation:{name:"string",required:!1},password:{name:"string",required:!1},card:{name:"shape",value:{number:{name:"string",required:!0},valid:{name:"string",required:!0},type:{name:"string",required:!0}},required:!1}}},required:!1},favorites:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},street:{name:"string",required:!1},name:{name:"string",required:!1},rating:{name:"number",required:!1},image:{name:"string",required:!1}}}},required:!1},bookings:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},spot:{name:"shape",value:{name:{name:"string",required:!1}},required:!1},date:{name:"string",required:!1},start_time:{name:"string",required:!1},end_time:{name:"string",required:!1},bill:{name:"number",required:!1},status:{name:"enum",value:[{value:'"Confirmed"',computed:!1},{value:'"Processing"',computed:!1}],required:!1}}}},required:!1}}};var _ProfileDemo$paramete,_ProfileDemo$paramete2,_ProfileDemo$paramete3,dummy_spot2=__webpack_require__("./src/images/dummy-spot2.jpg"),Profile_stories={title:"Pages/Profile",component:Profile_Profile,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{user:{control:{type:"object"}}}},ProfileDemo={args:{user:{first_name:"Иван",last_name:"Иванов",birth_date:"08.09.1992",phone:"+79111002030",email:"pochta@mail.ru",occupation:"дизайнер",password:"qwerty12345",card:{number:"1100230040001212",valid:"11/29",type:"mastercard"}},favorites:[{id:"1",street:"г. Санкт-Петербург, ул. Льва Толстого, 1-3",name:"Особняк",rating:4.8,image:dummy_spot2},{id:"2",street:"г. Санкт-Петербург, ул. Льва Толстого, 1-3",name:"У моря",rating:4.9,image:dummy_spot2}],bookings:[{id:"1",spot:{name:"Парк",image:dummy_spot2},date:"6 сентября 2023",start_time:"12:00",end_time:"13:00",bill:200,isFinished:!0},{id:"2",spot:{name:"Особняк",image:dummy_spot2},date:"8 сентября 2023",start_time:"08:00",end_time:"10:00",bill:200,isFinished:!1,status:"Processing"},{id:"3",spot:{name:"Парк",image:dummy_spot2},date:"11 сентября 2023",start_time:"08:00",end_time:"10:00",bill:200,isFinished:!1,status:"Confirmed"}]}};ProfileDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ProfileDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ProfileDemo$paramete=ProfileDemo.parameters)||void 0===_ProfileDemo$paramete?void 0:_ProfileDemo$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    user: {\n      first_name: "Иван",\n      last_name: "Иванов",\n      birth_date: "08.09.1992",\n      phone: "+79111002030",\n      email: "pochta@mail.ru",\n      occupation: "дизайнер",\n      password: "qwerty12345",\n      card: {\n        number: "1100230040001212",\n        valid: "11/29",\n        type: "mastercard"\n      }\n    },\n    favorites: [{\n      id: "1",\n      street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",\n      name: "Особняк",\n      rating: 4.8,\n      image: SpotPhoto\n    }, {\n      id: "2",\n      street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",\n      name: "У моря",\n      rating: 4.9,\n      image: SpotPhoto\n    }],\n    bookings: [{\n      id: "1",\n      spot: {\n        name: "Парк",\n        image: SpotPhoto\n      },\n      date: "6 сентября 2023",\n      start_time: "12:00",\n      end_time: "13:00",\n      bill: 200,\n      isFinished: true\n    }, {\n      id: "2",\n      spot: {\n        name: "Особняк",\n        image: SpotPhoto\n      },\n      date: "8 сентября 2023",\n      start_time: "08:00",\n      end_time: "10:00",\n      bill: 200,\n      isFinished: false,\n      status: "Processing"\n    }, {\n      id: "3",\n      spot: {\n        name: "Парк",\n        image: SpotPhoto\n      },\n      date: "11 сентября 2023",\n      start_time: "08:00",\n      end_time: "10:00",\n      bill: 200,\n      isFinished: false,\n      status: "Confirmed"\n    }]\n  }\n}'},null===(_ProfileDemo$paramete2=ProfileDemo.parameters)||void 0===_ProfileDemo$paramete2||null===(_ProfileDemo$paramete3=_ProfileDemo$paramete2.docs)||void 0===_ProfileDemo$paramete3?void 0:_ProfileDemo$paramete3.source)})});var __namedExportsOrder=["ProfileDemo"]},"./src/components/BookingsTab/BookingsTab.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return BookingsTab_BookingsTab}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),BookingsCard=__webpack_require__("./src/components/BookingsCard/BookingsCard.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BookingsTab_BookingsTab=function BookingsTab(_ref){var bookings=_ref.bookings,_useState=(0,react.useState)("active"),_useState2=(0,slicedToArray.Z)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1],filteredBookings="active"===activeTab?bookings.filter((function(item){return!item.isFinished})):bookings.filter((function(item){return item.isFinished}));return(0,jsx_runtime.jsxs)("section",{className:"bookings",children:[(0,jsx_runtime.jsx)("h2",{className:"bookings__title",children:"Бронирования"}),(0,jsx_runtime.jsxs)("div",{className:"bookings__tabs",children:[(0,jsx_runtime.jsx)("button",{className:"bookings__tab-button ".concat("active"===activeTab?"bookings__tab-button_active":""),onClick:function onClick(){return setActiveTab("active")},children:"Активные"}),(0,jsx_runtime.jsx)("button",{className:"bookings__tab-button ".concat("finished"===activeTab?"bookings__tab-button_active":""),onClick:function onClick(){return setActiveTab("finished")},children:"Завершенные"})]}),(0,jsx_runtime.jsx)("ul",{className:"bookings__card-list",children:filteredBookings.map((function(item){return(0,jsx_runtime.jsx)(BookingsCard.t,{item:item},item.id)}))})]})};BookingsTab_BookingsTab.defaultProps={bookings:[{id:void 0,spot:{},date:void 0,start_time:void 0,end_time:void 0,bill:void 0,isFinished:!1,status:"Processing"}]},BookingsTab_BookingsTab.__docgenInfo={description:"",methods:[],displayName:"BookingsTab",props:{bookings:{defaultValue:{value:'[\n  {\n    id: undefined,\n    spot: {},\n    date: undefined,\n    start_time: undefined,\n    end_time: undefined,\n    bill: undefined,\n    isFinished: false,\n    status: "Processing",\n  },\n]',computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},spot:{name:"shape",value:{name:{name:"string",required:!1},image:{name:"string",required:!1}},required:!1},date:{name:"string",required:!1},start_time:{name:"string",required:!1},end_time:{name:"string",required:!1},bill:{name:"number",required:!1},isFinished:{name:"bool",required:!1},status:{name:"enum",value:[{value:'"Confirmed"',computed:!1},{value:'"Processing"',computed:!1}],required:!1}}}},required:!1}}}},"./src/components/FavoritesTab/FavoritesTab.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return FavoritesTab_FavoritesTab}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),tag=__webpack_require__("./src/images/tag.svg"),star=__webpack_require__("./src/images/star.svg");var heart_filled=__webpack_require__.p+"static/media/heart-filled.4a1f99c5970f1978da13e389398773b4.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FavoriteCard=function FavoriteCard(_ref){var item=_ref.item;return(0,jsx_runtime.jsxs)("li",{className:"favorites__card",children:[(0,jsx_runtime.jsx)("img",{className:"favorites__card-image",src:item.image,alt:item.name}),(0,jsx_runtime.jsxs)("div",{className:"favorites__card-text-container",children:[(0,jsx_runtime.jsxs)("div",{className:"favorites__card-name-row",children:[(0,jsx_runtime.jsx)("span",{className:"favorites__card-name",children:item.name}),(0,jsx_runtime.jsx)("img",{src:heart_filled,className:"favorites__card-like",alt:"Убрать из Избранного"})]}),(0,jsx_runtime.jsxs)("div",{className:"favorites__card-address-row",children:[(0,jsx_runtime.jsx)("img",{src:tag.Z,className:"favorites__card-like",alt:"Метка адреса"}),(0,jsx_runtime.jsx)("p",{className:"favorites__card-address",children:item.street})]}),(0,jsx_runtime.jsxs)("div",{className:"favorites__card-rating-row",children:[(0,jsx_runtime.jsx)("img",{src:star.Z,className:"favorites__card-like",alt:"Иконка рейтинга"}),(0,jsx_runtime.jsx)("span",{className:"favorites__card-rating",children:item.rating})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Посмотреть",btnClass:"button__profile-edit"})]})]})},FavoritesTab_FavoritesTab=function FavoritesTab(_ref2){var favorites=_ref2.favorites;return(0,jsx_runtime.jsxs)("section",{className:"favorites",children:[(0,jsx_runtime.jsx)("h2",{className:"favorites__title",children:"Избранное"}),(0,jsx_runtime.jsx)("ul",{className:"favorites__card-list",children:favorites.map((function(item){return(0,jsx_runtime.jsx)(FavoriteCard,{item:item},item.id)}))})]})};FavoriteCard.defaultProps={item:prop_types_default().shape({})},FavoritesTab_FavoritesTab.defaultProps={favorites:[]},FavoritesTab_FavoritesTab.__docgenInfo={description:"",methods:[],displayName:"FavoritesTab",props:{favorites:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},name:{name:"string",required:!1},rating:{name:"number",required:!1},street:{name:"string",required:!1},image:{name:"string",required:!1}}}},required:!1}}}},"./src/components/PaymentTab/PaymentTab.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return PaymentTab_PaymentTab}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx");var mastercard=__webpack_require__.p+"static/media/mastercard.fc623e7f3888fb6631fb31e0dd83f3fa.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaymentTab_PaymentTab=function PaymentTab(_ref){var user=_ref.user;return(0,jsx_runtime.jsxs)("section",{className:"payment",children:[(0,jsx_runtime.jsx)("h2",{className:"payment__title",children:"Платежные данные"}),(0,jsx_runtime.jsxs)("ul",{className:"payment__board",children:[(0,jsx_runtime.jsxs)("li",{className:"payment__board-row",children:[(0,jsx_runtime.jsx)("span",{className:"payment__feature-name",children:"Новая карта"}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Сбросить",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsxs)("li",{className:"payment__board-row",children:[(0,jsx_runtime.jsxs)("div",{className:"payment__card-container",children:[(0,jsx_runtime.jsx)("span",{className:"payment__feature-name",children:"Платежные карты"}),(0,jsx_runtime.jsx)("span",{children:function getCardImage(cardType){return"mastercard"===cardType?(0,jsx_runtime.jsx)("img",{src:mastercard,alt:"Mastercard",className:"payment__card-image"}):(0,jsx_runtime.jsx)("p",{children:"N/A"})}(user.card.type)}),(0,jsx_runtime.jsx)("span",{className:"payment__card-data",children:function maskCardNumber(cardNumber){return"••••".concat(cardNumber.slice(12))}(user.card.number)}),(0,jsx_runtime.jsx)("span",{className:"payment__card-data",children:user.card.valid})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Изменить",btnClass:"button__profile-edit"})]})]})]})};PaymentTab_PaymentTab.defaultProps={user:{card:{number:"",valid:"",type:""}}},PaymentTab_PaymentTab.__docgenInfo={description:"",methods:[],displayName:"PaymentTab",props:{user:{defaultValue:{value:'{\n  card: { number: "", valid: "", type: "" },\n}',computed:!1},description:"",type:{name:"shape",value:{card:{name:"shape",value:{number:{name:"string",required:!1},valid:{name:"string",required:!1},type:{name:"string",required:!1}},required:!1}}},required:!1}}}},"./src/components/ProfileDataTab/ProfileDataTab.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return ProfileDataTab_ProfileDataTab}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProfileDataTab_ProfileDataTab=function ProfileDataTab(_ref){var user=_ref.user;return(0,jsx_runtime.jsxs)("section",{className:"profile-data",children:[(0,jsx_runtime.jsxs)("div",{className:"profile-data__header-container",children:[(0,jsx_runtime.jsx)("h2",{className:"profile-data__title",children:"Персональные данные"}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Редактировать",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAEt2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTEwIgogICB0aWZmOkltYWdlV2lkdGg9IjExMCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjExMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjExMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIz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",className:"profile-data__image",alt:"Фото профиля"}),(0,jsx_runtime.jsxs)("ul",{className:"profile-data__list",children:[(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Имя"}),(0,jsx_runtime.jsx)("span",{children:user.first_name})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Фамилия"}),(0,jsx_runtime.jsx)("span",{children:user.last_name})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Дата рождения"}),(0,jsx_runtime.jsx)("span",{children:user.birth_date})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Номер телефона"}),(0,jsx_runtime.jsx)("span",{children:function formatPhone(phoneNumber){return phoneNumber.replace(/\D/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 $2 $3 $4 $5")}(user.phone)})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Адрес эл. почты"}),(0,jsx_runtime.jsx)("span",{children:user.email})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Род деятельности"}),(0,jsx_runtime.jsx)("span",{children:user.occupation})]})]}),(0,jsx_runtime.jsx)("p",{className:"profile-data__info",children:"мы запрашиваем информацию исключительно в целях рекламы и промо-акций для вас"})]})};ProfileDataTab_ProfileDataTab.defaultProps={user:{first_name:"",last_name:"",birth_date:"",phone:"",email:"",occupation:""}},ProfileDataTab_ProfileDataTab.__docgenInfo={description:"",methods:[],displayName:"ProfileDataTab",props:{user:{defaultValue:{value:'{\n  first_name: "",\n  last_name: "",\n  birth_date: "",\n  phone: "",\n  email: "",\n  occupation: "",\n}',computed:!1},description:"",type:{name:"shape",value:{first_name:{name:"string",required:!1},last_name:{name:"string",required:!1},birth_date:{name:"string",required:!1},phone:{name:"string",required:!1},email:{name:"string",required:!1},occupation:{name:"string",required:!1}}},required:!1}}}},"./src/components/SecurityTab/SecurityTab.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return SecurityTab_SecurityTab}});var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SecurityTab_SecurityTab=function SecurityTab(_ref){var user=_ref.user;return(0,jsx_runtime.jsxs)("section",{className:"security",children:[(0,jsx_runtime.jsx)("h2",{className:"security__title",children:"Безопасность и конфиденциальность"}),(0,jsx_runtime.jsxs)("ul",{className:"security__board",children:[(0,jsx_runtime.jsxs)("li",{className:"security__board-row",children:[(0,jsx_runtime.jsxs)("div",{className:"security__password-container",children:[(0,jsx_runtime.jsx)("span",{className:"security__feature-name",children:"Пароль"}),(0,jsx_runtime.jsx)("span",{children:function hidePassword(password){return"*".repeat(Math.min(20,password.length))}(user.password)})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Сбросить",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsxs)("li",{className:"security__board-row",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{className:"security__feature-name",children:"Активные сессии"}),(0,jsx_runtime.jsx)("p",{className:"security__feature-description",children:"Нажмите “Выйти”, и в течение 10 минут вы выйдете из аккаунта на всех устройствах, кроме этого"})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Изменить",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsxs)("li",{className:"security__board-row",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{className:"security__feature-name",children:"Выйти из аккаунта"}),(0,jsx_runtime.jsx)("p",{className:"security__feature-description",children:"Завершить сеанс"})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Выйти",btnClass:"button__profile-edit"})]})]})]})};SecurityTab_SecurityTab.defaultProps={user:{password:"",sessions:[]}},SecurityTab_SecurityTab.__docgenInfo={description:"",methods:[],displayName:"SecurityTab",props:{user:{defaultValue:{value:'{\n  password: "",\n  sessions: [],\n}',computed:!1},description:"",type:{name:"shape",value:{password:{name:"string",required:!1},sessions:{name:"arrayOf",value:{name:"string"},required:!1}}},required:!1}}}}}]);
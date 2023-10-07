/*! For license information please see 2143.745a9f1d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[2143],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/RuleItem/RuleItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return RuleItem_RuleItem}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),RuleItem_RuleItem=function RuleItem(_ref){var titleText=_ref.titleText,articleText=_ref.articleText,path=_ref.path;return(0,jsx_runtime.jsxs)("article",{className:"rule",children:[(0,jsx_runtime.jsx)("svg",{className:"rule__img",xmlns:"http://www.w3.org/2000/svg",width:"170",height:"170",viewBox:"0 0 170 170",fill:"none",children:path}),(0,jsx_runtime.jsx)("h3",{className:"rule__title",children:titleText}),(0,jsx_runtime.jsx)("div",{className:"rule__scroll-content",children:(0,jsx_runtime.jsx)("p",{className:"rule__text",children:articleText})})]})};RuleItem_RuleItem.defaultProps={titleText:void 0,articleText:void 0,path:void 0},RuleItem_RuleItem.__docgenInfo={description:"",methods:[],displayName:"RuleItem",props:{titleText:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},articleText:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},path:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"node"},required:!1}}}},"./src/components/Rules/Rules.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return Rules_Rules}});__webpack_require__("./node_modules/react/index.js");var SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),SectionSubtitle=__webpack_require__("./src/components/SectionSubtitle/SectionSubtitle.jsx"),RuleItem=__webpack_require__("./src/components/RuleItem/RuleItem.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),data=[{id:1,titleText:"Общие правила",articleText:"Регистрация и оплата:\n    Перед началом работы в коворкинге необходимо зарегистрироваться и подписать договор аренды.\n    Соблюдайте установленные сроки и способы оплаты, указанные в договоре.\n    Рабочее место:\n    Используйте только то место, которое вы арендовали в соответствии с вашим контрактом. Не занимайте чужие рабочие места.\n    Рабочее время:\n    Придерживайтесь рабочего расписания, установленного коворкингом. Убедитесь, что вы в коворкинге в рабочие часы.\n    Правила поведения:\n    Соблюдайте приличное и уважительное поведение к другим арендаторам и сотрудникам коворкинга.\n    Громкая разговорная связь и шумные звонки следует ограничивать в областях, предназначенных для этого.\n    Соблюдайте чистоту и порядок на своём рабочем месте, а также в общих зонах.\n    Гости:\n    Приём гостей может быть ограничен политикой коворкинга. Уточните правила в отношении посещения гостями и соблюдайте их.\n    Инфраструктура и оборудование:\n    Используйте общее оборудование (компьютеры, принтеры, сканеры и др.) в соответствии с правилами, установленными коворкингом.\n    Если вы используете личное оборудование, убедитесь, что оно совместимо и безопасно для сети коворкинга.\n    Ответственность:\n    Несите ответственность за любой ущерб или потерю собственности в коворкинге, включая ваше личное имущество.\n    Соблюдение законов:\n    Соблюдайте все местные законы и нормы, включая правила пожарной безопасности.\n    Отмена аренды:\n    Если вы планируете прекратить аренду, уведомите коворкинг в соответствии с правилами, указанными в договоре.\n    Безопасность:\n    Соблюдайте меры безопасности в коворкинге, включая замок экрана на компьютере и хранение ценных вещей в безопасных местах.",path:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.435 40.4939V16H66.5649V40.4939L49.2451 23.1741L23.1739 49.2453L40.4936 66.5649L16 66.5649L16 103.435H40.4939L23.1742 120.755L49.2454 146.826L66.5649 129.506V154H103.435V129.506L120.755 146.826L146.826 120.755L129.506 103.435H154V66.5649L129.506 66.5649L146.826 49.2453L120.755 23.1741L103.435 40.4939Z",fill:"#B0FF1A"})},{id:2,titleText:"Общие правила",articleText:"Размещение рекламы: Размещение собственных рекламных материалов или продажа товаров и услуг внутри коворкинга может быть ограничено или требовать предварительного согласования.\n    Курение: В большинстве коворкингов запрещено курение внутри здания. Места для курения могут быть ограничены и выделены отдельно.\n    Парфюм и ароматы: Использование ароматизаторов или парфюмов может быть ограничено, чтобы не создавать дискомфорт для других пользователей, особенно если у них есть аллергии или чувствительность к запахам.\n    Музыка и шум: Правила относительно воспроизведения музыки или громких звуков могут быть ограничены в общих рабочих зонах. Использование наушников может быть рекомендовано.\n    Сетевые ограничения: Коворкинг может иметь правила относительно использования и доступа к их сети интернет. Возможны ограничения по скорости и потреблению трафика.\n    Сбор данных: Коворкинг может иметь политику, запрещающую сбор данных о других арендаторах или посетителях без их согласия.\n    Бронирование конференц-зон: Если в коворкинге есть конференц-зоны, то они могут быть доступны по предварительной брони и иметь ограничения по времени использования.\n    Изменение интерьера: Могут быть ограничения по изменению интерьера вашего рабочего места или использованию собственной мебели.\n    Хранение личных вещей: Правила относительно хранения личных вещей (например, велосипедов, сумок или личных документов) могут иметь ограничения и требования к безопасности.\n    Соблюдение законов о правопорядке: Законы о правопорядке должны соблюдаться, и коворкинг может запретить действия, которые нарушают эти законы.\n    Конфиденциальность и неразглашение: Возможно, вам потребуется соблюдать правила конфиденциальности и неразглашения в отношении информации, которую вы видите или слышите в коворкинге.\n    Помните, что эти дополнительные ограничения могут быть внесены в политику коворкинга для обеспечения комфортной и безопасной среды для всех пользователей. Перед арендой места вам следует внимательно ознакомиться с этими правилами и обсудить любые неясности с администрацией коворкинга.",path:(0,jsx_runtime.jsx)("path",{d:"M16 85C16 46.8924 46.8924 16 85 16C123.108 16 154 46.8924 154 85V154H16V85Z",fill:"#FDA8DC"})},{id:3,titleText:"ограничения аренды",articleText:"Ограничения по аренде места в коворкинге могут варьироваться в зависимости от политики конкретного коворкинга и их целей, но вот несколько типичных ограничений, с которыми вы можете столкнуться:\n\n    Длительность аренды: Могут существовать ограничения по минимальной или максимальной длительности аренды места в коворкинге. Например, некоторые места могут быть доступны только для долгосрочной аренды.\n    Гибкость рабочего времени: Некоторые коворкинги могут предоставлять доступ только в определённые часы или дни в неделю. Это может ограничить гибкость вашего рабочего графика.\n    Количество рабочих мест: В зависимости от вашего членства или плана, вам могут быть доступны только определённое количество рабочих мест. Нельзя будет занимать дополнительные места без дополнительной оплаты.\n    Доступ к определённым зонам: Коворкинг может ограничивать доступ к определённым рабочим зонам или предоставлять специальные зоны только для определённых типов пользователей.\n    Количество гостей: Ограничения могут быть на количество гостей, которых вы можете пригласить в коворкинг, и это может потребовать предварительной регистрации или дополнительной оплаты.\n    Использование оборудования: Некоторые планы могут ограничивать использование оборудования коворкинга, такого как принтеры, сканеры или конференц-залы.\n    Политика отмены: Коворкинг может иметь свои правила относительно отмены бронирования рабочего места. Может потребоваться уведомление за определённое количество времени.\n    Политика безопасности и контроля доступа: В целях обеспечения безопасности и конфиденциальности, коворкинг может иметь политику контроля доступа, которую вы должны соблюдать.\n    Запрет на проведение мероприятий: Некоторые коворкинги могут запрещать проведение мероприятий или встреч внутри их помещений.\n    Животные: Коворкинг может запрещать привозить домашних животных, или это может быть разрешено только в специально выделенных зонах.\n    Изменение интерьера: Пользователям могут быть запрещены какие‑либо изменения в интерьере или перенос личной мебели без согласования.\n    Ограничения по бизнесу: В некоторых коворкингах могут быть ограничения по типу бизнеса или деятельности, которые вы можете проводить в их помещениях.\n    Политика чистоты и порядка: Коворкинг может иметь правила относительно уборки и поддержания чистоты на вашем рабочем месте.\n    Несовершеннолетние: Возможно, коворкинг ограничит доступ несовершеннолетним или потребует сопровождения взрослых.\n    Политика конфиденциальности и неразглашения: Коворкинг может иметь правила о неразглашении коммерческой информации и конфиденциальности.\n\n    Помните, что эти ограничения могут варьироваться в разных коворкингах, поэтому важно внимательно ознакомиться с правилами вашего конкретного коворкинга перед началом аренды места.",path:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.5 16C31.4462 16 16 31.4462 16 50.5C16 69.5538 31.4462 85 50.5 85C31.4462 85 16 100.446 16 119.5C16 138.554 31.4462 154 50.5 154H119.5C138.554 154 154 138.554 154 119.5C154 100.446 138.554 85 119.5 85C138.554 85 154 69.5538 154 50.5C154 31.4462 138.554 16 119.5 16H50.5Z",fill:"#FDA8DC"})},{id:4,titleText:"Использование общих зон",articleText:"Использование общих зон в коворкинге предполагает соблюдение правил и этикета, чтобы обеспечить комфорт и продуктивность для всех пользователей. Вот общие правила использования общих зон в коворкинге для пользователей:\n\n    Рабочее место и временные ограничения: Общие зоны предназначены для временной работы. Не резервируйте рабочие столы в общих зонах на длительное время, если в этом нет необходимости. Оставьте своё рабочее место, когда уходите, чтобы другие могли его использовать.\n    Уборка и порядок: Соблюдайте чистоту и порядок в общих зонах. После использования уберите свои вещи и мусор. Если в коворкинге предусмотрены специальные места для хранения личных вещей, используйте их в соответствии с инструкциями.\n    Громкость и шум: Соблюдайте тишину в общих рабочих зонах. Громкие телефонные разговоры и музыка могут создавать дискомфорт для других. Используйте наушники при прослушивании аудио и видеоматериалов.\n    Кухонные зоны и питание: Пользуйтесь кухонными зонами в соответствии с правилами. Соблюдайте гигиеничные нормы при приготовлении пищи. Убирайтесь после себя и моющими средствами, если они предоставляются.\n    Встречи и переговоры: Если в коворкинге есть специально оборудованные зоны для встреч и переговоров, бронируйте их заранее и используйте в соответствии с политикой. Соблюдайте тишину при проведении встреч в общих зонах, чтобы не мешать другим пользователям.\n    Правила для гостей: Если вы приглашаете гостей, убедитесь, что они соблюдают все правила коворкинга, включая этикет и правила безопасности.\n    Сетевое оборудование: Если вы подключаете собственное сетевое оборудование, соблюдайте инструкции и правила безопасности, предоставленные коворкингом.\n    Информационная безопасность: Соблюдайте правила конфиденциальности и неразглашения информации. Не просматривайте или не используйте чужие личные данные или информацию.\n    Безопасность: Соблюдайте правила безопасности и эвакуации в случае чрезвычайных ситуаций.\n    Культура и уважение:Уважайте других пользователей и их рабочее пространство. Помогайте создавать дружественную и вдохновляющую атмосферу в коворкинге.\n    Обратная связь и сотрудничество: Если у вас есть предложения или замечания по улучшению общих зон или услуг коворкинга, делитесь ими с администрацией для совместного сотрудничества и улучшения обстановки.\n\n    Эти правила помогут создать гармоничную рабочую атмосферу в общих зонах коворкинга и обеспечить комфорт для всех пользователей. Соблюдение их поможет сделать ваше пребывание в коворкинге приятным и продуктивным.",path:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M49.7648 120.235C50.5517 139.016 66.026 154 85.0001 154C103.974 154 119.448 139.016 120.235 120.235C139.016 119.448 154 103.974 154 85.0001C154 66.026 139.016 50.5517 120.235 49.7648C119.449 30.9842 103.974 16 85.0001 16C66.026 16 50.5516 30.9842 49.7648 49.7648C30.9842 50.5516 16 66.026 16 85.0001C16 103.974 30.9842 119.449 49.7648 120.235Z",fill:"#B0FF1A"})}],Rules_Rules=function Rules(){return(0,jsx_runtime.jsxs)("section",{className:"rules",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Правила аренды"}),(0,jsx_runtime.jsx)(SectionSubtitle.V,{titleText:"Пожалуйста, ознакомьтесь с правилами перед бронированием"}),(0,jsx_runtime.jsx)("ul",{className:"rules__list",children:data.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(RuleItem.X,{titleText:item.titleText,articleText:item.articleText,path:item.path})},item.id)}))})]})};Rules_Rules.__docgenInfo={description:"",methods:[],displayName:"Rules"}},"./src/components/SectionSubtitle/SectionSubtitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return SectionSubtitle_SectionSubtitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionSubtitle_SectionSubtitle=function SectionSubtitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("p",{className:"section-subtitle ".concat(titleClass),children:titleText})};SectionSubtitle_SectionSubtitle.defaultProps={titleText:void 0,titleClass:void 0},SectionSubtitle_SectionSubtitle.__docgenInfo={description:"",methods:[],displayName:"SectionSubtitle",props:{titleText:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}}},"./src/components/SectionTitle/SectionTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SectionTitle_SectionTitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionTitle_SectionTitle=function SectionTitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("h2",{className:"section-title".concat(titleClass?" ".concat(titleClass):""),children:titleText})};SectionTitle_SectionTitle.defaultProps={titleText:"",titleClass:""},SectionTitle_SectionTitle.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{titleText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
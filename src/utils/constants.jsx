export const SCREEN_MEDIUM = 1270;
export const SCREEN_SMALL = 770;

// количество карточек на главной странице в начальном рендере и сколько добавляем от кнопки еще
export const LAPTOP_SHORT_POINTS_QUANTITY = 6;
export const TABLET_SHORT_POINTS_QUANTITY = 4;
export const MOBILE_SHORT_POINTS_QUANTITY = 3;

export const LAPTOP_MORE_SHORT_POINTS_QUANTITY = 3;
export const TABLET_MORE_SHORT_POINTS_QUANTITY = 2;
export const MOBILE_MORE_SHORT_POINTS_QUANTITY = 2;

// это на странице коворкингов
export const LAPTOP_POINTS_QUANTITY = 4;
export const TABLET_POINTS_QUANTITY = 3;
export const MOBILE_POINTS_QUANTITY = 3;

export const LAPTOP_MORE_POINTS_QUANTITY = 2;
export const TABLET_MORE_POINTS_QUANTITY = 2;
export const MOBILE_MORE_POINTS_QUANTITY = 2;

// кол-во отзывов для рендера
export const LAPTOP_REVIEWS_QUANTITY = 5;

// для фильтра оборудования на сервере и вывода на страницу коворкинга
export const EQUIPMENT_GENERAL_CATEGORY = "Рабочее место";
export const EQUIPMENT_MEETING_CATEGORY = "Переговорная";

// MAP OPTIONS

export const DEFAULT_LATITUDE = 59.9;
export const DEFAULT_LONGITUDE = 30.3;
export const DEFAULT_ZOOM = 11;

// Booking
// Количество рабочих дней для локации
export const WORKING_DAYS_COUNTS = {
  "пн-вс": 7,
  "пн-сб": 6,
  "пн-пт": 5,
};

// Количество доступных дней в календаре для бронирования
export const CALENDAR_MAX_ALLOWED_DAYS = 60;

// Доступные промежутки времени для бронирования
export const ALLOWED_TIME_RANGES = [{ startTime: "09:00", endTime: "12:00" }];

export const routesPopup = [
  "/popup/login",
  "/popup/register",
  "/popup/reset_password",
];

// Статусы заказов
export const ORDER_STATUSES = {
  WAIT_PAY: "Ожидается оплата",
  PAID: "Оплачено",
  FINISH: "Завершен",
  CANCEL: "Отменен",
  NOT_PAID: "Не оплачено",
};

// Количество символов в отзыве

export const MAX_REVIEW_CHARACTERS_NUMBER = 300;

// Сообщения

export const PROFILE_DATA_UPDATE = "Данные успешно обновлены";
export const NOT_FOUND_ERROR_TITLE = "Этого мы не нашли";
export const NOT_FOUND_ERROR_SUBTITLE =
  "Попробуйте изменить параметры поиска и повторите попытку";
export const SUCCESSFUL_LIKE = "Добавлено в избранное";
export const SUCCESSFUL_DISLIKE = "Удалено из избранного";

import { ButtonsList } from "./ButtonsList";
import {
  timesButtonsList,
  spotsButtonsList,
  meetingRoomsButtonsList,
} from "../../config/exampleBookingData";

export default {
  title: "Components/ButtonsList",
  component: ButtonsList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    listType: {
      description: "Вариант отображения списка",
    },
    itemsList: {
      description: "Массив обектов с параметрами для кнопок",
      control: {
        type: "object",
      },
    },
    isEnabled: {
      description: "Состояние доступности списка",
      control: {
        type: "boolean",
      },
    },
    ariaLabel: {
      description: "Текстовое описание секции",
      control: {
        type: "string",
      },
    },
    listClassName: {
      description: "Дополнительный класс для списка",
      control: {
        type: "string",
      },
    },
    itemsClassName: {
      description: "Дополнительный класс для кнопок",
      control: {
        type: "string",
      },
    },
  },
};

export const Times = {
  args: {
    listType: "time-ranges",
    itemsList: timesButtonsList,
  },
};

export const Spots = {
  args: {
    listType: "spots",
    itemsList: spotsButtonsList,
  },
};

export const MeetingRooms = {
  args: {
    listType: "meeting-rooms",
    itemsList: meetingRoomsButtonsList,
  },
};

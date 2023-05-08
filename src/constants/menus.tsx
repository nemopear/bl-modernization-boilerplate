import {
  BsBarChart,
  BsCalendar3,
  BsCalendar3Event,
  BsDiagram2,
  BsFileEarmark,
  BsSliders,
} from "react-icons/bs";

export const MENUS = [
  {
    icon: <BsBarChart />,
    title: "Dashboard",
    to: "/dashboard",
    translationKey: "dashboard",
    id: "dashboard",
  },

  {
    icon: <BsSliders />,
    title: "Configurations",
    to: "",
    translationKey: "configurations",
    id: "configurations",
    items: [
      {
        icon: <BsDiagram2 />,
        title: "Processes",
        to: "",
        translationKey: "processes",
        id: "processes",
      },
      {
        icon: <BsDiagram2 />,
        title: "Data Models",
        to: "",
        translationKey: "data-models",
        id: "data-models",
      },
    ],
  },
];

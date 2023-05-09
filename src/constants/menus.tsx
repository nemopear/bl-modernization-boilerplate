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
    title: "Menu 1",
    to: "",
    translationKey: "menu1",
    id: "menu-1",
    items: [
      {
        icon: <BsDiagram2 />,
        title: "Menu 1.1",
        to: "",
        translationKey: "menu1_1",
        id: "menu-1-1",
      },
      {
        icon: <BsDiagram2 />,
        title: "Menu 1.2",
        to: "",
        translationKey: "menu1_2",
        id: "menu-1-2",
      },
    ],
  },
];

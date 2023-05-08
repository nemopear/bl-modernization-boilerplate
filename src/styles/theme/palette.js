/* eslint-disable import/no-anonymous-default-export */
import { colors } from "@mui/material";
import { grey } from "@mui/material/colors";

const white = "#FFFFFF";
const black = "#222";

export default {
  mode: "light",
  white: "#fff",
  black: "#222",
  primary: {
    contrastText: white,
    dark: "#396e00",
    main: "#77a300",
    light: "#9fc71c",
    text: "#fff",
  },
  secondary: {
    contrastText: white,
    dark: "#fe761e",
    main: "#ff9521",
    light: "#ffb726",
  },
  success: {
    contrastText: white,
    dark: "#3a933d",
    main: "#4CAF50",
    light: "#53c257",
  },
  // info: {
  //     contrastText: white,
  //     dark: "#737373",
  //     main: "#949494",
  //     light: "#949494",
  // },
  // warning: {
  //     contrastText: white,
  //     dark: "#CC0001",
  //     main: "#AF0000",
  //     light: "#760000",
  // },
  error: {
    contrastText: white,
    dark: "#960010",
    main: "#CC0001",
    light: "#d54f50",
  },
  text: {
    primary: black,
    secondary: grey[600],
    disabled: grey[400],
  },
  background: {
    default: "#f9f9f9", // #F4F6F8
    paper: white,
  },
  grey: {
    100: "#f5f5f5",
    200: "#F6F6F7",
    300: "#ededed",
    400: "#e4e4e4",
    500: "#8E8E8E",
    600: "#626262",
    900: "#585858",
  },
  icon: colors.blueGrey[600],
  divider: "#E0E0E0",
  border: "#cecece",
};

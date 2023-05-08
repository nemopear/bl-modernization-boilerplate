/* eslint-disable import/no-anonymous-default-export */
import { createBreakpoints } from "@mui/system";
import palette from "./palette";

const breakpoints = createBreakpoints({});

export default {
    fontFamily: "var(--lang-font)",
    h1: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "1.2",
        letterSpacing: "0",
        // fontFamily: 'inherit',
    },
    h2: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: "26px",
        letterSpacing: "0",
        lineHeight: "32px",
        marginBottom: "20px",
    },
    h3: {
        color: palette.text.primary,
        fontWeight: 600,
        fontSize: "22px",
        letterSpacing: "0",
        lineHeight: "28px",
    },
    h4: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: "18px",
        letterSpacing: "0",
        lineHeight: "24px",
    },
    h5: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: "16px",
        letterSpacing: "-0.05px",
        lineHeight: "20px",
    },
    h6: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "-0.05px",
        lineHeight: "20px",
    },
    subtitle1: {
        color: palette.text.primary,
        fontSize: "14px",
        fontWeight: "500",
        letterSpacing: "0",
        lineHeight: "20px",
        // fontFamily: 'inherit',
        [breakpoints.up("sm")]: {
            fontSize: "18px",
        },
        // [breakpoints.up('lg')]: {
        //   fontSize: '18px',
        //   fontWeight: '600',
        // },
    },
    subtitle2: {
        color: palette.black,
        fontSize: "16px",
        fontWeight: "600",
        letterSpacing: "0",
        lineHeight: "20px",
        // fontFamily: 'inherit',
    },
    body1: {
        // color: palette.text.primary,
        fontSize: "16px",
        letterSpacing: "0",
        lineHeight: "24px",
        // fontFamily: 'inherit',
        // whiteSpace: 'pre-line',
    },
    body2: {
        // color: palette.black,
        fontSize: "18px",
        letterSpacing: "0",
        lineHeight: "22px",
        // whiteSpace: 'pre-line',
        "&.MuiTypography-gutterBottom": {
            marginBottom: "16px",
        },
    },
    button: {
        color: palette.text.primary,
        fontSize: "16px",
        // fontFamily: 'inherit',
        fontWeight: "400",
    },
    caption: {
        color: palette.text.secondary,
        fontSize: "11px",
        letterSpacing: "0.33px",
        lineHeight: "13px",
    },
    overline: {
        color: palette.text.secondary,
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.33px",
        lineHeight: "13px",
        textTransform: "uppercase",
    },
    a: {
        color: palette.text.primary,
    },
    label: {
        fontSize: "16px",
        fontWeight: 700,
        color: palette.text.primary,
    },
};

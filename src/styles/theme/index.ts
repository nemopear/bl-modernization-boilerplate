// @ts-ignore
// @ts-nocheck
/* eslint-disable no-trailing-spaces */

import { Theme as _Theme, createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

import palette from "./palette";
import typography from "./typography";

interface Theme extends _Theme {
    status: any;
}

const breakpoints = createBreakpoints({});
// Create a theme instance.
export const theme: Theme = createTheme({
    status: {
        appState: "loading",
    },
    typography,
    palette,
    shape: {
        borderRadius: 6,
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none !important",
                    fontWeight: "bold",
                    fontSize: 16,
                    paddingLeft: 15,
                    paddingRight: 15,
                    minWidth: 80,
                    "&.MuiButton-containedPrimary, &.MuiButton-outlinedPrimary ":
                        {
                            "&:hover": {
                                backgroundColor: palette.primary.dark,
                                color: palette.primary.contrastText,
                            },
                        },

                    "&.MuiButton-sizeSmall": {
                        minHeight: 32,
                        minWidth: 85,
                        maxWidth: "fit-content",
                        paddingTop: 2,
                        paddingBottom: 1,
                        fontSize: 14,
                        [breakpoints.up("sm")]: {
                            fontSize: 16,
                        },
                    },
                    "&.MuiButton-text": {
                        padding: 0,
                        minWidth: 0,
                        background: "transparent",
                        "&:hover": {
                            background: "transparent",
                        },
                        "&.Mui-disabled": {
                            "& svg": {
                                fill: palette.grey[500],
                            },
                        },
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: "#ebebeb",
                    color: "#222",
                    padding: "15px 40px",
                    margin: 0,
                    fontSize: 16,
                    "& .MuiLink-root": {
                        color: "#8E8E8E",
                        "&:hover, &:active": {
                            color: "#222",
                        },
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    width: "100%",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    borderColor: "#DCDCDC",
                    "& .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            border: "1px solid #cecece",
                            borderRadius: "4px",
                            top: 0,
                        },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: palette.border,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: palette.primary.light,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        transition: "borderColor .3s ease-in-out",
                        "& legend": {
                            display: "none",
                        },
                    },
                    "& .MuiSelect-iconOutlined": {
                        width: "23px",
                        height: "23px",
                        top: " 8px",
                        color: palette.primary.main,
                    },

                    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: palette.error.main,
                    },
                    "& .MuiSelect-select": {
                        paddingTop: 9,
                        paddingBottom: 8,
                        backgroundColor: "#fff",
                    },
                    "&.Mui-focused div[aria-expanded='false']": {
                        "~ .MuiOutlinedInput-notchedOutline": {
                            borderColor: palette.border,
                        },
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: "100%",
                    height: "40px",

                    "& .MuiInputAdornment-root": {
                        position: "absolute",
                        right: 14,
                        top: 21,
                        "& .MuiButtonBase-root": {
                            color: palette.primary.main,
                            padding: "5px",
                            "&:hover, &:active, &:focus": {
                                opacity: 1,
                            },
                        },
                    },
                    "& .MuiInputBase-input": {
                        padding: "0 14px",
                    },
                    "&.MuiAutocomplete-inputRoot": {
                        paddingLeft: "14px !important",
                        " .MuiInputBase-input": {
                            padding: "0 !important",
                        },
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "rgb(189, 189, 189, 12%)",
                        pointerEvents: "none",
                        input: {
                            color: "#666",
                            WebkitTextFillColor: "#666",
                        },
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    display: "block",
                    "& .MuiInputLabel-root": {
                        color: palette.black,
                        position: "static",
                        transform: "none",
                        fontSize: 16,
                        fontWeight: 700,
                        pointerEvents: "auto",
                        "&.Mui-disabled": {
                            color: "inherit",
                        },
                        "&.Mui-error": {
                            color: palette.error.main,
                        },
                    },
                    "& textarea": {
                        color: palette.primary.main,
                        fontSize: 16,
                        fontFamily: "inherit",
                        padding: "8px 12px",
                        outline: "none",
                        border: "1px solid #cecece",
                        borderRadius: 4,
                        width: "100% !important",
                        minHeight: 180,
                        boxSizing: "border-box",
                        // lineHeight: 0,
                        "&:focus": {
                            borderColor: palette.border,
                        },
                        "&.error": {
                            borderColor: palette.error.main,
                        },
                    },
                    "& .Mui-error": {
                        "& + textarea": {
                            borderColor: palette.error.main,
                        },
                    },
                    "&.Mui-error-textarea": {
                        textarea: {
                            borderColor: palette.error.main,
                        },
                        ".MuiFormHelperText-root, .MuiFormLabel-root": {
                            color: palette.error.main,
                        },
                    },
                    "& label[data-shrink=false]+.MuiInputBase-formControl .MuiOutlinedInput-input::-webkit-input-placeholder":
                        {
                            opacity: "0.5 !important",
                        },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputLabel-root": {
                        position: "static",
                        textAlign: "left",
                        textOverflow: "initial",
                        whiteSpace: "normal",
                        maxWidth: "100%",
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    minHeight: "62px",
                },
            },
        },
        MuiPaper: {
            props: {
                color: "#fff",
            },
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)",
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    marginBottom: 0,
                    marginTop: 0,
                },
            },
        },
        MuiListItem: {
            defaultProps: {
                // disableRipple: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none",
                    fontSize: "16px",
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none",
                    "& .MuiPaper-root": {
                        "& .MuiList-root": {
                            padding: 0,
                            // "& .Mui-selected": {
                            //     backgroundColor: palette.primary.main,
                            //     color: palette.primary.contrastText,
                            // },
                            "& .MuiMenuItem-root": {
                                minHeight: "35px",
                                fontSize: "16px",
                                lineHeight: "26px",
                            },
                        },
                    },
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    "& .MuiPaper-root": {
                        borderRadius: 0,
                    },
                    "& .Mui-selected": {
                        backgroundColor: `${palette.primary.main} !important`,
                        color: palette.primary.contrastText,
                    },
                    "& .MuiDialog-paper": {
                        // maxWidth: 720,
                        margin: 16,
                        width: "100%",
                    },
                    "& .PrivatePickersToolbar-root": {
                        "& .Mui-selected": {
                            backgroundColor: "transparent",
                            color: palette.primary.main,
                        },
                    },
                    "&.datetime-picker-dialog .MuiDialog-paper": {
                        minWidth: "none",
                        width: "auto",
                        "& .MuiTabs-root": {
                            "& .MuiButtonBase-root": {
                                color: palette.grey[600],
                            },
                            "& .Mui-selected": {
                                backgroundColor: `${palette.grey[200]} !important`,
                            },
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: palette.grey[400],
                        },
                        "& .MuiPickersToolbar-root": {
                            "& .MuiPickersToolbar-content": {
                                alignItems: "end",
                            },
                            "& .Mui-selected": {
                                background: "transparent !important",
                            },
                        },
                        "& .MuiClock-amButton, & .MuiClock-pmButton": {
                            "& .MuiTypography-root": {
                                color: "inherit",
                            },
                        },
                        "& .MuiDialogActions-root": {
                            "& .MuiButtonBase-root": {
                                border: "1px solid rgba(6, 23, 53, 0.5)",
                                padding: "4px 12px",
                                fontSize: 14,
                                "&:hover": {
                                    backgroundColor: palette.primary.dark,
                                    color: palette.primary.contrastText,
                                },
                                "&:last-child": {
                                    backgroundColor: palette.primary.main,
                                    color: palette.primary.contrastText,
                                },
                            },
                        },
                        ".MuiPickersDay-root": {
                            fontSize: 14,
                        },
                        ".PrivatePickersYear-yearButton": {
                            fontSize: 14,
                        },
                    },
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderColor: palette.secondary.main,
                    color: palette.secondary.main,
                    height: 30,
                    minWidth: 70,
                    padding: "4px 18px",
                    "&.Mui-selected": {
                        backgroundColor: palette.primary.main,
                        color: palette.primary.contrastText,
                        "&:hover": {
                            backgroundColor: palette.secondary.main,
                            color: palette.secondary.contrastText,
                        },
                    },
                },
            },
        },
        MuiCardActionArea: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "transparent",
                        ".MuiCardActionArea-focusHighlight": {
                            opacity: 0,
                        },
                    },
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    "&.Mui-focusVisible": {
                        "svg path": {
                            fill: palette.primary.light,
                            outline: `2px solid rgba(189,189,189,0.4)`,
                            borderRadius: 1,
                        },
                    },
                    "& .MuiSvgIcon-root": {
                        color: palette.primary.main,
                    },
                    "& + .MuiTypography-root, &  ~.MuiTypography-root": {
                        fontSize: 16,
                        textAlign: "left",
                    },
                    "&.Mui-disabled": {
                        opacity: 0.5,
                    },
                    "&~.MuiTypography-root": {
                        userSelect: "none",
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: palette.primary.main,
                    "&.Mui-checked": {
                        color: palette.primary.main,
                    },
                    "& + .MuiTypography-root": {
                        fontSize: "inherit",
                        fontWeight: "inherit",
                    },
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    borderTop: "1px solid #e0e0e0",
                    borderRadius: 0,
                },
            },
        },

        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: "separate",
                    "&.no-action td": {
                        paddingBottom: 19,
                        paddingTop: 19,
                    },
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "12px 16px 12px 16px",
                    "&.MuiTableCell-head": {
                        boxShadow: "inset 0 -1px 0 #000",
                        backgroundColor: "#fff",
                        zIndex: 10,
                    },
                    "&.MuiTableCell-body": {
                        borderBottom: "1px solid",
                        borderColor: palette.border,
                        verticalAlign: "middle",
                    },
                    [breakpoints.down("sm")]: {
                        display: "block",
                        border: "none",
                        borderBottom: "1px solid",
                        borderColor: palette.border,
                        position: "relative",
                        padding: "8px 10px 8px 40%",
                        backgroundColor: palette.white,
                        minHeight: "41px",
                        "&.MuiTableCell-alignRight": {
                            textAlign: "left",
                        },
                        "&:last-child": {
                            borderBottom: "none",
                        },
                        "&:before": {
                            position: "absolute",
                            left: "10px",
                            width: "40%",
                            paddingRight: "10px",
                            whiteSpace: "nowrap",
                            content: "attr(data-th)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "#222",
                            fontWeight: 700,
                        },
                    },
                },
            },
        },

        MuiTableHead: {
            styleOverrides: {
                root: {
                    [breakpoints.down("sm")]: {
                        display: "none",
                    },
                },
            },
        },

        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: "inherit",
                    },
                    [breakpoints.down("sm")]: {
                        display: "block",
                        border: "1px solid #dcdcdc",
                        marginTop: 16,
                        "&:nth-of-type(2n+1) .MuiTableCell-body": {
                            backgroundColor: "#f5f5f5",
                            borderBottomColor: palette.white,
                        },
                    },
                },
            },
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    color: palette.secondary.main,
                    textTransform: "none",
                    "&.Mui-selected": {
                        color: palette.text.primary,
                    },
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    top: "8px",
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    marginLeft: 24,
                    "& .MuiAlert-action": {
                        paddingTop: "4px",
                    },
                    "& .MuiAlert-standardSuccess": {
                        backgroundColor: palette.success.main,
                        color: palette.success.contrastText,
                        "& .MuiAlert-icon": {
                            color: palette.success.contrastText,
                        },
                    },
                },
            },
        },

        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: 13,
                    lineHeight: "20px",
                    marginLeft: 0,
                    "&.Mui-error": {
                        fontSize: 13,
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: palette.text.primary,
                    fontWeight: 700,
                },
            },
        },
        MuiPopper: {
            styleOverrides: {
                root: {
                    "& .MuiTooltip-tooltip": {
                        fontSize: 14,
                        lineHeight: "16px",
                        minWidth: 70,
                        padding: "8px",
                    },
                    "&.datetime-picker-popper": {
                        ".PrivatePickersYear-yearButton": {
                            fontSize: 14,
                        },
                        ".MuiPickersDay-root": {
                            fontSize: 14,
                        },
                        ".MuiClock-amButton, .MuiClock-pmButton": {
                            "& .MuiTypography-root": {
                                color: "inherit",
                            },
                        },
                    },
                    "&[data-popper-placement='top-start']": {
                        ".MuiTooltip-arrow": {
                            transform: "translate(15px, 0px) !important",
                        },
                    },
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: "none",
            },
            styleOverrides: {
                root: {
                    color: palette.secondary.main,
                    textDecoration: "none",
                    "&:hover": {
                        color: palette.secondary.light,
                    },
                },
            },
        },
        MuiCalendarOrClockPicker: {
            styleOverrides: {
                root: {
                    "& .MuiDateTimePickerToolbar-dateContainer .Mui-selected": {
                        backgroundColor: "#fff !important",
                    },
                },
            },
        },
        MuiCollapse: {
            styleOverrides: {
                root: {
                    ".SnackbarItem-wrappedRoot": {
                        ".SnackbarContent-root": {
                            fontSize: 16,
                        },
                        ".SnackbarItem-message": {
                            paddingRight: 24,
                        },
                        ".SnackbarItem-action": {
                            position: "absolute",
                            margin: 0,
                            top: 0,
                            right: 0,
                            padding: 0,
                            ".MuiButtonBase-root": {
                                padding: 4,
                                fontSize: 20,
                            },
                        },
                    },
                },
            },
        },
    },
}) as any;

export default theme;

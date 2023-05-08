import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LANGUAGES } from "../../constants/languages";

export interface LanguageSelectorProps extends SelectProps {
    className?: string;
    label?: string;
    labelClassName?: string;
    placeholder?: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
    root: {
        "& .MuiSelect-outlined": {
            paddingTop: 10,
            paddingBottom: 10,
            fontFamily: "inherit",
            fontSize: "14px",
            lineHeight: "26px",
            display: "flex",
            alignItems: "center",
        },
        "& .MuiSelect-icon": {
            color: theme.palette.primary.main,
            width: 20,
            height: 20,
            top: 10,
        },
        "& .MuiInputBase-root, & .MuiOutlinedInput-notchedOutline": {
            border: "none !important",
        },
        "& .Mui-selected": {
            backgroundColor: `${theme.palette.primary.light} !important`,
        },
    },
}));

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    children,
    value,
    defaultValue,
    label,
    labelClassName,
    id,
    onChange,
    ...props
}) => {
    const router = useRouter();
    const [language, setLanguage] = useState(router.locale);
    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
        router.push(router.asPath, router.asPath, {
            locale: event.target.value,
        });
    };

    useEffect(() => {
        if (language) {
            document.documentElement.setAttribute("lang", `${router.locale}`);
            document.documentElement.style.setProperty(
                "--lang-font",
                LANGUAGES.find((x) => x.locale === language)?.font ??
                    LANGUAGES[0].font,
            );
        }
    }, [language]);

    return (
        <>
            <FormControl
                id="language-dropdown-menu"
                sx={{
                    "& .MuiSelect-outlined": {
                        fontFamily: "inherit",
                        fontSize: "14px",
                        lineHeight: "26px",
                        display: "flex",
                        alignItems: "center",
                        padding: "10px !important",
                        width: "auto",
                    },
                    "& .MuiInputBase-root, & .MuiOutlinedInput-notchedOutline":
                        {
                            border: "none !important",
                        },
                    "& img": {
                        marginRight: "8px",
                    },
                    "& .MuiSvgIcon-root": {
                        display: "none",
                    },
                    "& .MuiSelect-select": {
                        "& .selectLabel": {
                            display: "none",
                        },
                        "& img": {
                            marginRight: "0 !important",
                        },
                    },
                }}
            >
                <Select
                    value={language}
                    onChange={handleChange}
                    label={label}
                    id={id}
                    name={id}
                >
                    {LANGUAGES.map((language) => (
                        <MenuItem
                            id={`${language.locale}-language`}
                            value={language.locale}
                            key={language.locale}
                            sx={{ fontSize: "14px !important;" }}
                        >
                            <Image
                                id={`${language.locale}-language-logo`}
                                src={language.flag}
                                width={24}
                                height={24}
                                alt={language.label}
                                style={{ marginRight: 8 }}
                            />
                            <span
                                id={`${language.locale}-language-name`}
                                className="selectLabel"
                            >
                                {language.label}
                            </span>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default LanguageSelector;

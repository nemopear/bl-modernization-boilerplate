import theme from "@/styles/theme";
import { Button, Menu, MenuItem } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { BsBoxArrowInRight, BsChevronDown } from "react-icons/bs";

export const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAccountMenu = Boolean(anchorEl);
  const t = useTranslations("menu-bar");
  return (
    <>
      <Button
        id="account-dropdown-menu"
        aria-controls={openAccountMenu ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openAccountMenu ? "true" : undefined}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        }}
        endIcon={<BsChevronDown />}
        variant="text"
        sx={{
          fontSize: 14,
          fontWeight: "normal",
          color: theme.palette.text.primary,
          "& svg": {
            fontSize: "12px !important",
          },
          "&:focus, &:active": {
            backgroundColor: "transparent",
          },
        }}
      >
        Admin
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openAccountMenu}
        onClose={() => {
          setAnchorEl(null);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          <BsBoxArrowInRight style={{ marginRight: 8 }} />
          {t("logout")}
        </MenuItem>
      </Menu>
    </>
  );
};

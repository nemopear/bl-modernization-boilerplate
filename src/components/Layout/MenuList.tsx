import { MENUS } from "@/constants/menus";
import theme from "@/styles/theme";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslations } from "next-intl";
import { ReactNode, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
export interface MenuItemProps {
  slug?: string;
  to?: string;
  icon?: ReactNode;
  title: string;
  items?: MenuItemProps[];
  translationKey: string;
  id: string;
}

export function hasChildren(item: MenuItemProps) {
  const { items } = item;

  if (items === undefined) {
    return false;
  }

  if (items.constructor !== Array) {
    return false;
  }

  if (items.length === 0) {
    return false;
  }

  return true;
}

const MenuItem = (item: MenuItemProps) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component {...item} />;
};

const SingleLevel = (item: MenuItemProps) => {
  const pathName = usePathname();
  const menuPath = item.to;
  const currentPath = pathName;
  const t = useTranslations("navigation");
  const getMenuListItemButton = () => {
    return (
      <ListItemButton
        id={`${item.id}-sidebar-menu`}
        sx={{
          alignItems: "baseline",
          "&:hover, &:active, &.active": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
        className={menuPath && currentPath.includes(menuPath) ? "active" : ""}
      >
        <ListItemIcon
          id={`${item.id}-sidebar-menu-icon`}
          className="relative top-[3px]"
          sx={{
            color: theme.palette.primary.contrastText,
            minWidth: "initial",
            mr: 2,
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          id={`${item.id}-sidebar-menu-name`}
          primary={t(item.translationKey)}
          sx={{ color: theme.palette.primary.contrastText }}
        />
      </ListItemButton>
    );
  };
  return (
    <>
      <Link
        legacyBehavior
        href={item.to ?? ""}
        className="flex items-center flex-1 no-underline"
      >
        {getMenuListItemButton()}
      </Link>
    </>
  );
};

const MultiLevel = (item: MenuItemProps) => {
  const { items: children } = item;
  const pathName = usePathname();
  const t = useTranslations("navigation");
  const [open, setOpen] = useState(
    children ? children.map((x) => x.to).includes(pathName) : false
  );

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem
        id={`${item.id}-sidebar-menu`}
        component="div"
        sx={{
          userSelect: "none",
          cursor: "pointer",
          ...(item.to && {
            "&:hover, &:active, &.active": {
              backgroundColor: theme.palette.primary.light,
            },
          }),
        }}
        className={pathName === item.to ? "active" : ""}
        onClick={handleClick}
      >
        <ListItemIcon
          id={`${item.id}-sidebar-menu-icon`}
          sx={{
            color: theme.palette.primary.contrastText,
            minWidth: "initial",
            mr: 2,
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          id={`${item.id}-sidebar-menu-name`}
          primary={t(item.translationKey)}
          sx={{ color: theme.palette.primary.contrastText }}
        />

        <IconButton
          sx={{
            color: theme.palette.primary.contrastText,
            fontSize: 12,
          }}
        >
          {open ? <BsChevronUp /> : <BsChevronDown />}
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children &&
            children.map((child, index) => (
              <Box
                key={index}
                sx={{
                  "& .MuiListItemButton-root": {
                    pl: 6,
                  },
                }}
              >
                <MenuItem key={index} {...child} />
              </Box>
            ))}
        </List>
      </Collapse>
    </>
  );
};

const MenuList = () => {
  return (
    <>
      {MENUS.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </>
  );
};

const MenuListItemButton: React.FC<MenuItemProps> = (item: MenuItemProps) => {
  const pathName = usePathname();
  const t = useTranslations("navigation");
  const menuPath = item.to;
  const currentPath = pathName;
  return (
    <ListItemButton
      id={`${item.id}-sidebar-menu`}
      sx={{
        alignItems: "baseline",
        "&:hover, &:active, &.active": {
          backgroundColor: theme.palette.primary.light,
        },
      }}
      className={menuPath && currentPath.includes(menuPath) ? "active" : ""}
    >
      <ListItemIcon
        id={`${item.id}-sidebar-menu-icon`}
        className="relative top-[3px]"
        sx={{
          color: theme.palette.primary.contrastText,
          minWidth: "initial",
          mr: 2,
        }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText
        id={`${item.id}-sidebar-menu-name`}
        primary={t(item.translationKey)}
        sx={{ color: theme.palette.primary.contrastText }}
      />
    </ListItemButton>
  );
};
export default MenuList;

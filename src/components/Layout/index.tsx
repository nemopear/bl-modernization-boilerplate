import theme from "@/styles/theme";
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Nunito } from "next/font/google";
import React, { ReactNode } from "react";
import HeaderBar from "./HeaderBar";
import MenuList from "./MenuList";
const nunito = Nunito({ subsets: ["latin"] });

export const DRAWER_WIDTH: number = 240;

export interface BaseLayoutProps {
  children?: ReactNode;
  pageTitle?: string;
  breadcrumbItems?: any[];
  sidebarOpenLg?: boolean;
  tabTitle?: string;
}

export const SidebarDrawer = () => {
  const tenantName = "Batchline";
  return (
    <Box>
      <div className="flex items-center space-x-4 p-4" id="tenant-sidebar">
        <Avatar
          className="w-12 h-12 p-0.5 text-sm leading-5 bg-white text-black object-fill"
          sx={{
            img: {
              objectFit: "fill",
            },
          }}
          id="tenant-image-sidebar"
          // src="/favicon.svg"
        >
          {tenantName.substring(0, 1)}
        </Avatar>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.primary.contrastText }}
          id="tenant-name-sidebar"
        >
          {tenantName}
        </Typography>
      </div>
      <Divider className="opacity-30" />
      <MenuList />
    </Box>
  );
};

export const BaseLayout = ({
  children,
  pageTitle,
  breadcrumbItems,
  sidebarOpenLg,
  tabTitle,
}: BaseLayoutProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(
    sidebarOpenLg !== undefined ? sidebarOpenLg : true
  );
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <HeaderBar
          hasToggleMenu
          toggleMenuXsFn={() => setMobileOpen(!mobileOpen)}
          toggleMenuXlFn={() => setOpen(!open)}
          logoLink="/dashboard"
        />
        <Box
          component="nav"
          sx={{
            position: "fixed",
            zIndex: "1101",
            top: 54,
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            [theme.breakpoints.up("xl")]: {
              ...(open && {
                flexShrink: 0,
                width: DRAWER_WIDTH,
              }),
            },
          }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", xl: "none" },
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.primary.main,
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
                boxShadow: "none",
              },
            }}
          >
            <SidebarDrawer />
          </Drawer>
          <Drawer
            variant="persistent"
            sx={{
              [theme.breakpoints.down("xl")]: {
                display: "none",
              },
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.primary.main,
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
                boxShadow: "none",
                top: 54,
              },
            }}
            open={open}
          >
            <SidebarDrawer />
          </Drawer>
        </Box>
        <Box
          component="main"
          className="gray-gradient relative"
          sx={{
            flexGrow: 1,
            p: 3,
            paddingTop: "64px",
            minHeight: "100vh",
            width: "100%",
            margin: 0,
            [theme.breakpoints.up("xl")]: {
              transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              ...(open && {
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                marginLeft: `${DRAWER_WIDTH}px`,
              }),
            },
          }}
        >
          {/* <div className="py-5 ">
            <AMPBreadcrumb breadcrumbItems={breadcrumbItems} />
            {pageTitle && <PageTitle title={pageTitle} />}
            {children}
          </div> */}
          {/* {pageTitle && <PageTitle title={pageTitle} />} */}
          {children}
        </Box>
      </Box>
    </>
  );
};

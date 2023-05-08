import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { BsList } from "react-icons/bs";
import LanguageSelector from "./LanguageSelector";

// import { AccountDropdown } from "./AccountDropdown";

export type HeaderBarProps = {
  hasToggleMenu?: boolean;
  logoLink?: string;
  toggleMenuXsFn?: () => void;
  toggleMenuXlFn?: () => void;
};
const HeaderBar = ({
  hasToggleMenu,
  logoLink,
  toggleMenuXsFn,
  toggleMenuXlFn,
}: HeaderBarProps) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ minHeight: "54px !important" }}>
        {hasToggleMenu && (
          <>
            <IconButton
              id="toggle-menu-button"
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={toggleMenuXsFn}
              sx={{ mr: 2, display: { xl: "none" } }}
            >
              <BsList />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={toggleMenuXlFn}
              edge="start"
              className="hidden"
              sx={{
                mr: 2,
                display: { xs: "none", xl: "flex !important" },
              }}
            >
              <BsList />
            </IconButton>
          </>
        )}
        {/* <Logo
                    color="black"
                    width={70}
                    //height={35}
                    redirectLink={logoLink}
                /> */}
        {/* Logo */}
        {/* <Box sx={{ marginLeft: "auto" }}>
          <LanguageSelector />
        </Box> */}
        {/* <AccountDropdown /> */}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;

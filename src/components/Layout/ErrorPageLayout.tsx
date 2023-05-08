import { Box } from "@mui/material";
import { BaseLayoutProps } from ".";

const ErrorPageLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        p: {
          xs: 4,
          md: 8,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ErrorPageLayout;

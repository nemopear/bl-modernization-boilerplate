import { ThemeProvider } from "@mui/material/styles";
// import type { Preview } from "@storybook/react";
import theme from "../src/styles/theme";
import "../src/styles/tailwind.scss";
import "../src/styles/globals.scss";
// import "../src/styles/storybook.scss";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

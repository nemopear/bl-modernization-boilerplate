import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  previewHead: (head) => `
    ${head}
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700,800&display=swap"
      rel="stylesheet"
    />
  `,
};
export default config;

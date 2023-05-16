import Button from "../../src/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
      defaultValue: "text",
      description:
        "The Button comes with three variants: text (default), contained, and outlined.",
    },
    color: {
      options: ["primary", "secondary", "error"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "contained",
    children: "Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    children: "Button",
    color: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "contained",
    children: "Button",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "contained",
    children: "Button",
    color: "primary",
  },
};

import { Meta, StoryFn } from "@storybook/react";
import { FiLayers } from "react-icons/fi";
import { Button } from "./button";

// Config:
export default {
  title: "Atoms/Button",
  component: Button
} satisfies Meta<typeof Button>;

// Template:
const Template: StoryFn<typeof  Button> = args => <Button {...args}>Click me</Button>;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  icon: <FiLayers />
};
export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: "small"
};

export const SizeFullWidth = Template.bind({});
SizeFullWidth.args = {
  size: "full-width"
};
import type { Meta, StoryFn } from "@storybook/react";

import { TutorialList } from "./TutorialList";

export default {
  title: "TutorialList",
  component: TutorialList,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof TutorialList>;

const Template: StoryFn<typeof TutorialList> = () => <TutorialList />;

export const Default = Template.bind({});
Default.args = {};

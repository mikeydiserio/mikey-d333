import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'none' }, // Children are defined in render
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: [
      <Tab key="tab1" label="Tab One">
        <div>Content for Tab One. This is where your first tab's information goes.</div>
      </Tab>,
      <Tab key="tab2" label="Tab Two">
        <div>Content for Tab Two. You can put any React elements here.</div>
      </Tab>,
      <Tab key="tab3" label="Tab Three">
        <div>Content for Tab Three. More details here.</div>
      </Tab>,
    ],
  },
};

export const WithLongLabels: Story = {
  args: {
    children: [
      <Tab key="tabA" label="Very Long Tab Label A">
        <div>Content for the first tab with a very long label.</div>
      </Tab>,
      <Tab key="tabB" label="Another Extremely Long Tab Label B">
        <div>Content for the second tab with an even longer label.</div>
      </Tab>,
    ],
  },
};

export const SingleTab: Story = {
  args: {
    children: [
      <Tab key="single" label="Only Tab">
        <div>This is the only tab available.</div>
      </Tab>,
    ],
  },
};
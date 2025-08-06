import type { Meta, StoryObj } from '@storybook/react';
import { SlideToggle } from './SlideToggle';
import React from 'react';

const meta: Meta<typeof SlideToggle> = {
  title: 'Components/SlideToggle',
  component: SlideToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    onChange: { action: 'toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof SlideToggle>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Interactive: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [checked, setChecked] = React.useState(args.checked);
    return <SlideToggle {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
  args: {
    checked: false,
  },
};
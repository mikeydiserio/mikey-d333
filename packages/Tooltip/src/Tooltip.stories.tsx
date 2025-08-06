import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    children: { control: 'none' }, // Children are defined in render
    delay: { control: { type: 'number', min: 0, step: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a simple tooltip.',
    children: <Button>Hover Me</Button>,
  },
};

export const WithLongContent: Story = {
  args: {
    content: 'This tooltip has a much longer content string to demonstrate how it handles more text.',
    children: <Button variant="secondary">Hover for Details</Button>,
  },
};

export const CustomDelay: Story = {
  args: {
    content: 'Appears after 1 second.',
    children: <Button variant="ghost">Hover with Delay</Button>,
    delay: 1000, // 1 second delay
  },
};

export const WithIconTrigger: Story = {
  args: {
    content: 'Settings',
    children: (
      <Button>
        ⚙️
      </Button>
    ),
  },
};
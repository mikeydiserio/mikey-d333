import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import React from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: { control: 'none' }, // Handled by render
    menuItems: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultMenuItems = [
  { label: 'Profile', onClick: () => alert('Profile clicked') },
  { label: 'Settings', onClick: () => alert('Settings clicked') },
  { label: 'Logout', onClick: () => alert('Logout clicked') },
];

export const Default: Story = {
  args: {
    trigger: <Button>Open Dropdown</Button>,
    menuItems: defaultMenuItems,
  },
};

export const WithCustomTrigger: Story = {
  args: {
    trigger: <Button variant="secondary">More Options</Button>,
    menuItems: [
      { label: 'Edit', onClick: () => alert('Edit clicked') },
      { label: 'Delete', onClick: () => alert('Delete clicked') },
    ],
  },
};

export const EmptyMenu: Story = {
  args: {
    trigger: <Button>Empty Dropdown</Button>,
    menuItems: [],
  },
};
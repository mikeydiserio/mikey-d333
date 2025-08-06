import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './FloatingActionButton';
import { Plus } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    layout: 'fullscreen', // To show fixed position
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  args: {
    children: <Plus size={24} />,
    variant: 'primary',
    onClick: () => alert('FAB clicked!'),
  },
};

export const WithText: Story = {
  args: {
    children: 'Add',
    variant: 'primary',
    onClick: () => alert('Add button clicked!'),
  },
};

export const SecondaryVariant: Story = {
  args: {
    children: <Plus size={24} />,
    variant: 'secondary',
    onClick: () => alert('Secondary FAB clicked!'),
  },
};

export const DangerVariant: Story = {
  args: {
    children: 'X',
    variant: 'danger',
    onClick: () => alert('Danger FAB clicked!'),
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import React from 'react';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedDate: { control: 'date' },
    onDateChange: { action: 'date changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    selectedDate: new Date(),
  },
};

export const WithSelectedDate: Story = {
  args: {
    selectedDate: new Date(2025, 0, 15), // January 15, 2025
  },
};

export const Interactive: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [date, setDate] = React.useState(args.selectedDate || new Date());
    return <Calendar {...args} selectedDate={date} onDateChange={setDate} />;
  },
  args: {
    selectedDate: new Date(),
  },
};
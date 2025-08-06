import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioButton } from './index'; // Import both from index
import React from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    selectedValue: { control: 'text' },
    onChange: { action: 'value changed' },
    children: { control: 'none' }, // Children are defined in render
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [value, setValue] = React.useState(args.selectedValue);
    return (
      <RadioGroup {...args} selectedValue={value} onChange={setValue}>
        <RadioButton label="Option A" value="A" />
        <RadioButton label="Option B" value="B" />
        <RadioButton label="Option C" value="C" />
      </RadioGroup>
    );
  },
  args: {
    name: 'default-radio-group',
    selectedValue: 'B',
  },
};

export const WithDisabledOption: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [value, setValue] = React.useState(args.selectedValue);
    return (
      <RadioGroup {...args} selectedValue={value} onChange={setValue}>
        <RadioButton label="Enabled Option 1" value="1" />
        <RadioButton label="Disabled Option 2" value="2" disabled />
        <RadioButton label="Enabled Option 3" value="3" />
      </RadioGroup>
    );
  },
  args: {
    name: 'disabled-radio-group',
    selectedValue: '1',
  },
};

export const InitialSelection: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [value, setValue] = React.useState(args.selectedValue);
    return (
      <RadioGroup {...args} selectedValue={value} onChange={setValue}>
        <RadioButton label="First Choice" value="first" />
        <RadioButton label="Second Choice" value="second" />
      </RadioGroup>
    );
  },
  args: {
    name: 'initial-selection-group',
    selectedValue: 'second',
  },
};
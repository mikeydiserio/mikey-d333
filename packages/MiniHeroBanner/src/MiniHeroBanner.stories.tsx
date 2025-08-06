import type { Meta, StoryObj } from '@storybook/react';
import { MiniHeroBanner } from './MiniHeroBanner';

const meta: Meta<typeof MiniHeroBanner> = {
  title: 'Components/MiniHeroBanner',
  component: MiniHeroBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MiniHeroBanner>;

export const Default: Story = {
  args: {
    title: 'Our Services',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'A Comprehensive Overview of Our Amazing Features',
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { HeroBanner } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our App',
    subtitle: 'Discover amazing features and services.',
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: 'Explore the World',
    subtitle: 'Your adventure starts here.',
    backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ba6f06ceb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  },
};

export const NoSubtitle: Story = {
  args: {
    title: 'Simple Hero',
  },
};
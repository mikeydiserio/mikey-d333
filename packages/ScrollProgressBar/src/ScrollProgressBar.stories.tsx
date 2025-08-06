import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgressBar } from './ScrollProgressBar';
import React from 'react';

const meta: Meta<typeof ScrollProgressBar> = {
  title: 'Components/ScrollProgressBar',
  component: ScrollProgressBar,
  parameters: {
    layout: 'fullscreen', // Important for scroll behavior
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollProgressBar>;

export const Default: Story = {
  render: () => (
    <>
      <ScrollProgressBar />
      <div style={{ height: '200vh', padding: '20px', textAlign: 'center' }}>
        <h1>Scroll Down to See Progress Bar</h1>
        <p>This component will show a progress bar at the top of the page as you scroll.</p>
        <div style={{ marginTop: '100vh' }}>
          <p>Keep scrolling...</p>
        </div>
      </div>
    </>
  ),
  args: {},
};
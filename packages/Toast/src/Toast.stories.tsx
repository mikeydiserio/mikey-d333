import type { Meta, StoryObj } from '@storybook/react';
import { useToast } from './ToastProvider'; // Import useToast
import { Button } from '../Button';
import React from 'react';

const meta: Meta = {
  title: 'Components/Toast',
  component: Button, // Use a button to trigger toasts
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // No argTypes for Toast itself, as it's triggered by a hook
  },
};

export default meta;

// Helper component to demonstrate toasts
const ToastDemo = () => {
  const { showToast, dismissToast } = useToast();

  const handleShowSuccess = () => {
    showToast('Operation completed successfully!', 'success');
  };

  const handleShowError = () => {
    showToast('Something went wrong. Please try again.', 'error');
  };

  const handleShowInfo = () => {
    showToast('Here is some important information.', 'info');
  };

  const handleShowLoading = () => {
    const toastId = showToast('Loading data...', 'loading');
    setTimeout(() => {
      dismissToast(toastId);
      showToast('Data loaded!', 'success');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button onClick={handleShowSuccess}>Show Success Toast</Button>
      <Button variant="danger" onClick={handleShowError}>Show Error Toast</Button>
      <Button variant="secondary" onClick={handleShowInfo}>Show Info Toast</Button>
      <Button variant="ghost" onClick={handleShowLoading}>Show Loading Toast</Button>
    </div>
  );
};

type Story = StoryObj<typeof Button>; // Story type for the Button that triggers toasts

export const Default: Story = {
  render: () => <ToastDemo />,
};
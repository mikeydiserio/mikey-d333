import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import React from 'react';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen', // Use fullscreen to show overlay
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    children: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [isOpen, setIsOpen] = React.useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </>
    );
  },
  args: {
    isOpen: false,
    children: '', // Content provided in render function
  },
};

export const LongContent: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [isOpen, setIsOpen] = React.useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Long Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Long Content Modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </>
    );
  },
  args: {
    isOpen: false,
    children: '',
  },
};
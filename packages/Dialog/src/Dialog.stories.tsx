import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog'; // Changed to named import
import React from 'react';
import { Button } from '../Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen', // Use fullscreen to show overlay
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    children: { control: 'text' },
    footer: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [isOpen, setIsOpen] = React.useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This is the content of the dialog.</p>
        </Dialog>
      </>
    );
  },
  args: {
    isOpen: false,
    title: 'Simple Dialog',
    children: 'This is a simple dialog with some content.',
  },
};

export const WithFooter: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [isOpen, setIsOpen] = React.useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Dialog with Footer</Button>
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This dialog includes a custom footer section.</p>
        </Dialog>
      </>
    );
  },
  args: {
    isOpen: false,
    title: 'Dialog with Actions',
    children: 'You can place buttons or other elements in the footer.',
    footer: (
      <>
        <Button variant="secondary" onClick={() => alert('Cancel clicked')}>Cancel</Button>
        <Button variant="primary" onClick={() => alert('Confirm clicked')}>Confirm</Button>
      </>
    ),
  },
};

export const LongContent: Story = {
  render: (args: Story['args']) => { // Explicitly type args
    const [isOpen, setIsOpen] = React.useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Long Dialog</Button>
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    isOpen: false,
    children: '', // Content is provided in render function
  },
};
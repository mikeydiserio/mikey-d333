import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import React from 'react';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    children: { control: 'text' },
    footer: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is the content of the card.',
  },
};

export const WithHeader: Story = {
  args: {
    header: 'Card Title',
    children: 'This card has a header.',
  },
};

export const WithFooter: Story = {
  args: {
    children: 'This card has a footer.',
    footer: <Button variant="primary">Action</Button>,
  },
};

export const FullCard: Story = {
  args: {
    header: 'Complete Card',
    children: (
      <>
        <p>This card includes both a header and a footer.</p>
        <p>It can contain any React children.</p>
      </>
    ),
    footer: (
      <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
};
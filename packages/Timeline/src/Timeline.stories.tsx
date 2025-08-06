import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from './Timeline';
import React from 'react';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'none' }, // Children are TimelineItem components
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TimelineItem title="Event 1: Project Kickoff" description="Initial meeting and planning phase." />
        <TimelineItem title="Event 2: Design Approval" description="Final designs were approved by stakeholders." />
        <TimelineItem title="Event 3: Development Start" description="Coding phase begins for the core features." />
        <TimelineItem title="Event 4: Beta Launch" description="Public beta version released to early adopters." />
      </>
    ),
  },
};

export const ShortTimeline: Story = {
  args: {
    children: (
      <>
        <TimelineItem title="Start" description="Beginning of the process." />
        <TimelineItem title="End" description="Completion of the task." />
      </>
    ),
  },
};

export const DetailedTimeline: Story = {
  args: {
    children: (
      <>
        <TimelineItem
          title="Phase 1: Research & Discovery"
          description="Conducted user interviews, market analysis, and competitive benchmarking to define project scope and user needs."
        />
        <TimelineItem
          title="Phase 2: Prototyping & Testing"
          description="Developed low-fidelity wireframes and high-fidelity prototypes. Performed usability testing with target users, iterating based on feedback."
        />
        <TimelineItem
          title="Phase 3: Development & Integration"
          description="Implemented front-end and back-end functionalities. Integrated with third-party APIs and ensured data consistency across systems."
        />
        <TimelineItem
          title="Phase 4: Deployment & Monitoring"
          description="Deployed the application to production environment. Set up monitoring tools for performance and error tracking, and planned for continuous updates."
        />
      </>
    ),
  },
};
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Timeline, TimelineItem } from './Timeline';
import { describe, it, expect } from 'vitest';

describe('Timeline', () => {
  it('renders timeline items', () => {
    render(
      <ThemeProvider theme={theme}>
        <Timeline>
          <TimelineItem title="Step 1" description="This is the first step." />
          <TimelineItem title="Step 2" description="This is the second step." />
        </Timeline>
      </ThemeProvider>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('This is the second step.')).toBeInTheDocument();
  });
});
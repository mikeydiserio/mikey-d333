import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Tooltip } from './Tooltip';
import { describe, it, expect } from 'vitest';

describe('Tooltip', () => {
  it('shows and hides the tooltip on hover', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Tooltip content="Hello, world!">
          <span>Hover me</span>
        </Tooltip>
      </ThemeProvider>
    );

    fireEvent.mouseEnter(screen.getByText('Hover me'));

    await waitFor(() => {
      expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    });

    fireEvent.mouseLeave(screen.getByText('Hover me'));

    await waitFor(() => {
      expect(screen.queryByText('Hello, world!')).not.toBeInTheDocument();
    });
  });
});
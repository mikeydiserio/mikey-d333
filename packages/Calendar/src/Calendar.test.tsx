import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Calendar } from './Calendar';
import { describe, it, expect, vi } from 'vitest';

describe('Calendar', () => {
  it('renders the calendar and allows date selection', () => {
    const onDateChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Calendar onDateChange={onDateChange} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('15'));
    expect(onDateChange).toHaveBeenCalledWith(expect.any(Date));
  });
});
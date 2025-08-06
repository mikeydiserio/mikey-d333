import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { SlideToggle } from './SlideToggle';
import { describe, it, expect, vi } from 'vitest';

describe('SlideToggle', () => {
  it('toggles on click', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <SlideToggle onChange={onChange} />
      </ThemeProvider>
    );

    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
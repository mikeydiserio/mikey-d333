import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Spinner } from './Spinner';
import { describe, it, expect } from 'vitest';

describe('Spinner', () => {
  it('renders with the correct size', () => {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <Spinner size="small" />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('Loading')).toHaveStyle('width: 16px');

    rerender(
      <ThemeProvider theme={theme}>
        <Spinner size="large" />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('Loading')).toHaveStyle('width: 64px');
  });
});
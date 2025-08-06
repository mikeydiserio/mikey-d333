import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { FloatingActionButton } from './FloatingActionButton';
import { describe, it, expect } from 'vitest';

describe('FloatingActionButton', () => {
  it('renders a button', () => {
    render(
      <ThemeProvider theme={theme}>
        <FloatingActionButton>Test</FloatingActionButton>
      </ThemeProvider>
    );

    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
  });
});
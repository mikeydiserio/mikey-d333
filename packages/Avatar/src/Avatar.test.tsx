import React from 'react';
import { render, screen } from '@testing-library/react'; // Corrected import syntax
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Avatar } from './Avatar';
import { describe, it, expect } from 'vitest';

describe('Avatar', () => {
  it('renders the fallback when src is not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Avatar fallback="AB" />
      </ThemeProvider>
    );
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('renders the image when src is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Avatar src="https://example.com/avatar.jpg" alt="Avatar" fallback="AB" />
      </ThemeProvider>
    );
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });
});
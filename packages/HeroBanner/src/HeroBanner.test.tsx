import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { HeroBanner } from './HeroBanner';
import { describe, it, expect } from 'vitest';

describe('HeroBanner', () => {
  it('renders the title and subtitle', () => {
    render(
      <ThemeProvider theme={theme}>
        <HeroBanner title="My Hero" subtitle="My Subtitle" />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /my hero/i })).toBeInTheDocument();
    expect(screen.getByText(/my subtitle/i)).toBeInTheDocument();
  });
});
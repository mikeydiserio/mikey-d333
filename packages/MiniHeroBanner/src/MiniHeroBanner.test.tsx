import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { MiniHeroBanner } from './MiniHeroBanner';
import { describe, it, expect } from 'vitest';

describe('MiniHeroBanner', () => {
  it('renders the title', () => {
    render(
      <ThemeProvider theme={theme}>
        <MiniHeroBanner title="My Mini Hero" />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /my mini hero/i })).toBeInTheDocument();
  });
});
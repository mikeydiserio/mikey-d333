import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Article } from './Article';
import { describe, it, expect } from 'vitest';

describe('Article', () => {
  it('renders the article content', () => {
    render(
      <ThemeProvider theme={theme}>
        <Article title="My Article" author="John Doe" date="July 1, 2024">
          <p>This is the article content.</p>
        </Article>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /my article/i })).toBeInTheDocument();
    expect(screen.getByText(/by john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/this is the article content/i)).toBeInTheDocument();
  });
});
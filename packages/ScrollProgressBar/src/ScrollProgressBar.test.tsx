import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { ScrollProgressBar } from './ScrollProgressBar';
import { describe, it, expect } from 'vitest';

describe('ScrollProgressBar', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <ScrollProgressBar />
      </ThemeProvider>
    );
  });
});
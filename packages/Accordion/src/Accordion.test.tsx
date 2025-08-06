import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('opens and closes on click', () => {
    render(
      <ThemeProvider theme={theme}>
        <Accordion title="My Accordion">
          <p>Content</p>
        </Accordion>
      </ThemeProvider>
    );

    const header = screen.getByText('My Accordion');
    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.getByText('Content')).toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
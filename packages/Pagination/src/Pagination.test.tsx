import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Pagination } from './Pagination';
import { describe, it, expect, vi } from 'vitest';

describe('Pagination', () => {
  it('calls onPageChange with the correct page number', () => {
    const onPageChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText('Next'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
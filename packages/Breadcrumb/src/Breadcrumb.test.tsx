import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Breadcrumb } from './Breadcrumb';
import { describe, it, expect } from 'vitest';

describe('Breadcrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Laptops' },
  ];

  it('renders the breadcrumb items', () => {
    render(
      <ThemeProvider theme={theme}>
        <Breadcrumb items={items} />
      </ThemeProvider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Laptops')).toBeInTheDocument();
  });

  it('renders links for all but the last item', () => {
    render(
      <ThemeProvider theme={theme}>
        <Breadcrumb items={items} />
      </ThemeProvider>
    );

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
    expect(screen.getByText('Laptops').closest('a')).toBeNull();
  });
});
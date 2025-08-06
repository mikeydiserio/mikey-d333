import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/theme';
import Card from './Card';

describe('Card', () => {
  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
  };

  it('renders children correctly', () => {
    renderWithTheme(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders header correctly when provided', () => {
    renderWithTheme(<Card header="Card Title">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders footer correctly when provided', () => {
    renderWithTheme(<Card footer={<span>Card Footer</span>}>Content</Card>);
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('does not render header or footer if not provided', () => {
    renderWithTheme(<Card>Content</Card>);
    expect(screen.queryByText('Card Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Card Footer')).not.toBeInTheDocument();
  });

  it('applies basic styling from theme', () => {
    const { container } = renderWithTheme(<Card>Content</Card>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('background-color: #fff');
    expect(cardElement).toHaveStyle('border-radius: 12px');
  });
});
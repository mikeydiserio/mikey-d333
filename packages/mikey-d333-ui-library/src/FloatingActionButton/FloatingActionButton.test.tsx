import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FloatingActionButton } from './FloatingActionButton';

describe('FloatingActionButton', () => {
  it('renders with children', () => {
    render(<FloatingActionButton onClick={jest.fn()}>+</FloatingActionButton>);
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<FloatingActionButton onClick={handleClick}>Add</FloatingActionButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is accessible via keyboard navigation', () => {
    const handleClick = jest.fn();
    render(<FloatingActionButton onClick={handleClick}>Menu</FloatingActionButton>);
    const fab = screen.getByRole('button', { name: 'Menu' });

    fab.focus();
    expect(fab).toHaveFocus();

    fireEvent.keyDown(fab, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(fab, { key: ' ' }); // Space key
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});

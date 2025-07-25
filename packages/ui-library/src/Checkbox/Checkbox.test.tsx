import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with a label', () => {
    render(<Checkbox checked={false} onChange={jest.fn()} label="Remember me" />);
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
  });

  it('is checked when the checked prop is true', () => {
    render(<Checkbox checked={true} onChange={jest.fn()} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('is not checked when the checked prop is false', () => {
    render(<Checkbox checked={false} onChange={jest.fn()} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange with false when checked and clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={true} onChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('is accessible via keyboard navigation', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} onChange={handleChange} label="Keyboard Check" />);
    const checkbox = screen.getByLabelText('Keyboard Check');

    checkbox.focus();
    expect(checkbox).toHaveFocus();

    fireEvent.keyDown(checkbox, { key: ' ' }); // Space key
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.keyDown(checkbox, { key: 'Enter' }); // Enter key
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});

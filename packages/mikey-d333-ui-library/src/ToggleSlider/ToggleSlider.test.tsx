import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToggleSlider } from './ToggleSlider';

describe('ToggleSlider', () => {
  it('renders with a label', () => {
    render(<ToggleSlider checked={false} onChange={jest.fn()} label="Enable Feature" />);
    expect(screen.getByLabelText('Enable Feature')).toBeInTheDocument();
  });

  it('is checked when the checked prop is true', () => {
    render(<ToggleSlider checked={true} onChange={jest.fn()} />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('is not checked when the checked prop is false', () => {
    render(<ToggleSlider checked={false} onChange={jest.fn()} />);
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<ToggleSlider checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange with false when checked and clicked', () => {
    const handleChange = jest.fn();
    render(<ToggleSlider checked={true} onChange={handleChange} />);
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('is accessible via keyboard navigation', () => {
    const handleChange = jest.fn();
    render(<ToggleSlider checked={false} onChange={handleChange} label="Keyboard Toggle" />);
    const toggle = screen.getByLabelText('Keyboard Toggle');

    toggle.focus();
    expect(toggle).toHaveFocus();

    fireEvent.keyDown(toggle, { key: ' ' }); // Space key
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.keyDown(toggle, { key: 'Enter' }); // Enter key
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});

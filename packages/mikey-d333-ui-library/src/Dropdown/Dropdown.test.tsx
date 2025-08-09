import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it('renders with placeholder text', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} placeholder="Select an item" />);
    expect(screen.getByRole('button', { name: 'Select an item' })).toBeInTheDocument();
  });

  it('opens the dropdown menu when the button is clicked', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('closes the dropdown menu when an option is selected', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(mockOnSelect).toHaveBeenCalledWith(options[0]);
    expect(button).toHaveTextContent('Option 1');
  });

  it('closes the dropdown menu when clicking outside', () => {
    render(
      <div>
        <Dropdown options={options} onSelect={mockOnSelect} />
        <button>Outside Button</button>
      </div>
    );
    const button = screen.getByRole('button', { name: 'Select an option' });
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('navigates options with arrow keys and selects with Enter', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole('button');

    fireEvent.keyDown(button, { key: 'ArrowDown' }); // Open and focus first item
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 1'), { key: 'ArrowDown' }); // Focus second item
    expect(screen.getByText('Option 2')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 2'), { key: 'Enter' }); // Select second item
    expect(mockOnSelect).toHaveBeenCalledWith(options[1]);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(button).toHaveTextContent('Option 2');
  });

  it('navigates options with arrow keys and selects with Space', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole('button');

    fireEvent.keyDown(button, { key: 'ArrowDown' }); // Open and focus first item
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 1'), { key: ' '}); // Select first item
    expect(mockOnSelect).toHaveBeenCalledWith(options[0]);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(button).toHaveTextContent('Option 1');
  });

  it('closes dropdown with Escape key', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(button).toHaveFocus();
  });

  it('cycles focus correctly with arrow keys', () => {
    render(<Dropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole('button');

    fireEvent.keyDown(button, { key: 'ArrowDown' }); // Option 1
    expect(screen.getByText('Option 1')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 1'), { key: 'ArrowDown' }); // Option 2
    expect(screen.getByText('Option 2')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 2'), { key: 'ArrowDown' }); // Option 3
    expect(screen.getByText('Option 3')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 3'), { key: 'ArrowDown' }); // Cycles to Option 1
    expect(screen.getByText('Option 1')).toHaveFocus();

    fireEvent.keyDown(screen.getByText('Option 1'), { key: 'ArrowUp' }); // Cycles to Option 3
    expect(screen.getByText('Option 3')).toHaveFocus();
  });
});

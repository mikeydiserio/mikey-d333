import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with a label and is not checked by default', () => {
    render(
      <RadioButton
        name="test-radio"
        value="option1"
        label="Option 1"
        checked={false}
        onChange={mockOnChange}
      />
    );
    const radio = screen.getByLabelText('Option 1');
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
    expect(radio).toHaveAttribute('type', 'radio');
  });

  it('is checked when the checked prop is true', () => {
    render(
      <RadioButton
        name="test-radio"
        value="option1"
        label="Option 1"
        checked={true}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByLabelText('Option 1')).toBeChecked();
  });

  it('calls onChange with its value when clicked', () => {
    render(
      <RadioButton
        name="test-radio"
        value="optionA"
        label="Option A"
        checked={false}
        onChange={mockOnChange}
      />
    );
    const radio = screen.getByLabelText('Option A');
    fireEvent.click(radio);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('optionA');
  });

  it('does not call onChange when already checked and clicked (standard radio behavior)', () => {
    render(
      <RadioButton
        name="test-radio"
        value="optionB"
        label="Option B"
        checked={true}
        onChange={mockOnChange}
      />
    );
    const radio = screen.getByLabelText('Option B');
    fireEvent.click(radio);
    expect(mockOnChange).not.toHaveBeenCalled(); // Radio buttons don't uncheck themselves
  });

  it('is accessible via keyboard navigation', () => {
    render(
      <RadioButton
        name="test-radio"
        value="optionC"
        label="Option C"
        checked={false}
        onChange={mockOnChange}
      />
    );
    const radio = screen.getByLabelText('Option C');

    radio.focus();
    expect(radio).toHaveFocus();

    fireEvent.keyDown(radio, { key: ' ' }); // Space key
    expect(mockOnChange).toHaveBeenCalledWith('optionC');

    mockOnChange.mockClear();
    fireEvent.keyDown(radio, { key: 'Enter' }); // Enter key
    expect(mockOnChange).not.toHaveBeenCalled(); // Enter key on radio usually just activates, not toggles
  });

  it('handles multiple radio buttons in a group correctly', () => {
    const TestComponent = () => {
      const [selectedValue, setSelectedValue] = React.useState('option1');
      return (
        <div>
          <RadioButton
            name="group1"
            value="option1"
            label="Choice 1"
            checked={selectedValue === 'option1'}
            onChange={setSelectedValue}
          />
          <RadioButton
            name="group1"
            value="option2"
            label="Choice 2"
            checked={selectedValue === 'option2'}
            onChange={setSelectedValue}
          />
        </div>
      );
    };

    render(<TestComponent />);

    const choice1 = screen.getByLabelText('Choice 1');
    const choice2 = screen.getByLabelText('Choice 2');

    expect(choice1).toBeChecked();
    expect(choice2).not.toBeChecked();

    fireEvent.click(choice2);

    expect(choice1).not.toBeChecked();
    expect(choice2).toBeChecked();
  });
});

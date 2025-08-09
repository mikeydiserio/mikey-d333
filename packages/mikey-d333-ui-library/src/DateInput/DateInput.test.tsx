import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  it('renders with initial value', () => {
    render(<DateInput value="12/03/2023" onChange={jest.fn()} />);
    expect(screen.getByDisplayValue('12/03/2023')).toBeInTheDocument();
  });

  it('formats input as user types', () => {
    const handleChange = jest.fn();
    render(<DateInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('DD/MM/YYYY');

    fireEvent.change(input, { target: { value: '1' } });
    expect(handleChange).toHaveBeenCalledWith('1');

    fireEvent.change(input, { target: { value: '12' } });
    expect(handleChange).toHaveBeenCalledWith('12');

    fireEvent.change(input, { target: { value: '120' } });
    expect(handleChange).toHaveBeenCalledWith('12/0');

    fireEvent.change(input, { target: { value: '1203' } });
    expect(handleChange).toHaveBeenCalledWith('12/03');

    fireEvent.change(input, { target: { value: '1203202' } });
    expect(handleChange).toHaveBeenCalledWith('12/03/202');

    fireEvent.change(input, { target: { value: '12032023' } });
    expect(handleChange).toHaveBeenCalledWith('12/03/2023');
  });

  it('shows calendar on input focus', async () => {
    render(<DateInput value="" onChange={jest.fn()} />);
    const input = screen.getByPlaceholderText('DD/MM/YYYY');
    fireEvent.focus(input);
    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  it('hides calendar on click outside', async () => {
    render(
      <div>
        <DateInput value="" onChange={jest.fn()} />
        <button>Outside Button</button>
      </div>
    );
    const input = screen.getByPlaceholderText('DD/MM/YYYY');
    fireEvent.focus(input);
    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    fireEvent.mouseDown(document.body);
    await waitFor(() => {
      expect(screen.queryByRole('grid')).not.toBeInTheDocument();
    });
  });

  it('selects date from calendar and updates input', async () => {
    const handleChange = jest.fn();
    render(<DateInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('DD/MM/YYYY');
    fireEvent.focus(input);

    // Assuming current month is July 2025 for testing purposes
    // Need to mock Date if tests are run on different dates
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    // Click on today's date
    fireEvent.click(screen.getByText(day.toString()));

    const expectedDate = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
    expect(handleChange).toHaveBeenCalledWith(expectedDate);
    await waitFor(() => {
      expect(screen.queryByRole('grid')).not.toBeInTheDocument();
    });
  });

  it('navigates calendar months', async () => {
    render(<DateInput value="" onChange={jest.fn()} />);
    const input = screen.getByPlaceholderText('DD/MM/YYYY');
    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    const prevMonthButton = screen.getByLabelText('Previous Month');
    const nextMonthButton = screen.getByLabelText('Next Month');

    const currentMonthName = new Date().toLocaleString('default', { month: 'long' });
    const prevMonthName = new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('default', { month: 'long' });
    const nextMonthName = new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString('default', { month: 'long' });

    fireEvent.click(prevMonthButton);
    expect(screen.getByText(new RegExp(prevMonthName, 'i'))).toBeInTheDocument();

    fireEvent.click(nextMonthButton);
    fireEvent.click(nextMonthButton);
    expect(screen.getByText(new RegExp(nextMonthName, 'i'))).toBeInTheDocument();
  });
});

import React, { useState, useRef, useEffect, InputHTMLAttributes } from 'react';
import { DateInputWrapper, StyledInput } from './DateInput.styles';
import { Calendar } from './Calendar';

interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  onDateSelect?: (date: Date | null) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ value, onChange, onDateSelect, ...props }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/[^\d]/g, ''); // Remove non-digits

    if (inputValue.length > 8) {
      inputValue = inputValue.substring(0, 8);
    }

    if (inputValue.length > 4) {
      inputValue = inputValue.substring(0, 4) + '/' + inputValue.substring(4);
    }
    if (inputValue.length > 2) {
      inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2);
    }

    onChange(inputValue);
  };

  const handleInputFocus = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    onChange(formattedDate);
    if (onDateSelect) {
      onDateSelect(date);
    }
    setShowCalendar(false);
  };

  const parseDateString = (dateString: string): Date | null => {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      // Check if the parsed date is valid and matches the input (e.g., 31/02/2023 would be invalid)
      if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        return date;
      }
    }
    return null;
  };

  const selectedDate = parseDateString(value);

  return (
    <DateInputWrapper ref={wrapperRef}>
      <StyledInput
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="DD/MM/YYYY"
        maxLength={10}
        ref={inputRef}
        {...props}
      />
      {showCalendar && (
        <Calendar
          selectedDate={selectedDate}
          onSelectDate={handleDateSelect}
        />
      )}
    </DateInputWrapper>
  );
};

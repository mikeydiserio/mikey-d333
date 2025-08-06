import React, { useState } from 'react';
import * as S from './Calendar.styles';

export interface CalendarProps {
  selectedDate?: Date;
  onDateChange?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setCurrentDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const renderDays = () => {
    const days = [];
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <S.CalendarDay
          key={i}
          isSelected={selectedDate?.getDate() === i && selectedDate?.getMonth() === currentDate.getMonth()}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </S.CalendarDay>
      );
    }
    return days;
  };

  return (
    <S.CalendarWrapper>
      <S.CalendarHeader>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>&lt;</button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>&gt;</button>
      </S.CalendarHeader>
      <S.CalendarGrid>{renderDays()}</S.CalendarGrid>
    </S.CalendarWrapper>
  );
};

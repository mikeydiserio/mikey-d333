import React, { useState, useEffect, useRef } from 'react';
import { CalendarWrapper, CalendarHeader, CalendarGrid, CalendarDay, NavButton } from './Calendar.styles';

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate.getMonth());
      setCurrentYear(selectedDate.getFullYear());
    }
  }, [selectedDate]);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(prevYear => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(prevYear => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  };

  const renderDays = () => {
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    dayNames.forEach(day => {
      days.push(<CalendarDay key={day} isHeader>{day}</CalendarDay>);
    });

    for (let i = 0; i < firstDay; i++) {
      days.push(<CalendarDay key={`empty-${i}`} isEmpty />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <CalendarDay
          key={day}
          onClick={() => onSelectDate(date)}
          isSelected={isSelected}
          isToday={isToday}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectDate(date);
            }
          }}
        >
          {day}
        </CalendarDay>
      );
    }
    return days;
  };

  return (
    <CalendarWrapper ref={calendarRef}>
      <CalendarHeader>
        <NavButton onClick={handlePrevMonth} aria-label="Previous Month">&lt;</NavButton>
        <h2>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <NavButton onClick={handleNextMonth} aria-label="Next Month">&gt;</NavButton>
      </CalendarHeader>
      <CalendarGrid role="grid">
        {renderDays()}
      </CalendarGrid>
    </CalendarWrapper>
  );
};

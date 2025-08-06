import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  padding: 16px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const CalendarDay = styled.div<{
  isSelected?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary[500] : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.gray[900]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

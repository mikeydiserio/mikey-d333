import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px;
  font-family: Arial, sans-serif;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
    margin: 0;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #007bff;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
`;

export const CalendarDay = styled.div<{ isHeader?: boolean; isEmpty?: boolean; isSelected?: boolean; isToday?: boolean }>`
  padding: 8px;
  border-radius: 4px;
  cursor: ${props => (props.isEmpty ? 'default' : 'pointer')};
  background-color: ${props => {
    if (props.isSelected) return '#007bff';
    if (props.isToday) return '#e0e0e0';
    return 'transparent';
  }};
  color: ${props => (props.isSelected ? '#fff' : '#333')};
  font-weight: ${props => (props.isHeader || props.isToday) ? 'bold' : 'normal'};
  opacity: ${props => (props.isEmpty ? 0 : 1)};

  &:hover {
    background-color: ${props => (props.isEmpty || props.isSelected) ? '' : '#f0f0f0'};
  }

  &:focus {
    outline: ${props => (props.isEmpty ? 'none' : '2px solid #007bff')};
    outline-offset: 2px;
  }
`;

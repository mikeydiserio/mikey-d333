import styled from 'styled-components';

export const DateInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 120px; /* Adjust as needed */

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

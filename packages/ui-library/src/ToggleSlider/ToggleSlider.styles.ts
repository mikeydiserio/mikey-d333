import styled from 'styled-components';

export const ToggleWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: Arial, sans-serif;

  &:focus-within {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const HiddenToggle = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledToggle = styled.div<{ checked: boolean }>`
  width: 40px;
  height: 20px;
  background-color: ${props => (props.checked ? '#007bff' : '#ccc')};
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.2s;
`;

export const ToggleThumb = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 9999px;
  position: absolute;
  top: 2px;
  left: ${props => (props.checked ? 'calc(100% - 18px)' : '2px')};
  transition: left 0.2s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

export const ToggleLabel = styled.span`
  margin-left: 8px;
`;

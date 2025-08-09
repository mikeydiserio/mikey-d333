import styled from 'styled-components';

export const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: Arial, sans-serif;

  &:focus-within {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
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

export const StyledRadio = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? '#007bff' : '#ccc')};
  background: ${props => (props.checked ? '#007bff' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: all 150ms;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  ${HiddenRadio}:hover + & {
    border-color: #007bff;
  }

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    display: ${props => (props.checked ? 'block' : 'none')};
  }
`;

export const RadioLabel = styled.span`
  margin-left: 4px;
`;

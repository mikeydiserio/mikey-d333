import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: Arial, sans-serif;

  /* Focus outline for keyboard navigation */
  &:focus-within {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers
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

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? '#007bff' : '#fff')};
  border: 2px solid ${props => (props.checked ? '#007bff' : '#ccc')};
  border-radius: 4px;
  transition: all 150ms;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  ${HiddenCheckbox}:hover + & {
    border-color: #007bff;
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  visibility: ${props => (props.checked ? 'visible' : 'hidden')};
`;

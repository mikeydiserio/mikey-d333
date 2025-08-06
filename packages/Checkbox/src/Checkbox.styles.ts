"use client";

import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 8px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but keep it accessible
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
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
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  svg {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    color: white;
    width: 16px;
    height: 16px;
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
  color: #333;
`;
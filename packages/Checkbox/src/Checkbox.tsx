"use client";

import { Check } from 'lucide-react';
import React from 'react';
import { CheckboxContainer, CheckboxLabel, HiddenCheckbox, StyledCheckbox } from './Checkbox.styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} />
      <StyledCheckbox checked={!!props.checked}>
        <Check />
      </StyledCheckbox>
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

export default Checkbox

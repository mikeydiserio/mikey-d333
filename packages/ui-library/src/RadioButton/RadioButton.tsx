import React, { InputHTMLAttributes } from 'react';
import { RadioWrapper, HiddenRadio, StyledRadio, RadioLabel } from './RadioButton.styles';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  value: string;
  name: string; // Name attribute for grouping radio buttons
}

export const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, label, value, name, ...props }) => (
  <RadioWrapper>
    <HiddenRadio
      type="radio"
      checked={checked}
      onChange={() => onChange(value)}
      value={value}
      name={name}
      {...props}
    />
    <StyledRadio checked={checked} />
    <RadioLabel>{label}</RadioLabel>
  </RadioWrapper>
);

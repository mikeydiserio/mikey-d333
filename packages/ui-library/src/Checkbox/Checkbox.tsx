import React, { InputHTMLAttributes } from 'react';
import { CheckboxWrapper, HiddenCheckbox, StyledCheckbox, Icon } from './Checkbox.styles';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, ...props }) => (
  <CheckboxWrapper>
    <HiddenCheckbox
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      {...props}
    />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24" checked={checked}>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    {label && <span>{label}</span>}
  </CheckboxWrapper>
);

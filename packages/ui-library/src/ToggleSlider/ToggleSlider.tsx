import React, { InputHTMLAttributes } from 'react';
import { ToggleWrapper, HiddenToggle, StyledToggle, ToggleThumb, ToggleLabel } from './ToggleSlider.styles';

interface ToggleSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const ToggleSlider: React.FC<ToggleSliderProps> = ({ checked, onChange, label, ...props }) => (
  <ToggleWrapper>
    <HiddenToggle
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      role="switch"
      aria-checked={checked}
      {...props}
    />
    <StyledToggle checked={checked}>
      <ToggleThumb checked={checked} />
    </StyledToggle>
    {label && <ToggleLabel>{label}</ToggleLabel>}
  </ToggleWrapper>
);

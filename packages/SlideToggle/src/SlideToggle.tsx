import React, { useState } from 'react';
import * as S from './SlideToggle.styles';

export interface SlideToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const SlideToggle: React.FC<SlideToggleProps> = ({ checked: defaultChecked = false, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <S.SlideToggleWrapper role="button" checked={checked} onClick={handleChange}>
      <S.SlideToggleKnob checked={checked} />
    </S.SlideToggleWrapper>
  );
};
import React from 'react';
import * as S from './Radio.styles';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, ...props }, ref) => {
    return (
      <S.RadioLabel>
        <S.RadioInput type="radio" ref={ref} {...props} />
        <S.RadioMark />
        {label}
      </S.RadioLabel>
    );
  }
);

RadioButton.displayName = 'RadioButton';

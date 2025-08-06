import React from 'react';
import * as S from './Radio.styles';

export interface RadioGroupProps {
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, selectedValue, onChange, children }) => {
  return (
    <S.RadioGroupWrapper role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const radioChild = child as React.ReactElement<React.InputHTMLAttributes<HTMLInputElement> & { value: string }>;
          return React.cloneElement(radioChild, {
            name,
            checked: radioChild.props.value === selectedValue,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
          });
        }
        return child;
      })}
    </S.RadioGroupWrapper>
  );
};
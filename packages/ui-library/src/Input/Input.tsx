'use client';
import * as S from './Input.styles';

export interface InputProps {
  type: string
  id: string
  placeholder: string
  autoComplete: boolean
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = (
  {type, id, placeholder, autoComplete, value, onChange, onFocus, onBlur}: InputProps
)   => {
  return (
    <S.InputWrapper>
      <label>Input Label</label>
      <input id={id} autoComplete={autoComplete ? 'additional-name' : 'off'} type={type} value={value} placeholder={placeholder} onBlur={onBlur} onFocus={onFocus} onChange={onChange}/>
    </S.InputWrapper>
  );
}

export default Input;
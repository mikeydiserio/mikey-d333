import React from 'react';
import * as S from './Spinner.styles';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium' }) => {
  return <S.SpinnerWrapper size={size} aria-label="Loading" />;
};

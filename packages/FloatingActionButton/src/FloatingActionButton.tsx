import React from 'react';
import * as S from './FloatingActionButton.styles';
import { ButtonProps } from '../Button/Button'; // Corrected import path for ButtonProps

export interface FloatingActionButtonProps extends ButtonProps {
  // No new props needed yet
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ children, ...props }) => {
  return <S.FloatingActionButtonWrapper {...props}>{children}</S.FloatingActionButtonWrapper>;
};
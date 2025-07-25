import React, { ButtonHTMLAttributes } from 'react';
import * as S from './FloatingActionButton.styles';

interface FloatingActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <S.FabButton onClick={onClick} {...props}>
      {children}
    </S.FabButton>
  );
};

import React from 'react';
import * as S from './MiniHeroBanner.styles';

export interface MiniHeroBannerProps {
  title: string;
}

export const MiniHeroBanner: React.FC<MiniHeroBannerProps> = ({ title }) => {
  return (
    <S.MiniHeroBannerWrapper>
      <h1>{title}</h1>
    </S.MiniHeroBannerWrapper>
  );
};

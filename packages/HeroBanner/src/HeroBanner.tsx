import React from 'react';
import * as S from './HeroBanner.styles';

export interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <S.HeroBannerWrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <S.HeroBannerContent>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </S.HeroBannerContent>
    </S.HeroBannerWrapper>
  );
};

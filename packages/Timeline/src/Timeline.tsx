import React from 'react';
import * as S from './Timeline.styles';

export interface TimelineItemProps {
  title: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ title, description }) => {
  return (
    <S.TimelineItemWrapper>
      <S.TimelineItemDot />
      <S.TimelineItemContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.TimelineItemContent>
    </S.TimelineItemWrapper>
  );
};

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => { // Added children type
  return <S.TimelineWrapper>{children}</S.TimelineWrapper>;
};
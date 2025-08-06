import React, { useState } from 'react';
import * as S from './Tabs.styles';

export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <S.TabsWrapper>
      <S.TabList>
        {children.map((tab, index) => (
          <S.TabButton
            key={tab.props.label}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {tab.props.label}
          </S.TabButton>
        ))}
      </S.TabList>
      <S.TabContent>{children[activeIndex]}</S.TabContent>
    </S.TabsWrapper>
  );
};

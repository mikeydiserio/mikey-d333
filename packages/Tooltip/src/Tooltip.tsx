import React from 'react';
import * as S from './Tooltip.styles';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, delay = 500 }) => {
  const [visible, setVisible] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null); // Initialized with null

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current!); // Use non-null assertion as it's set on mouse enter
    setVisible(false);
  };

  return (
    <S.TooltipWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && <S.TooltipContent>{content}</S.TooltipContent>}
    </S.TooltipWrapper>
  );
};
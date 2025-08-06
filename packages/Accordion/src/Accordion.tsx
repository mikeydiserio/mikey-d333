import React, { useState } from 'react';
import * as S from './Accordion.styles';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.AccordionWrapper>
      <S.AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        <S.AccordionIcon isOpen={isOpen} />
      </S.AccordionHeader>
      {isOpen && <S.AccordionContent>{children}</S.AccordionContent>}
    </S.AccordionWrapper>
  );
};

export default Accordion

import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const AccordionIcon = styled.span<{
  isOpen: boolean;
}>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const AccordionContent = styled.div`
  padding: 16px;
`;

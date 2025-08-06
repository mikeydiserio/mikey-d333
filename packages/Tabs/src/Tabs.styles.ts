import styled from 'styled-components';

export const TabsWrapper = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const TabButton = styled.button<{
  isActive: boolean;
}>`
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary[500] : theme.colors.gray[600]};
  border-bottom: 2px solid
    ${({ isActive, theme }) => (isActive ? theme.colors.primary[500] : 'transparent')};
  margin-bottom: -1px;
`;

export const TabContent = styled.div`
  padding: 24px;
`;

import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  span {
    margin: 0 1rem;
  }
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

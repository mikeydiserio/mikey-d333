import styled from 'styled-components';

export const MiniHeroBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;

  h1 {
    font-size: 2rem;
  }
`;

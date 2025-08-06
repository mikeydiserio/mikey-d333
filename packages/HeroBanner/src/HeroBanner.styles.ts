import styled from 'styled-components';

export const HeroBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

export const HeroBannerContent = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

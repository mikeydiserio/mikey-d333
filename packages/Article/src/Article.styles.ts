import styled from 'styled-components';

export const ArticleWrapper = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ArticleHeader = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const ArticleContent = styled.div`
  line-height: 1.6;
`;

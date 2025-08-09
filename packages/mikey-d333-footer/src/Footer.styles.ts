import styled from 'styled-components';

export const Footer = styled.footer`
  text-align: center;
  padding: 40px 0;
  color: var(--gray);
  font-size: 14px;
  border-top: 1px solid var(--gray-light);
  margin-top: 50px;
`;

export const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    color: var(--gray);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
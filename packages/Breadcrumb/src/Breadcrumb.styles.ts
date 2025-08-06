import styled from 'styled-components';

export const BreadcrumbNav = styled.nav``;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

export const BreadcrumbLink = styled.a`
  color: ${({ theme }) => theme.colors.primary[500]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.gray[400]};

  &::after {
    content: '/';
  }
`;

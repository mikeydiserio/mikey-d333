import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: left;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

export const DropdownItem = styled.div`
  display: block;
  width: 100%;
  padding: 0.5rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const ProgressBar = styled.div<{
  progress: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ progress }) => progress}%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  z-index: 9999;
`;

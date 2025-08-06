import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from './Spinner';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const sizes = {
  small: '16px',
  medium: '32px',
  large: '64px',
};

export const SpinnerWrapper = styled.div<SpinnerProps>`
  border: 4px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: 4px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 50%;
  width: ${({ size }) => sizes[size || 'medium']};
  height: ${({ size }) => sizes[size || 'medium']};
  animation: ${spin} 1s linear infinite;
`;

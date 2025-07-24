import styled from 'styled-components';

export const LoadingWrapper = styled.div<{ size?: string }>`
  text-align: center;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '10px';
      case 'medium':
        return '30px';
      case 'large':
        return '60px';
      default:
        return '30px';
    }
  }};
  color: #6b7280;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #f3f4f6;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
`;
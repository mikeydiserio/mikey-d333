import styled from 'styled-components';

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioMark = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 50%;
  transition: border-color 0.2s;

  ${RadioInput}:checked + & {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary[500]};
    transition: transform 0.2s;
  }

  ${RadioInput}:checked + &::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

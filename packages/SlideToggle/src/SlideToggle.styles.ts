import styled from 'styled-components';

export const SlideToggleWrapper = styled.div<{
  checked: boolean;
}>`
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary[500] : theme.colors.gray[300]};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

export const SlideToggleKnob = styled.div<{ checked: boolean }>` // Added checked prop
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '18px' : '2px')};
  transition: left 0.2s ease-in-out;
`;
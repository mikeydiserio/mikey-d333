import styled from 'styled-components';
import { Button } from '../Button';

export const FloatingActionButtonWrapper = styled(Button)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

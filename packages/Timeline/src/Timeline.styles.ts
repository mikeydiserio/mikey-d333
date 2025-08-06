import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const TimelineItemWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const TimelineItemDot = styled.div`
  position: absolute;
  top: 5px;
  left: -25px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;

export const TimelineItemContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

"use client";

import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

export const CardContent = styled.div`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;
"use client";

import styled from 'styled-components';

export const StyledButton = styled.button<{ $variant: 'primary' | 'secondary' | 'danger' | 'ghost'; $fullWidth?: boolean; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
  white-space: nowrap;
  ${props => props.$fullWidth && 'width: 100%;'}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: #007bff;
          color: white;
          border: 1px solid #007bff;
          &:hover:not(:disabled) {
            background-color: #0056b3;
            border-color: #0056b3;
          }
        `;
      case 'secondary':
        return `
          background-color: #6c757d;
          color: white;
          border: 1px solid #6c757d;
          &:hover:not(:disabled) {
            background-color: #5a6268;
            border-color: #545b62;
          }
        `;
      case 'danger':
        return `
          background-color: #dc3545;
          color: white;
          border: 1px solid #dc3545;
          &:hover:not(:disabled) {
            background-color: #c82333;
            border-color: #bd2130;
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: #007bff;
          border: 1px solid transparent;
          &:hover:not(:disabled) {
            background-color: rgba(0, 123, 255, 0.1);
            color: #0056b3;
          }
        `;
      default:
        return '';
    }
  }}
`;
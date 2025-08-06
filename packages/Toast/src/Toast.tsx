"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ToastContainer = styled.div<{ type: 'success' | 'error' | 'info' | 'loading', isExiting: boolean }>`
  background-color: ${props => {
    switch (props.type) {
      case 'success': return '#4CAF50';
      case 'error': return '#F44336';
      case 'info': return '#2196F3';
      case 'loading': return '#FFC107';
      default: return '#333';
    }
  }};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  animation: ${props => props.isExiting ? fadeOut : fadeIn} 0.3s ease-out forwards;
`;

const Message = styled.span`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 500;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 15px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;

interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'loading';
  onClose: (id: string) => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ id, message, type, onClose, duration = 3000 }) => {
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    if (type !== 'loading') {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => onClose(id), 300); // Match fadeOut duration
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose, type]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose(id), 300); // Match fadeOut duration
  };

  return (
    <ToastContainer type={type} isExiting={isExiting}>
      <Message>{message}</Message>
      {type !== 'loading' && (
        <CloseButton onClick={handleClose}>
          <X size={16} />
        </CloseButton>
      )}
    </ToastContainer>
  );
};

export default Toast;
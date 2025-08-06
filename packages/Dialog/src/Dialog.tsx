"use client";

import React from 'react';
import { X } from 'lucide-react';
import { Overlay, DialogContent, DialogHeader, DialogTitle, CloseButton, DialogBody, DialogFooter } from './Dialog.styles';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose} data-testid="overlay">
      <DialogContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <CloseButton onClick={onClose} aria-label="Close">
            <X size={24} />
          </CloseButton>
        </DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Overlay>
  );
};
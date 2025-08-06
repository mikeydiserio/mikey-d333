import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { Modal } from './Modal';
import { Button } from '../Button';
import { describe, it, expect } from 'vitest';

describe('Modal', () => {
  it('opens and closes the modal', () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <ThemeProvider theme={theme}>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <p>Modal Content</p>
          </Modal>
        </ThemeProvider>
      );
    };

    render(<TestComponent />);

    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Open Modal'));

    expect(screen.getByText('Modal Content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('×'));

    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });
});
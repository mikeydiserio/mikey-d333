import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  const defaultProps = {
    onClick: vi.fn(),
    children: 'Click me',
    disabled: false
  };
  // Basic rendering tests
  describe('Basic Rendering', () => {
    test('should render button with text', () => {
      render(<Button {...defaultProps}>Click me</Button>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    test('should render button with custom className', () => {
      render(<Button {...defaultProps} className="custom-button">Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-button');
    });

    test('should render disabled button', () => {
      render(<Button {...defaultProps} disabled={true}>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    test('should render with different button types', () => {
      render(<Button {...defaultProps} type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });
});

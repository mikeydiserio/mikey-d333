import { render, screen } from '@testing-library/react';
import Loading, { LoadingSpinner, InlineSpinner, LoadingOverlay } from './Loading';

describe('Loading Components', () => {
  describe('LoadingSpinner', () => {
    test('should render with default message and size', () => {
      render(<LoadingSpinner />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(screen.getByText('Loading...').parentElement).toHaveStyle('padding: 30px');
    });

    test('should render with a custom message', () => {
      render(<LoadingSpinner message="Please wait" />);
      expect(screen.getByText('Please wait')).toBeInTheDocument();
    });

    test('should render with a different size', () => {
      const { container } = render(<LoadingSpinner size="large" />);
      expect(container.firstChild).toHaveStyle('padding: 60px');
    });
  });

  describe('Loading', () => {
    test('should render with default message and size', () => {
      render(<Loading />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(screen.getByText('Loading...').parentElement).toHaveStyle('padding: 30px');
    });
  });

  describe('InlineSpinner', () => {
    test('should render with default size', () => {
      const { container } = render(<InlineSpinner />);
      expect(container.firstChild).toHaveStyle('padding: 10px');
    });

    test('should render with a different size', () => {
      const { container } = render(<InlineSpinner size="medium" />);
      expect(container.firstChild).toHaveStyle('padding: 30px');
    });
  });

  describe('LoadingOverlay', () => {
    test('should render with default message', () => {
      render(<LoadingOverlay />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(screen.getByText('Loading...').parentElement).toHaveStyle('padding: 30px');
    });

    test('should render with a custom message', () => {
      render(<LoadingOverlay message="Submitting..." />);
      expect(screen.getByText('Submitting...')).toBeInTheDocument();
    });
  });
});
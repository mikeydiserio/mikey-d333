import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Toast from './Toast';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/theme';

describe('Toast', () => {
  const mockOnClose = vi.fn();
  const toastId = 'test-toast-id';

  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers(); // Use fake timers for setTimeout
  });

  afterEach(() => {
    vi.useRealTimers(); // Restore real timers
  });

  it('renders the message correctly', () => {
    renderWithTheme(<Toast id={toastId} message="Hello Toast!" type="info" onClose={mockOnClose} />);
    expect(screen.getByText('Hello Toast!')).toBeInTheDocument();
  });

  it('renders with correct background color for success type', () => {
    renderWithTheme(<Toast id={toastId} message="Success!" type="success" onClose={mockOnClose} />);
    expect(screen.getByText('Success!').closest('div')).toHaveStyle('background-color: #4CAF50');
  });

  it('renders with correct background color for error type', () => {
    renderWithTheme(<Toast id={toastId} message="Error!" type="error" onClose={mockOnClose} />);
    expect(screen.getByText('Error!').closest('div')).toHaveStyle('background-color: #F44336');
  });

  it('renders with correct background color for info type', () => {
    renderWithTheme(<Toast id={toastId} message="Info!" type="info" onClose={mockOnClose} />);
    expect(screen.getByText('Info!').closest('div')).toHaveStyle('background-color: #2196F3');
  });

  it('renders with correct background color for loading type', () => {
    renderWithTheme(<Toast id={toastId} message="Loading..." type="loading" onClose={mockOnClose} />);
    expect(screen.getByText('Loading...').closest('div')).toHaveStyle('background-color: #FFC107');
  });

  it('calls onClose after duration for non-loading toasts', async () => {
    renderWithTheme(<Toast id={toastId} message="Auto-dismiss" type="info" onClose={mockOnClose} duration={1000} />);
    vi.advanceTimersByTime(1000); // Advance by duration
    vi.advanceTimersByTime(300); // Advance by fadeOut duration
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalledWith(toastId);
    });
  });

  it('does not call onClose automatically for loading toasts', () => {
    renderWithTheme(<Toast id={toastId} message="Loading..." type="loading" onClose={mockOnClose} duration={1000} />);
    vi.advanceTimersByTime(5000); // Advance well past duration
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('calls onClose when close button is clicked for non-loading toasts', async () => {
    renderWithTheme(<Toast id={toastId} message="Closable" type="success" onClose={mockOnClose} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    vi.advanceTimersByTime(300); // Advance by fadeOut duration
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalledWith(toastId);
    });
  });

  it('does not render close button for loading toasts', () => {
    renderWithTheme(<Toast id={toastId} message="Loading..." type="loading" onClose={mockOnClose} />);
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/theme';
import { Dialog } from './Dialog'; // Changed to named import

describe('Dialog', () => {
  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
  };

  it('does not render when isOpen is false', () => {
    renderWithTheme(
      <Dialog isOpen={false} onClose={() => {}} title="Test Dialog">
        Dialog Content
      </Dialog>
    );
    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
    expect(screen.queryByText('Dialog Content')).not.toBeInTheDocument();
  });

  it('renders when isOpen is true', () => {
    renderWithTheme(
      <Dialog isOpen={true} onClose={() => {}} title="Test Dialog">
        Dialog Content
      </Dialog>
    );
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Dialog isOpen={true} onClose={handleClose} title="Test Dialog">
        Dialog Content
      </Dialog>
    );
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Dialog isOpen={true} onClose={handleClose} title="Test Dialog">
        Dialog Content
      </Dialog>
    );
    fireEvent.click(screen.getByTestId('overlay')); // Assuming Overlay has data-testid="overlay"
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when dialog content is clicked', () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Dialog isOpen={true} onClose={handleClose} title="Test Dialog">
        Dialog Content
      </Dialog>
    );
    fireEvent.click(screen.getByText('Dialog Content'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders footer correctly when provided', () => {
    renderWithTheme(
      <Dialog isOpen={true} onClose={() => {}} title="Test Dialog" footer={<span>Dialog Footer</span>}>
        Dialog Content
      </Dialog>
    );
    expect(screen.getByText('Dialog Footer')).toBeInTheDocument();
  });

  it('does not render footer if not provided', () => {
    renderWithTheme(
      <Dialog isOpen={true} onClose={() => {}} title="Test Dialog">
        Dialog Content
      </Dialog>
    );
    expect(screen.queryByText('Dialog Footer')).not.toBeInTheDocument();
  });
});
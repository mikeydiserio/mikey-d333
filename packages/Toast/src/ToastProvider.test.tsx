import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { ToastProvider, useToast } from './ToastProvider';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/theme';

// Helper component to use the toast hook
const TestComponent = () => {
  const { showToast, dismissToast } = useToast();
  return (
    <div>
      <button onClick={() => showToast('Success message', 'success', 100)}>Show Success</button>
      <button onClick={() => showToast('Error message', 'error', 100)}>Show Error</button>
      <button onClick={() => showToast('Loading message', 'loading')}>Show Loading</button>
      <button onClick={() => dismissToast('non-existent-id')}>Dismiss Non-Existent</button>
    </div>
  );
};

describe('ToastProvider', () => {
  const renderWithThemeAndProvider = (component: React.ReactNode) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <ToastProvider>
          {component}
        </ToastProvider>
      </ThemeProvider>
    );
  };

  beforeEach(() => {
    vi.useFakeTimers(); // Use fake timers for setTimeout in Toast component
  });

  afterEach(() => {
    vi.useRealTimers(); // Restore real timers
  });

  it('provides showToast and dismissToast functions', () => {
    let showToast: any;
    let dismissToast: any;

    renderWithThemeAndProvider(
      <TestComponent />
    );

    // Access the functions via the context
    const { result } = renderHook(() => useToast());
    showToast = result.current.showToast;
    dismissToast = result.current.dismissToast;

    expect(typeof showToast).toBe('function');
    expect(typeof dismissToast).toBe('function');
  });

  it('displays a success toast when showToast is called', async () => {
    renderWithThemeAndProvider(<TestComponent />);
    act(() => {
      screen.getByText('Show Success').click();
    });
    expect(screen.getByText('Success message')).toBeInTheDocument();
    expect(screen.getByText('Success message').closest('div')).toHaveStyle('background-color: #4CAF50');
  });

  it('displays an error toast when showToast is called', async () => {
    renderWithThemeAndProvider(<TestComponent />);
    act(() => {
      screen.getByText('Show Error').click();
    });
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.getByText('Error message').closest('div')).toHaveStyle('background-color: #F44336');
  });

  it('displays a loading toast when showToast is called', async () => {
    renderWithThemeAndProvider(<TestComponent />);
    act(() => {
      screen.getByText('Show Loading').click();
    });
    expect(screen.getByText('Loading message')).toBeInTheDocument();
    expect(screen.getByText('Loading message').closest('div')).toHaveStyle('background-color: #FFC107');
  });

  it('dismisses a toast when dismissToast is called', async () => {
    renderWithThemeAndProvider(<TestComponent />);
    let toastId: string | undefined;
    act(() => {
      const { result } = renderHook(() => useToast());
      toastId = result.current.showToast('Dismissible message', 'info');
    });

    expect(screen.getByText('Dismissible message')).toBeInTheDocument();

    act(() => {
      const { result } = renderHook(() => useToast());
      if (toastId) result.current.dismissToast(toastId);
    });

    await waitFor(() => {
      expect(screen.queryByText('Dismissible message')).not.toBeInTheDocument();
    });
  });

  it('automatically dismisses non-loading toasts after duration', async () => {
    renderWithThemeAndProvider(<TestComponent />);
    act(() => {
      screen.getByText('Show Success').click();
    });
    expect(screen.getByText('Success message')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(100); // Advance by toast duration
      vi.advanceTimersByTime(300); // Advance by fadeOut duration
    });

    await waitFor(() => {
      expect(screen.queryByText('Success message')).not.toBeInTheDocument();
    });
  });

  it('does not automatically dismiss loading toasts', async () => {
    renderWithThemeAndProvider(<TestComponent />);
    act(() => {
      screen.getByText('Show Loading').click();
    });
    expect(screen.getByText('Loading message')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(5000); // Advance well past typical duration
    });

    expect(screen.getByText('Loading message')).toBeInTheDocument(); // Still present
  });

  it('throws error if useToast is used outside ToastProvider', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console error

    expect(() => render(<button onClick={() => useToast().showToast('test')}>Test</button>)).toThrow('useToast must be used within a ToastProvider');
    consoleErrorSpy.mockRestore();
  });
});

// Helper to render hooks for testing
function renderHook<T>(callback: () => T) {
  let result: T;
  render(
    <ToastProvider>
      <HookWrapper callback={callback} setResult={(val) => (result = val)} />
    </ToastProvider>
  );
  return { result: { current: result! } };
}

interface HookWrapperProps<T> {
  callback: () => T;
  setResult: (value: T) => void;
}

const HookWrapper = <T,>({ callback, setResult }: HookWrapperProps<T>) => {
  setResult(callback());
  return null;
};
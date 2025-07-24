import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Header from './Header';

const defaultProps = {
  searchTerm: '',
  setSearchTerm: vi.fn(),
  hints: ['Technology', 'Healthcare', 'Construction', 'Sydney', 'ABN number'],
};

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render without crashing', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText('AU Business Finder')).toBeInTheDocument();
    expect(
      screen.getByText('Australian Companies Register'),
    ).toBeInTheDocument();
  });

  test('should render navigation menu', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('should have proper semantic structure', () => {
    render(<Header {...defaultProps} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('should render hints when a valid list of hints is provided', () => {
    render(<Header {...defaultProps} />);
    defaultProps.hints.forEach(hint => {
      expect(screen.getByText(hint)).toBeInTheDocument();
    });
  });

  test('should call setSearchTerm when a hint is clicked', () => {
    render(<Header {...defaultProps} />);
    const hintPill = screen.getByText('Technology');
    fireEvent.click(hintPill);
    expect(defaultProps.setSearchTerm).toHaveBeenCalledWith('Technology');
  });

  test('should call setSearchTerm when search bar value changes', () => {
    vi.useFakeTimers();
    render(<Header {...defaultProps} />);
    const searchBar = screen.getByPlaceholderText(
      'Search company name, ABN, industry, location...',
    );
    fireEvent.change(searchBar, { target: { value: 'New Search Term' } });

    vi.advanceTimersByTime(300);

    expect(defaultProps.setSearchTerm).toHaveBeenCalledWith('New Search Term');
    vi.useRealTimers();
  });
});


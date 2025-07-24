import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('should render without crashing', () => {
    render(<Footer />);
    expect(screen.getByText('© mikey diserio 2025')).toBeInTheDocument();
  });

  test('should have proper semantic structure', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('should render social media links', () => {
    render(<Footer />);
    expect(screen.getByText('Github')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });
});

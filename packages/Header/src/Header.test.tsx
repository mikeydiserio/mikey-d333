import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    // Replace 'Header Title' with actual text in your Header component
    expect(screen.getByText(/Header/i)).toBeInTheDocument();
  });
});

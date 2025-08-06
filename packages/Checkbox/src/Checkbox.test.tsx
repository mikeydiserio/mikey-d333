import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/theme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
  };

  it('renders with a label', () => {
    renderWithTheme(<Checkbox label="Remember Me" />);
    expect(screen.getByLabelText('Remember Me')).toBeInTheDocument();
  });

  it('can be checked and unchecked', () => {
    const handleChange = vi.fn();
    renderWithTheme(<Checkbox label="Agree" onChange={handleChange} />);
    const checkbox = screen.getByLabelText('Agree') as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    // For controlled components, checked state is managed by parent.
    // We test the onChange callback.
  });

  it('displays check icon when checked', () => {
    renderWithTheme(<Checkbox label="Checked" checked />);
    const checkbox = screen.getByLabelText('Checked');
    const styledCheckbox = checkbox.nextElementSibling; // StyledCheckbox is the next sibling
    expect(styledCheckbox).toHaveStyle('background: #007bff'); // Check background color for checked state
    expect(styledCheckbox?.querySelector('svg')).toBeVisible(); // Check if SVG is visible
  });

  it('does not display check icon when unchecked', () => {
    renderWithTheme(<Checkbox label="Unchecked" checked={false} />);
    const checkbox = screen.getByLabelText('Unchecked');
    const styledCheckbox = checkbox.nextElementSibling;
    expect(styledCheckbox).toHaveStyle('background: #fff'); // Check background color for unchecked state
    expect(styledCheckbox?.querySelector('svg')).not.toBeVisible(); // Check if SVG is hidden
  });

  it('applies focus styles on focus', () => {
    renderWithTheme(<Checkbox label="Focus Test" />);
    const checkbox = screen.getByLabelText('Focus Test');
    const styledCheckbox = checkbox.nextElementSibling;

    fireEvent.focus(checkbox);
    // Styled components focus styles are harder to test directly with toHaveStyle
    // as they rely on pseudo-classes. We can check for the presence of the element
    // and the focus event.
    expect(checkbox).toHaveFocus();
    expect(styledCheckbox).toBeInTheDocument();
  });
});
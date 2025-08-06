import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';
import { lightTheme as theme } from '../../theme/theme';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const menuItems = [
    { label: 'Item 1', onClick: vi.fn() },
    { label: 'Item 2', onClick: vi.fn() },
  ];

  it('opens and closes the dropdown', () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown trigger={<Button>Open</Button>} menuItems={menuItems} />
      </ThemeProvider>
    );

    const trigger = screen.getByRole('button', { name: /open/i });
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByText('Item 1')).toBeInTheDocument();

    fireEvent.click(document);
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('handles keyboard navigation', () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown trigger={<Button>Open</Button>} menuItems={menuItems} />
      </ThemeProvider>
    );

    const trigger = screen.getByRole('button', { name: /open/i });
    fireEvent.click(trigger);

    fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(screen.getByText('Item 1')).toHaveFocus();

    fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(screen.getByText('Item 2')).toHaveFocus();

    fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' });
    expect(menuItems[1].onClick).toHaveBeenCalled();
  });
});

import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme as theme } from '../../theme/theme'; // Changed to lightTheme
import { RadioGroup } from './RadioGroup';
import { RadioButton } from './RadioButton';
import { describe, it, expect, vi } from 'vitest';

describe('RadioGroup', () => {
  it('selects the correct radio button', () => {
    const TestComponent = () => {
      const [value, setValue] = useState('2');
      return (
        <ThemeProvider theme={theme}>
          <RadioGroup name="test" selectedValue={value} onChange={setValue}>
            <RadioButton label="Option 1" value="1" />
            <RadioButton label="Option 2" value="2" />
          </RadioGroup>
        </ThemeProvider>
      );
    };

    render(<TestComponent />);

    const radio1 = screen.getByLabelText('Option 1');
    const radio2 = screen.getByLabelText('Option 2');

    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();

    fireEvent.click(radio1);

    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
  });
});
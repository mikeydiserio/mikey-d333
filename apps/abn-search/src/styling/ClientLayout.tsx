"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from './theme/theme';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
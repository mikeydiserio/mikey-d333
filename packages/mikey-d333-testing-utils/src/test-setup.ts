import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import { lightTheme } from "@mikeyd333/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

function AllProviders({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

configure({ wrapper: AllProviders });

// Optional helper to switch themes per-test:
// render(ui, { wrapper: withTheme(darkTheme) })
export function withTheme(theme: unknown) {
  return function Wrapper({ children }: React.PropsWithChildren) {
    return <ThemeProvider theme={theme as any}>{children}</ThemeProvider>;
  };
}

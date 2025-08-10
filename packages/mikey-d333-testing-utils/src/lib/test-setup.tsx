import { lightTheme } from "@mikey-d333/theme";
import "@testing-library/jest-dom";
import { JSX } from "react";
import { vi } from "vitest";
// Important: this file must be .tsx because it contains JSX

vi.mock("@testing-library/react", async (importOriginal) => {
  const rtl = await importOriginal<
    typeof import("@testing-library/react")
  >();

  const { ThemeProvider } = await import("styled-components");

  const AllProviders = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
  }
  const wrappedRender = (ui: React.ReactElement, options: any = {}) => {
    const wrapper = options.wrapper ?? AllProviders;
    return rtl.render(ui, { ...options, wrapper });
  };

  return {
    ...rtl,
    render: wrappedRender,
  };
});

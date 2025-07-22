/* eslint-disable @typescript-eslint/no-explicit-any */
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

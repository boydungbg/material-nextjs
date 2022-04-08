import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@mui/system';
import { createTheme } from "@mui/material";


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  let theme = createTheme({
    breakpoints: {
      values: {
        mobile: 768,
        tablet: 1024,
        desktop: 1200,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>

  );
}

export default MyApp;

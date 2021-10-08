import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="className">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

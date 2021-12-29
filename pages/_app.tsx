import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { LIGHT_THEME, DARK_THEME } from "../constants";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>(LIGHT_THEME);

  const changeTheme = () => {
    if (theme === LIGHT_THEME) {
      setTheme(DARK_THEME);
      localStorage.setItem("theme", DARK_THEME);
    } else {
      setTheme(LIGHT_THEME);
      localStorage.setItem("theme", LIGHT_THEME);
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} theme={theme} changeTheme={changeTheme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

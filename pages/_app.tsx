import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { LIGHT_THEME, DARK_THEME } from "../constants";
import { DefaultSeo } from "next-seo";
import { MainSEO } from "../next-seo.config";
import Script from "next/script";
import * as gtag from "../gtag";

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
      <DefaultSeo {...MainSEO} />
      <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} theme={theme} changeTheme={changeTheme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

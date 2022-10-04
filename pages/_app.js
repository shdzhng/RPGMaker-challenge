import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

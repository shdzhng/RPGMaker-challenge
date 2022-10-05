import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect, createContext } from 'react';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import Navbar from '../components/Navbar';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState({
    name: null,
    class: null,
    birthday: null,
  });

  useEffect(() => {
    const checkBrowserColorScheme = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        console.log('default darktheme detected, changed theme to dark');
      }
    };

    setTimeout(() => {
      checkBrowserColorScheme();
    }, 500);

    const handleEvent = (event) => {
      const colorScheme = event.matches ? 'dark' : 'light';
      setTheme(colorScheme); // "dark" or "light"
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleEvent);

    return () => window.removeEventListener('change', handleEvent);
  }, []);

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <UserContext.Provider value={[data, setData]}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;

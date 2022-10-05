import { ThemeProvider } from 'styled-components';
import React, { useState, useContext, createContext } from 'react';
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

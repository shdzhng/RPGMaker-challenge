import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  text: '#3D405B',
  accent: '#E07A5F',
  background: {
    primary: '#F4F1DE',
    secondary: '#81B29A',
  },
};

export const darkTheme = {
  text: '#F4F1DE',
  accent: '#E9C46A',
  background: { primary: '#264653', secondary: '#3D405B' },
};

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin:0;
}

html,
body {
  padding: 0;
  margin: 0;
}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }

  span{background-color: ${({ theme }) => theme.accent}}

a {
  color: inherit;
  text-decoration: none;
}

  h1{
     color: ${({ theme }) => theme.text};
  }
`;

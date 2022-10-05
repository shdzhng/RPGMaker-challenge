import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

export const lightTheme = {
  text: {
    primary: '#3D405B',
    secondary: '#F4F1DE',
  },
  accent: '#E07A5F',
  background: {
    primary: '#F4F1DE',
    secondary: '#81B29A',
    contrast: '#264653',
    accent: '#e9c46a',
  },
  disabled: '#9a9a9a',
};

export const darkTheme = {
  text: { primary: '#F4F1DE', secondary: '#fefae0' },
  accent: '#E9C46A',
  background: {
    primary: '#264653',
    secondary: '#2A9D8F',
    contrast: '#F4F1DE',
    accent: '#E07A5F',
  },
  disabled: '#9a9a9a',
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
    color: ${({ theme }) => theme.text.primary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    @media (${breakpoints.device.sm}) {
      font-size: 0.9rem;
    }
    @media (${breakpoints.device.xs}) {
      font-size: 0.8rem;
    }
  }


  button:focus{
    outline:0;
  }

  span{
    color: ${({ theme }) => theme.accent};

  }

  fieldset{
    border:none;
  }

a {
  color: inherit;
  text-decoration: none;
}


  h1{
     color: ${({ theme }) => theme.text.primary};
  }
`;

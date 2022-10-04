import React from 'react';
import styled from 'styled-components';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavBar>
      <NavContainer>
        <h2>🧙🏻‍♂️ RPG Character Maker </h2> ⚔️
        <ThemeButton onClick={toggleTheme}>
          {theme === 'light' ? 'toggle to darkmode' : 'toggle to lightmode'}
        </ThemeButton>
      </NavContainer>
    </NavBar>
  );
};

const NavBar = styled.nav`
  height: 5vh;
  display: fixed;
  top: 0;
  width: 100vw;
  margin: 0;
  background-color: ${({ theme }) => theme.background.secondary};
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    flex-basis: 2;
  }
`;

const ThemeButton = styled.button`
  padding: 0;
  border: none;
`;

export default Navbar;

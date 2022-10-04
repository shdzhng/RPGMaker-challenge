import React from 'react';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavBar>
      <NavContainer>
        <h2>🧙🏻‍♂️ RPG Character Maker ⚔️</h2>
        <ThemeButton currentTheme={theme} onClick={toggleTheme}></ThemeButton>
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
  padding: 0 1rem;
  position: relative;

  h2 {
    text-align: center;
  }
`;

const ThemeButton = styled.button`
  right: 10px;
  padding: 8px;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  border: none;
  position: relative;
  background-color: ${({ theme }) => theme.background.primary};

  &:before {
    position: absolute;
    height: 8px;
    width: 8px;
    content: '';
    padding: 8px;
    border-radius: 20px;
    top: 10%;
    transform: translateX(
      ${({ currentTheme }) => (currentTheme === 'light' ? '-35px' : '10px')}
    );
    transition: transform 300ms ease-in-out;
    background-color: ${({ theme }) => theme.background.contrast};
  }

  @media (${breakpoints.device.xs}) {
    display: none;
  }
`;

export default Navbar;

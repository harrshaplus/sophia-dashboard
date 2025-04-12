import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1000;
`;

const Logo = styled.div`
  h1 {
    color: #2E7D32;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  flex-grow: 1;
  margin: 0 2rem;
  
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 20px;
    border: 1px solid #ccc;
  }
`;

const NavLinks = styled.div`
  a {
    margin-left: 1rem;
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #4CAF50;
    }
  }
`;

const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 1rem;

  span {
    width: 2rem;
    height: 0.25rem;
    background: #2E7D32;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

interface NavbarProps {
  setSidebarVisible: (visible: boolean) => void;
  sidebarVisible: boolean;
}

const Navbar = ({ setSidebarVisible, sidebarVisible }: NavbarProps) => {
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Nav>
      <HamburgerButton 
        onClick={toggleSidebar}
        isOpen={sidebarVisible}
      >
        <span />
        <span />
        <span />
      </HamburgerButton>
      <Logo onMouseEnter={() => setSidebarVisible(true)}>
        <h1>Sophia</h1>
      </Logo>
      <SearchBar>
        <input type="text" placeholder="Search..." />
      </SearchBar>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 
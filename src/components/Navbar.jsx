import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${props => props.theme.background};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.primary};
  }

  &.active {
    color: ${props => props.theme.primary};
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${props => props.theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${props => props.theme.background};
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const MobileNavLink = styled(Link)`
  color: ${props => props.theme.text};
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.card};
  }

  &.active {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.card};
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>PM</Logo>
        <NavLinks>
          <NavLink 
            to="home" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            offset={-70}
          >
            Home
          </NavLink>
          <NavLink 
            to="about" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            offset={-70}
          >
            About
          </NavLink>
          <NavLink 
            to="certifications" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            offset={-70}
          >
            Certifications
          </NavLink>
          <NavLink 
            to="internships" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            offset={-70}
          >
            Experience
          </NavLink>
          <NavLink 
            to="projects" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            offset={-70}
          >
            Projects
          </NavLink>
          <NavLink 
            to="contact" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            offset={-70}
          >
            Contact
          </NavLink>
        </NavLinks>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </ThemeToggle>
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuButton>
        </div>
      </NavContainer>
      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink 
          to="home" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          Home
        </MobileNavLink>
        <MobileNavLink 
          to="about" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          About
        </MobileNavLink>
        <MobileNavLink 
          to="certifications" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          Certifications
        </MobileNavLink>
        <MobileNavLink 
          to="internships" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          Experience
        </MobileNavLink>
        <MobileNavLink 
          to="projects" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          Projects
        </MobileNavLink>
        <MobileNavLink 
          to="contact" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          Contact
        </MobileNavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 
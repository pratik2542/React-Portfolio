import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { keyframes } from '@emotion/react';
import WhatsNew from './WhatsNew';
import FloatingWhatsNewButton from './FloatingWhatsNewButton';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

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

const WhatsNewButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  animation: ${blink} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.hover};
    animation: none;
    transform: translateY(-2px);
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
  justify-content: center;
  font-size: 1.2rem;
  height: 40px;
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  height: 40px;
  align-items: center;
  justify-content: center;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 40px;
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

const MobileWhatsNewButton = styled(WhatsNewButton)`
  width: 100%;
  text-align: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check for showing the modal on page load
  useEffect(() => {
    const lastSeenDate = localStorage.getItem('whatsNewLastSeen');
    const today = new Date().toDateString();
    
    if (!lastSeenDate || lastSeenDate !== today) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        localStorage.setItem('whatsNewLastSeen', today);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };

  return (
    <>
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
            <WhatsNewButton onClick={openModal}>
              What's New
            </WhatsNewButton>
          </NavLinks>
          <ButtonContainer>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </ThemeToggle>
            <MobileMenuButton onClick={toggleMenu}>
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </MobileMenuButton>
          </ButtonContainer>
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
          <MobileWhatsNewButton onClick={openModal}>
            What's New
          </MobileWhatsNewButton>
        </MobileMenu>
      </Nav>
      
      <FloatingWhatsNewButton onClick={openModal} />
      <WhatsNew isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
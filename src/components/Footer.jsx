import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: ${props => props.theme.background};
  border-top: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  
  /* Fixed footer styles for desktop */
  @media (min-width: 769px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 2rem;
    z-index: 900;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Hide on mobile since we have the mobile footer */
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© {year} Pratiksinh Makwana</Copyright>
        <SocialLinks>
          <SocialIcon 
            href="https://www.linkedin.com/in/pratiksinh-makwana-43488a189/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon 
            href="https://github.com/pratik2542" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon 
            href="mailto:pratikmak2542@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </SocialIcon>
          <SocialIcon 
            href="https://x.com/pratik2542"
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="X (Twitter)"
          >
            <FaTwitter />
          </SocialIcon>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
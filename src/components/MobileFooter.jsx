import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaGithub, FaEnvelope, FaUser, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.div`
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.background};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 900;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const IconLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem;
  
  &:hover, &:active {
    color: ${props => props.theme.primary};
  }
`;

const IconLabel = styled.span`
  font-size: 0.7rem;
  margin-top: 0.25rem;
`;

const MobileFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <IconLink href="https://www.linkedin.com/in/pratiksinh-makwana-43488a189/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <IconLabel>LinkedIn</IconLabel>
        </IconLink>
        <IconLink href="https://github.com/pratik2542" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <IconLabel>GitHub</IconLabel>
        </IconLink>
        <IconLink href="mailto:pratikmak2542@gmail.com">
          <FaEnvelope />
          <IconLabel>Email</IconLabel>
        </IconLink>
        
        <IconLink 
            href="https://x.com/pratik2542"
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="X (Twitter)"
          >
            <FaTwitter />
            <IconLabel>Twitter</IconLabel>
          </IconLink>

        <IconLink href="https://drive.google.com/file/d/17EAXpNUFotR55aPMPVwPjqGw5gp2EOs4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaUser />
          <IconLabel>Resume</IconLabel>
        </IconLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default MobileFooter;

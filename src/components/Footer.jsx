import React from 'react';
import styled from '@emotion/styled';
import { FiGithub, FiLinkedin, FiMail, FiTwitter  } from 'react-icons/fi';

const FooterSection = styled.footer`
  padding: 2rem;
  background: ${props => props.theme.card};
  color: ${props => props.theme.text};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Copyright = styled.p`
  text-align: center;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <SocialLinks>
          <SocialLink 
            href="https://github.com/pratik2542" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>
          <SocialLink 
            href="https://www.linkedin.com/in/pratiksinh-makwana-43488a189" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink 
            href="https://x.com/pratik2542"
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="X (Twitter)"
          >
            <FiTwitter />
          </SocialLink>
          <SocialLink 
            href="mailto:pratikmak2542@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} Pratiksinh Makwana.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 
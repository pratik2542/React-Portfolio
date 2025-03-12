import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: ${props => props.theme.background};
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  position: relative;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  margin: 0 1rem;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const Badge = styled.span`
  background: ${props => props.theme.primary};
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.75rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  color: ${props => props.theme.text};
  font-size: 1.8rem;
  margin: 0.75rem 0;
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.text};
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.theme.border};
  object-fit: cover;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.primary};
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem 1rem;
  }
`;

const ListContainer = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const WhatsNew = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    };
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <FiX />
            </CloseButton>
            
            <ModalHeader>
              <Badge>NEW</Badge>
              <Title>Shipping Management System</Title>
            </ModalHeader>
            
            <ProjectImage 
              src="https://placehold.co/600x320/e2e8f0/1e293b?text=Shipping+Management+System" 
              alt="Shipping Management System"
            />
            
            <Description>
              I've just launched a comprehensive full-stack shipping management application that showcases my skills in modern web development. This application includes:
            </Description>
            
            <ListContainer>
              <ListItem>Real-time tracking and logistics management</ListItem>
              <ListItem>Responsive dashboard with interactive analytics</ListItem>
              <ListItem>User authentication and role-based permissions</ListItem>
              <ListItem>Optimized for both desktop and mobile experiences</ListItem>
            </ListContainer>
            
            <ButtonWrapper>
              <ProjectLink 
                href="https://shipping-management.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Check out the website <FiExternalLink />
              </ProjectLink>
            </ButtonWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default WhatsNew;

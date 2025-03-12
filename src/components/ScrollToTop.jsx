import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FiArrowUp } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: ${props => props.isMobile ? '90px' : '70px'}; /* Adjusted to be just above footer on mobile */
  right: 20px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease;
  animation: ${fadeIn} 0.3s ease;
  z-index: 900;

  @media (max-width: 768px) {
    bottom: 90px; /* Position just above the mobile footer */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Ensure perfect centering */
    right: auto; /* Reset right position */
  }
`;

const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  width: ${props => props.isMobile ? '36px' : '40px'};
  height: ${props => props.isMobile ? '36px' : '40px'};
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`;

const ScrollToTop = ({ showWhatsNew }) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return visible ? (
    <ButtonContainer visible={visible} isMobile={isMobile} showWhatsNew={showWhatsNew}>
      <ScrollButton onClick={scrollToTop} aria-label="Scroll to top" isMobile={isMobile}>
        <FiArrowUp />
      </ScrollButton>
    </ButtonContainer>
  ) : null;
};

export default ScrollToTop;

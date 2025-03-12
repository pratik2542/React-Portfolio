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
  bottom: 70px;
  right: 20px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease;
  animation: ${fadeIn} 0.3s ease;
  z-index: 900;
  
  /* Hide on mobile */
  @media (max-width: 768px) {
    display: none;
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
  width: 40px;
  height: 40px;
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
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

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
    <ButtonContainer visible={visible}>
      <ScrollButton onClick={scrollToTop} aria-label="Scroll to top">
        <FiArrowUp />
      </ScrollButton>
    </ButtonContainer>
  ) : null;
};

export default ScrollToTop;

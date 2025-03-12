import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FiBell } from 'react-icons/fi';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const FloatingButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;
  animation: ${pulse} 2s infinite;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100px)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.hover};
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const NewBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 2px solid white;
`;

const FloatingWhatsNewButton = ({ onClick }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <FloatingButtonWrapper onClick={onClick} visible={visible}>
      <FiBell />
      <NewBadge>NEW</NewBadge>
    </FloatingButtonWrapper>
  );
};

export default FloatingWhatsNewButton;

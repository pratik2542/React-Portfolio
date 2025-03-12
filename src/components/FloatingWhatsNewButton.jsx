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
  bottom: 80px; /* Space above mobile footer */
  right: 20px;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px; /* Reduced from 56px */
  height: 48px; /* Reduced from 56px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem; /* Reduced from 1.5rem */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;
  animation: ${pulse} 2s infinite;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100px)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  outline: none;
  
  @media (max-width: 480px) {
    width: 42px; /* Even smaller on very small screens */
    height: 42px;
    font-size: 1rem;
    right: 16px;
    bottom: 75px;
  }
  
  &:hover {
    background: ${props => props.theme.hover};
  }
  
  &:active {
    background: ${props => props.theme.primary};
    transform: scale(0.95);
  }
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 10px rgba(59, 130, 246, 0.2);
  }
  
  &:active::after {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    opacity: 0.4;
    transition: 0s;
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
  font-size: 0.6rem; /* Smaller font */
  font-weight: bold;
  padding: 1px 5px; /* Smaller padding */
  border-radius: 8px;
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

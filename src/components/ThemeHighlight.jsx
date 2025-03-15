import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useTheme } from '@emotion/react';

// Use a function to create the keyframes dynamically based on theme
const createGlowKeyframes = color => keyframes`
  0% { box-shadow: 0 0 0px ${color}; }
  50% { box-shadow: 0 0 8px ${color}; }
  100% { box-shadow: 0 0 0px ${color}; }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  border-radius: 50%;
  animation: ${props => createGlowKeyframes(props.glowColor)} 0.5s infinite;
  z-index: 999;
  pointer-events: none;
`;

const ThemeHighlight = ({ theme }) => {
  const [showGlow, setShowGlow] = useState(true);
  const timerRef = useRef(null);
  const themeContext = useTheme();
  
  // Determine glow color based on theme - using theme prop or theme context type as fallback
  const glowColor = theme === 'light' || themeContext.type === 'light' ? '#000000' : '#FFFFFF';

  useEffect(() => {
    // Hide the glow after specified time
    timerRef.current = setTimeout(() => {
      setShowGlow(false);
    }, 10000);

    return () => clearTimeout(timerRef.current);
  }, []);

  return showGlow ? <GlowEffect glowColor={glowColor} /> : null;
};

export default ThemeHighlight;

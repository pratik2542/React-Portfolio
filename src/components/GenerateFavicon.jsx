import React from 'react';
import Logo from './Logo';
import { renderToString } from 'react-dom/server';

const GenerateFavicon = () => {
  const logoString = renderToString(<Logo>PM</Logo>);
  const favicon = `data:image/svg+xml,${encodeURIComponent(logoString)}`;
  
  return (
    <link rel="icon" href={favicon} />
  );
};

export default GenerateFavicon; 
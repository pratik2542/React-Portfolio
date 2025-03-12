import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        transition: all 0.3s ease;
        
        /* Padding for fixed elements */
        padding-top: 70px; /* Space for fixed header */
        
        @media (max-width: 768px) {
          padding-bottom: 70px; /* Space for the mobile fixed footer */
        }
        
        @media (min-width: 769px) {
          padding-bottom: 60px; /* Space for the desktop fixed footer */
        }
      }

      html {
        scroll-behavior: smooth;
      }
    `}
  />
);

export default GlobalStyles;
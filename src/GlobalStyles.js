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
          padding-top: 50px; /* Reduced space for header on mobile */
        }
        
        @media (min-width: 769px) {
          padding-bottom: 60px; /* Space for the desktop fixed footer */
        }
      }

      html {
        scroll-behavior: smooth;
      }

      #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}
  />
);

export default GlobalStyles;
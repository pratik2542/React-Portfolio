import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './themes';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyles from './GlobalStyles';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Certifications />
      <Internships />
      <Projects />
      <Contact />
      <Footer />
      <MobileFooter />
      <ScrollToTop showWhatsNew={true} />
    </ThemeProvider>
  );
}

export default App;
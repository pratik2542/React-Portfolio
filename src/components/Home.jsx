import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// We'll remove react-helmet for now

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${props => props.theme.background};
  position: relative;
  padding-top: 0; /* Remove extra padding at the top */
  
  @media (max-width: 768px) {
    padding-top: 0;
    align-items: flex-start; /* Align to top on mobile */
    padding-top: 20vh; /* Add space from top as percentage of viewport */
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin-top: -70px; /* Adjust for the fixed header to center properly */
  
  @media (max-width: 768px) {
    margin-top: 0; /* Remove negative margin on mobile */
    padding-top: 0;
  }
`;

const Title = styled(motion.h1)`
  color: ${props => props.theme.text};
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const Home = () => {
  // We'll update the document title using the regular method
  React.useEffect(() => {
    document.title = "Pratiksinh Makwana | Software Engineer & AI and Machine learning enthusiast";
  }, []);

  return (
    <HomeSection id="home">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pratiksinh Makwana
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software engineer | AI & Data science | Machine Learning Enthusiast | Post-graduation in AI | Bachlor of Technology in Computer Science
        </Subtitle>
      </Content>
    </HomeSection>
  );
};

export default Home;
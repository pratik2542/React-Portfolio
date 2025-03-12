import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

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

const TypingText = styled.span`
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const Home = () => {
  React.useEffect(() => {
    document.title = "Pratiksinh Makwana | Software Engineer & AI Enthusiast";
  }, []);

  return (
    <HomeSection id="home">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm Pratiksinh Makwana
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am a <TypingText>
            <ReactTyped
              strings={[
                "Software Engineer",
                "AI and Data Science Enthusiast",
                "Machine Learning Practitioner",
                "Tech Explorer",
                "PowerApps Developer",
                "Full Stack Developer",
                "Cloud Computing Enthusiast",
                "Data Analyst",
                "Web Developer",
                "Database Administrator",
                "Power BI Developer",
                "PowerPlatform Automation Developer"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </TypingText>
        </Subtitle>
      </Content>
    </HomeSection>
  );
};

export default Home;

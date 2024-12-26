import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${props => props.theme.background};
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
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
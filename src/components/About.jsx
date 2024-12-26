import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.text};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsContainer = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EducationContainer = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  &:before {
    content: "▹";
    color: ${props => props.theme.primary};
    margin-right: 0.5rem;
  }
`;

const Education = styled.div`
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
`;

const School = styled.h4`
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </Title>
        <Grid>
          <SkillsContainer
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SubTitle>Technical Skills</SubTitle>
            <SkillsList>
              <SkillItem>Languages: C++, C#, Python, Java, JavaScript</SkillItem>
              <SkillItem>AI/ML: TensorFlow, Pandas, Keras, PyTorch, Scikit-Learn</SkillItem>
              <SkillItem>Cloud: AWS, GCP, Azure, Docker, Kubernetes</SkillItem>
              <SkillItem>Frameworks: Node.js, React.js, Express.js, Django</SkillItem>
              <SkillItem>Tools & DB: GIT, JIRA, MongoDB, MySQL, DynamoDB</SkillItem>
            </SkillsList>
          </SkillsContainer>

          <EducationContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SubTitle>Education</SubTitle>
            <Education>
              <School>Centennial College, Toronto, CA</School>
              <p>Software Engineering Technology - AI</p>
              <p>GPA: 4.1 | Jan 2022 - April 2023</p>
            </Education>
            <Education>
              <School>Indus University, Ahmedabad, India</School>
              <p>Bachelor of Technology in Computer Engineering</p>
              <p>GPA: 3.88 | Aug 2016 - Aug 2020</p>
            </Education>
          </EducationContainer>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 
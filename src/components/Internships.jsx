import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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
  margin-bottom: 3rem;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: ${props => props.theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  padding: 20px 40px;
  position: relative;
  width: calc(50% - 40px);
  margin-bottom: 50px;
  
  ${props => props.position === 'left' ? 'left: 0;' : 'left: 50%;'}
  
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    left: 60px;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  background: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Company = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const Position = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const Duration = styled.p`
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  color: ${props => props.theme.text};
  list-style: none;
  padding: 0;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  &:before {
    content: "▹";
    color: ${props => props.theme.primary};
    margin-right: 0.5rem;
  }
`;

const experiences = [
  {
    company: "Ddrops Company",
    location: "Toronto, Canada", 
    position: "Quality Documentation Administrator and Programmer",
    duration: "June 2023 - Present",
    description: [
      "Ancova Analysis using Python and ML concepts for covariance analysis",
      "Azure Database Management and Administration across organization",
      "Application and Software Development with GMP standards"
    ]
  },
  {
    company: "MaxGen Technologies",
    location: "Ahmedabad, India",
    position: "Software Data Engineer",
    duration: "Jan 2020 - March 2022",
    description: [
      "Worked with AI and Model Training using Python",
      "Developed face recognition attendance system using OpenCV",
      "ETL data processing and visualization with PowerBI"
    ]
  },
  {
    company: "Silver Touch Pvt. Ltd",
    location: "Ahmedabad, India",
    position: "Blockchain Developer Intern",
    duration: "June 2019 - Dec 2019",
    description: [
      "Learned Ethereum architecture and Solidity language",
      "Developed smart contract for voting system",
      "Created frontend with React.js and Web3.js integration"
    ]
  },
  {
    company: "Indus University",
    location: "Ahmedabad, India",
    position: "Student Volunteer",
    duration: "2016 - 2020",
    description: [
      "Served as an examination invigilator, maintaining academic integrity during university exams",
      "Organized and led student activities and events to foster community engagement",
      "Coordinated with faculty and students to facilitate smooth conduct of academic activities"
    ]
  }
];

const Internships = () => {
  return (
    <ExperienceSection id="internships">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </Title>
        <Timeline>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              position={index % 2 === 0 ? 'left' : 'right'}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CardContent>
                <Company>{exp.company}</Company>
                <Position>{exp.position}</Position>
                <Duration>{exp.duration}</Duration>
                <Description>
                  {exp.description.map((item, i) => (
                    <DescriptionItem key={i}>{item}</DescriptionItem>
                  ))}
                </Description>
              </CardContent>
            </ExperienceCard>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Internships; 
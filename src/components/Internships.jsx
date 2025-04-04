import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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

// Desktop timeline styling
const Timeline = styled.div`
  position: relative;
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
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide timeline on mobile */
  }
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  width: 65%;
  margin-bottom: 50px;
  margin-top: 50px;
  clear: both;
  
  ${props => 
    props.position === 'left' 
      ? `
        float: left;
        padding-right: 220px;
      ` 
      : `
        float: right;
        padding-left: 220px;
      `
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide default cards on mobile */
  }
`;

// Mobile-specific styling
const MobileExperienceContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

const MobileCardHeader = styled.div`
  background: ${props => props.theme.primary};
  color: white;
  padding: 1rem;
  position: relative;
`;

const MobileCompany = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const MobilePosition = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.9;
`;

const MobileCardContent = styled.div`
  padding: 1rem;
`;

const MobileInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  font-size: 0.85rem;
  
  & > svg {
    margin-right: 0.5rem;
    min-width: 16px;
    color: ${props => props.theme.primary};
  }
`;

const MobileDescription = styled.ul`
  color: ${props => props.theme.text};
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const MobileDescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  padding-left: 1rem;
  position: relative;
  
  &:before {
    content: "▹";
    color: ${props => props.theme.primary};
    position: absolute;
    left: 0;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  background: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem; /* Slightly less padding on mobile */
  }
`;

const Company = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem; /* Slightly smaller on mobile */
  }
`;

const Position = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem; /* Less margin on mobile */
  }
`;

const Duration = styled.p`
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
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
        
        {/* Desktop Timeline */}
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
          <div style={{ clear: 'both' }}></div>
        </Timeline>
        
        {/* Mobile Experience Cards */}
        <MobileExperienceContainer>
          {experiences.map((exp, index) => (
            <MobileCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MobileCardHeader>
                <MobileCompany>{exp.company}</MobileCompany>
                <MobilePosition>{exp.position}</MobilePosition>
              </MobileCardHeader>
              <MobileCardContent>
                <MobileInfoRow>
                  <FaCalendarAlt />
                  <span>{exp.duration}</span>
                </MobileInfoRow>
                <MobileInfoRow>
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </MobileInfoRow>
                <MobileDescription>
                  {exp.description.map((item, i) => (
                    <MobileDescriptionItem key={i}>{item}</MobileDescriptionItem>
                  ))}
                </MobileDescription>
              </MobileCardContent>
            </MobileCard>
          ))}
        </MobileExperienceContainer>
      </Container>
    </ExperienceSection>
  );
};

export default Internships;
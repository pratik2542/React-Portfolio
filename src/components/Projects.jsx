import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectSection = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.primary}33;
  color: ${props => props.theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

// New components for hover popup
const HoverCard = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.cardHover || (props.theme.type === 'dark' ? '#111' : '#f0f0f0')};
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  text-align: center;
  z-index: 10;
  border-radius: 10px;
`;

const HoverTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
   color: ${props => props.theme.cardHover || (props.theme.type === 'dark' ? '#f0f0f0' : '#111')};
`;

// Update projects data to include links
const projects = [
  {
    title: "Employee Training Management System",
    description: "Developed a comprehensive PowerApps Canvas Application for pharmaceutical company training management, featuring Azure SQL integration for database management and compliance tracking. Implemented automated workflows for training notifications and integrated SharePoint for secure document handling and digital signatures.",
    tech: ["PowerApps", "Power Automate", "Azure SQL", "SharePoint", "GMP Compliance", "Automation"],
  },
  {
    title: "Pharmaceutical Testing Predictor",
    description: "Created a machine learning model using ANCOVA to predict testing outcomes from historical data. Developed visualization tools for monitoring testing criteria limits and implemented a threshold breach detection system to optimize testing workflows through data-driven decisions.",
    tech: ["Python", "Machine Learning", "Pandas", "Matplotlib", "Visualization", "Predictive Modeling", "Pharmaceutical Data Analysis"],
  },
  {
    title: "Self Expense Dashboard",
    description: "Designed and developed an interactive Power BI dashboard to analyze and track personal expenses for the year 2022. Visualized monthly spending trends, categorized expenses, and identified patterns for better financial management. Utilized advanced DAX functions and data modeling to create actionable insights, enabling effective budgeting and expense optimization.",
    tech: ["Power BI", "Data Visualization", "DAX", "Data Modeling", "Financial Analysis"],
  },
  {
    title: "Review Summarizer",
    description: "Built an automated review summarization system using Lexical Analysis for e-commerce products. Incorporated sentiment analysis to effectively categorize and understand customer feedback patterns.",
    tech: ["Python", "NLP", "Machine Learning", "Sentiment Analysis"],
  },
  {
    title: "Lunar Lander",
    description: "Created an AI-powered Lunar Lander using Deep Q-Learning Network and TensorFlow Agents framework. Enhanced learning capabilities through experience replay implementation for improved performance.",
    tech: ["Python", "TensorFlow", "Deep Learning", "OpenAI Gym"],
  },
  {
    title: "Smart Irrigation",
    description: "Developed an IoT-based irrigation system featuring automated soil moisture sensing capabilities. Created a real-time monitoring dashboard with integrated hardware systems for efficient water management.",
    tech: ["IoT", "Python", "Hardware", "Real-time Monitoring"],
  },
  {
    title: "Diabetes Prediction Model",
    description: "Engineered a voting-based ensemble classifier for diabetes prediction using the Pima Indians dataset. Implemented advanced model optimization techniques and created a robust data preprocessing pipeline.",
    tech: ["Python", "Scikit-Learn", "Machine Learning", "Data Preprocessing"],
  },
  {
    title: "Sentiment Analysis on Amazon Fashion Reviews",
    description: "Developed a comprehensive NLP pipeline for customer review classification using Word2Vec embeddings. Created an efficient text preprocessing workflow and evaluated performance using various metrics.",
    tech: ["Python", "NLP", "Word2Vec", "Sentiment Analysis", "Scikit-Learn", "Confusion Matrix"],
  },
  {
    title: "Dimensionality Reduction using PCA",
    description: "Implemented Principal Component Analysis for efficient high-dimensional dataset reduction while optimizing variance retention. Created visualizations to demonstrate the effectiveness of dimensionality reduction in ML tasks.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Dimensionality Reduction", "Data Visualization"],
  }
];

const Projects = () => {
  // State to track which project card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <ProjectSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
              
              <AnimatePresence>
                {hoveredIndex === index && (
                  <HoverCard
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HoverTitle>{project.title}</HoverTitle>
                    <TechStack>
                      {project.tech.map((tech, i) => (
                        <TechTag key={i}>{tech}</TechTag>
                      ))}
                    </TechStack>
                    
                  </HoverCard>
                )}
              </AnimatePresence>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
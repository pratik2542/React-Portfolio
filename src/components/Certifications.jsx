import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const CertSection = styled.section`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CertCard = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CertTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const CertInfo = styled.p`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const CertLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// You can add your actual certifications here
const certifications = [
  
  {
    title: "Blockchain Developer",
    issuer: "Silver Touch Pvt. Ltd",
    date: "2019",
    link: "https://drive.google.com/file/d/1BGAA7rS8X90XtyAGWPLZHhVqN_Mlkqrf/view?usp=share_link"
  },
  {
    title: "Python Begginer and Advanced",
    issuer: "Udemy",
    date: "2019",
    link: "https://drive.google.com/drive/u/0/folders/1jsm3d9nCJs19tZFtZcguZCNBShSBxBEg"
  },
  {
    title: "Python with machine learning",
    issuer: "MaxGen Technologies Pvt. Ltd",
    date: "2020",
    link: "https://drive.google.com/file/d/18lkHROAMMgLAbHbotNkOkbe5EJsPFfET/view?usp=share_link"
  },
  {
    title: "B.Tech Degree",
    issuer: "Indus University",
    date: "2020",
    link: "https://drive.google.com/file/d/16T7AUyJ8WkjUxYvPsfN1hhp2M2-GBrel/view?usp=share_link"
  },
  {
    title: "Post-Graduation Degree",
    issuer: "Centennial College",
    date: "2023",
    link: " https://drive.google.com/drive/u/0/folders/1jsm3d9nCJs19tZFtZcguZCNBShSBxBEg"
  }
 
];

const Certifications = () => {
  return (
    <CertSection id="certifications">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications
        </Title>
        <Grid>
          {certifications.map((cert, index) => (
            <CertCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertTitle>{cert.title}</CertTitle>
              <CertInfo>Issued by: {cert.issuer}</CertInfo>
              <CertInfo>Date: {cert.date}</CertInfo>
              <CertLink href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate →
              </CertLink>
            </CertCard>
          ))}
        </Grid>
      </Container>
    </CertSection>
  );
};

export default Certifications; 
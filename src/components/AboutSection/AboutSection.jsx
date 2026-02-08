import React from 'react';
import styled from 'styled-components';
import { FiCode, FiLayers, FiDatabase, FiAward } from 'react-icons/fi';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 4rem;
  padding-top: 100px;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 3rem 1.5rem;
    padding-top: 80px;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media ${props => props.theme.breakpoints.tablet} {
    gap: 2rem;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div``;

const SectionLabel = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: block;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  span.white { color: white; }
  span.accent { color: ${props => props.theme.colors.primary}; }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InfoLabel = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.95rem;
`;

const InfoValue = styled.span`
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(46, 229, 157, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(46, 229, 157, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(46, 229, 157, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.95rem;
`;

const AboutSection = () => {
  const stats = [
    { icon: FiCode, number: "1.5+", label: "Years Experience" },
    { icon: FiLayers, number: "10+", label: "Projects Completed" },
    { icon: FiDatabase, number: "5+", label: "Technologies" },
    { icon: FiAward, number: "BCA", label: "Degree Completed" },
  ];

  return (
    <SectionContainer id="about">
      <Content>
        <TextContent>
          <SectionLabel>About Me</SectionLabel>
          <SectionTitle>
            <span className="white">PASSIONATE </span>
            <span className="accent">DEVELOPER</span>
          </SectionTitle>
          <Description>
            I'm a Technical Support Engineer and aspiring Web Developer with 1.5 years of experience 
            supporting and building web applications using React, JavaScript, and REST APIs. I have 
            strong expertise in troubleshooting customer-reported issues, reproducing bugs, API validation, 
            and assisting developers with SDK integration.
          </Description>
          <Description>
            My hands-on experience in frontend development, debugging, and Agile-based collaboration 
            has equipped me with the skills to deliver high-quality solutions. I'm passionate about 
            creating intuitive user interfaces and solving complex technical challenges.
          </Description>
          
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Name:</InfoLabel>
              <InfoValue>Aman Dubey</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Email:</InfoLabel>
              <InfoValue>amandubeycom2@gmail.com</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Location:</InfoLabel>
              <InfoValue>Mumbai, India</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Education:</InfoLabel>
              <InfoValue>BCA, TMV 2024</InfoValue>
            </InfoItem>
          </InfoGrid>
        </TextContent>
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatIcon>
                <stat.icon />
              </StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Content>
    </SectionContainer>
  );
};

export default AboutSection;

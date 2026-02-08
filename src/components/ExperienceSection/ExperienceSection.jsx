import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(46, 229, 157, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(46, 229, 157, 0); }
`;

const lineGrow = keyframes`
  from { height: 0; }
  to { height: 100%; }
`;

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
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  span.white { color: white; }
  span.accent { color: ${props => props.theme.colors.primary}; }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 40px;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding-left: 30px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 14px;
  top: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.primary} 0%,
    rgba(46, 229, 157, 0.3) 50%,
    transparent 100%
  );
  border-radius: 2px;
  animation: ${lineGrow} 1.5s ease-out forwards;
  
  @media ${props => props.theme.breakpoints.mobile} {
    left: 10px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -33px;
  top: 24px;
  width: 16px;
  height: 16px;
  background: ${props => props.isActive ? props.theme.colors.primary : '#1a1a2e'};
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  z-index: 2;
  animation: ${props => props.isActive ? pulse : 'none'} 2s ease-in-out infinite;
  
  @media ${props => props.theme.breakpoints.mobile} {
    left: -26px;
    width: 13px;
    height: 13px;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(135deg, rgba(46, 229, 157, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(46, 229, 157, 0.15);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    border-radius: 4px 0 0 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(46, 229, 157, 0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    border-color: rgba(46, 229, 157, 0.4);
    transform: translateX(8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 30px rgba(46, 229, 157, 0.1);
    
    &::before { opacity: 1; }
    &::after { opacity: 1; }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TitleGroup = styled.div``;

const JobTitle = styled.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  
  svg { font-size: 1rem; }
`;

const Badge = styled.span`
  background: ${props => props.isActive 
    ? `linear-gradient(135deg, ${props.theme.colors.primary}, #1abc9c)` 
    : 'rgba(46, 229, 157, 0.15)'};
  color: ${props => props.isActive ? '#0a0a0f' : props.theme.colors.primary};
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 0.95rem;
  }
`;

const Responsibilities = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Responsibility = styled(motion.li)`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.92rem;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;
  transition: color 0.3s ease;
  
  svg {
    position: absolute;
    left: 0;
    top: 5px;
    color: ${props => props.theme.colors.primary};
    font-size: 0.75rem;
  }
  
  &:hover {
    color: white;
  }
`;

const experienceData = [
  {
    id: 1,
    title: "Technical Support Engineer",
    company: "CometChat",
    location: "India",
    startDate: "April 2025",
    endDate: "Present",
    type: "Full-time",
    isActive: true,
    responsibilities: [
      "Provide technical support to developers integrating chat and messaging features into React applications",
      "Investigate, reproduce, and document customer-reported issues related to SDK integration and APIs",
      "Assist customers in debugging issues by analyzing logs, API responses, and browser network activity",
      "Collaborate with engineering and product teams to escalate bugs and verify fixes",
      "Validate real-time messaging behavior across multiple scenarios to ensure expected functionality"
    ]
  },
  {
    id: 2,
    title: "Intern – QA / Technical Support",
    company: "CometChat",
    location: "India",
    startDate: "Oct 2024",
    endDate: "April 2025",
    type: "Internship",
    isActive: false,
    responsibilities: [
      "Executed functional and regression testing for web and mobile applications",
      "Supported validation of bug fixes and feature enhancements before release",
      "Worked closely with developers to understand application behavior and edge cases",
      "Gained hands-on experience with Agile workflows and defect life cycle management"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const ExperienceSection = () => {
  return (
    <SectionContainer id="experience">
      <Content>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <span className="white">WORK </span>
              <span className="accent">EXPERIENCE</span>
            </SectionTitle>
            <SectionSubtitle>
              My professional journey and the roles that shaped my career
            </SectionSubtitle>
          </motion.div>
        </SectionHeader>
        
        <Timeline>
          <TimelineLine />
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <TimelineDot isActive={exp.isActive} />
              <Card
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CardHeader>
                  <TitleGroup>
                    <JobTitle>{exp.title}</JobTitle>
                    <Company>
                      <FiBriefcase /> {exp.company}
                    </Company>
                  </TitleGroup>
                  <Badge isActive={exp.isActive}>
                    {exp.isActive ? '● Current' : exp.type}
                  </Badge>
                </CardHeader>
                
                <MetaRow>
                  <MetaItem>
                    <FiCalendar /> {exp.startDate} – {exp.endDate}
                  </MetaItem>
                  <MetaItem>
                    <FiMapPin /> {exp.location}
                  </MetaItem>
                </MetaRow>
                
                <Responsibilities
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <Responsibility key={idx} variants={itemVariants}>
                      <FiChevronRight />
                      {resp}
                    </Responsibility>
                  ))}
                </Responsibilities>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </SectionContainer>
  );
};

export default ExperienceSection;

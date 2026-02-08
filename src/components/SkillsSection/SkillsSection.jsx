import React from 'react';
import styled from 'styled-components';
import { 
  SiJavascript, SiReact, SiHtml5, SiCss3, SiGit, 
  SiGithub, SiPostman, SiMysql, SiJenkins, SiJira,
  SiLinear
} from 'react-icons/si';
import { FiCode, FiMessageSquare, FiServer, FiTool, FiDatabase, FiGitBranch, FiUsers, FiSearch } from 'react-icons/fi';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 100px;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 2rem 1.5rem;
    padding-top: 80px;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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
  max-width: 600px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(46, 229, 157, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(46, 229, 157, 0.3);
    transform: translateY(-3px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const CategoryIcon = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(46, 229, 157, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
`;

const CategoryTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.colors.text.secondary};
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(46, 229, 157, 0.1);
    border-color: rgba(46, 229, 157, 0.3);
    color: ${props => props.theme.colors.primary};
  }
`;

const skillsData = [
  {
    category: "Frontend Development",
    icon: FiCode,
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Web Design", "Basic UI/UX Principles"]
  },
  {
    category: "Web Development Concepts",
    icon: SiReact,
    skills: ["Component-Based Architecture", "State Management", "Props Handling", "Event Handling", "API Integration"]
  },
  {
    category: "Chat & Real-Time Technologies",
    icon: FiMessageSquare,
    skills: ["CometChat SDK", "Real-Time Messaging", "Chat Application Integration"]
  },
  {
    category: "API & Backend Support",
    icon: FiServer,
    skills: ["REST APIs", "Postman", "JSON Validation", "HTTP Methods (GET, POST, PUT, DELETE)", "Status Codes"]
  },
  {
    category: "Debugging & Troubleshooting",
    icon: FiSearch,
    skills: ["Issue Reproduction", "Root Cause Analysis", "Log Analysis", "Browser DevTools", "Network Inspection"]
  },
  {
    category: "Customer Support & Ticketing",
    icon: FiUsers,
    skills: ["JIRA", "Linear", "Issue Tracking", "Bug Reporting", "SLA Awareness", "Customer Communication"]
  },
  {
    category: "Version Control & Tools",
    icon: FiGitBranch,
    skills: ["Git", "GitHub", "Jenkins (Basic CI/CD)"]
  },
  {
    category: "Databases & Methodologies",
    icon: FiDatabase,
    skills: ["MySQL (SELECT, JOIN, WHERE)", "Agile/Scrum", "SDLC", "STLC"]
  }
];

const SkillsSection = () => {
  return (
    <SectionContainer id="skills">
      <Content>
        <SectionHeader>
          <SectionTitle>
            <span className="white">TECHNICAL </span>
            <span className="accent">SKILLS</span>
          </SectionTitle>
          <SectionSubtitle>
            Technologies and tools I work with
          </SectionSubtitle>
        </SectionHeader>
        
        <SkillsGrid>
          {skillsData.map((category, idx) => (
            <SkillCategory key={idx}>
              <CategoryHeader>
                <CategoryIcon>
                  <category.icon />
                </CategoryIcon>
                <CategoryTitle>{category.category}</CategoryTitle>
              </CategoryHeader>
              <SkillTags>
                {category.skills.map((skill, skillIdx) => (
                  <SkillTag key={skillIdx}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Content>
    </SectionContainer>
  );
};

export default SkillsSection;

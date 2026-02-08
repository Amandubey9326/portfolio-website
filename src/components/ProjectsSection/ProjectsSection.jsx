import React, { useState } from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 2rem 4rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(46, 229, 157, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: rgba(46, 229, 157, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }
`;

const ProjectImage = styled.div`
  height: 140px;
  background: linear-gradient(135deg, rgba(46, 229, 157, 0.2), rgba(46, 229, 157, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(46, 229, 157, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
`;

const TechTag = styled.span`
  background: rgba(46, 229, 157, 0.1);
  color: ${props => props.theme.colors.primary};
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background: #16161d;
  border: 1px solid rgba(46, 229, 157, 0.2);
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.3s ease;
`;

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: #0a0a0f;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, animated personal portfolio built with React and styled-components featuring smooth animations and responsive design.",
    longDescription: "This portfolio showcases my skills and projects with a focus on modern UI/UX principles. Built with React, it features smooth animations, a dark theme, and fully responsive design.",
    technologies: ["React", "Styled Components", "Framer Motion"],
    icon: "💼",
    githubUrl: "https://github.com/Amandubey9326",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Chat Application UI",
    description: "A real-time chat interface built during my work at CometChat, featuring modern messaging UI patterns.",
    longDescription: "Developed as part of my role at CometChat, this project involved creating intuitive chat interfaces with real-time messaging capabilities.",
    technologies: ["React", "WebSocket", "REST API"],
    icon: "💬",
    githubUrl: "https://github.com/Amandubey9326",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce platforms with analytics, order management, and inventory tracking.",
    longDescription: "A comprehensive dashboard solution featuring data visualization, real-time updates, and intuitive navigation for managing online stores.",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    icon: "📊",
    githubUrl: "https://github.com/Amandubey9326",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A clean weather application that displays current conditions and forecasts using a weather API.",
    longDescription: "Built to practice API integration and state management, this app provides accurate weather data with a beautiful, intuitive interface.",
    technologies: ["React", "Weather API", "CSS3"],
    icon: "🌤️",
    githubUrl: "https://github.com/Amandubey9326",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionContainer id="projects">
      <Content>
        <SectionHeader>
          <SectionTitle>
            <span className="white">MY </span>
            <span className="accent">PROJECTS</span>
          </SectionTitle>
          <SectionSubtitle>
            A collection of projects that showcase my skills and passion for development
          </SectionSubtitle>
        </SectionHeader>
        
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectImage>{project.icon}</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.githubUrl} target="_blank" onClick={e => e.stopPropagation()}>
                    <FiGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.liveUrl} target="_blank" onClick={e => e.stopPropagation()}>
                    <FiExternalLink /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
      
      {/* Project Modal */}
      <ModalOverlay isOpen={!!selectedProject} onClick={() => setSelectedProject(null)}>
        <ModalContent isOpen={!!selectedProject} onClick={e => e.stopPropagation()}>
          {selectedProject && (
            <>
              <ModalHeader>
                <div>
                  <ProjectTitle style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                    {selectedProject.title}
                  </ProjectTitle>
                  <TechStack>
                    {selectedProject.technologies.map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </div>
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <FiX />
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <ProjectDescription style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                  {selectedProject.longDescription}
                </ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={selectedProject.githubUrl} target="_blank">
                    <FiGithub /> View on GitHub
                  </ProjectLink>
                  <ProjectLink href={selectedProject.liveUrl} target="_blank">
                    <FiExternalLink /> View Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </SectionContainer>
  );
};

export default ProjectsSection;

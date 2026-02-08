import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeProvider from './theme/ThemeProvider';
import GlobalStyles from './styles/GlobalStyles';
import Background3D from './components/UI/Background3D';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import ContactSection from './components/ContactSection/ContactSection';
import profileImage from './assets/me.png';

const MainContent = styled.main`
  position: relative;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  border-top: 1px solid rgba(46, 229, 157, 0.1);
  color: #6B7280;
  font-size: 0.9rem;
  
  .highlight {
    color: #2EE59D;
    margin-top: 0.5rem;
  }
`;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Also handle browser back/forward restoring scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Delay smooth scroll behavior so it doesn't interfere with scroll-to-top
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const profileData = {
    name: "Aman Dubey",
    title: "Technical Support Engineer | React Developer",
    description: "Technical Support Engineer and aspiring Web Developer with 1.5 years of experience supporting and building web applications using React, JavaScript, and REST APIs. Strong expertise in troubleshooting customer-reported issues, reproducing bugs, API validation, and assisting developers with SDK integration. Hands-on experience in frontend development, debugging, and Agile-based collaboration. Highly motivated to grow as a full-stack web developer.",
    profileImage: profileImage,
    cvUrl: "/Aman-Dubey-dev.pdf",
  };

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Background3D />
      <Navigation isScrolled={isScrolled} />
      
      <MainContent>
        {/* Hero Section */}
        <HeroSection profileData={profileData} />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <Footer>
          <p>© 2026 Aman Dubey. All rights reserved.</p>
          <p className="highlight">Built with React & ❤️</p>
        </Footer>
      </MainContent>
    </ThemeProvider>
  );
}

export default App;

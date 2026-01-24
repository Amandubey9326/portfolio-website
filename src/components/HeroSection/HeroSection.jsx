import React from 'react';
import styled from 'styled-components';
import GlassmorphismCard from '../UI/GlassmorphismCard';
import ProfilePhoto from './ProfilePhoto';
import ProfileInfo from './ProfileInfo';
import DownloadButton from './DownloadButton';
import SocialIcons from './SocialIcons';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15rem 2rem;
  position: relative;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
    min-height: calc(100vh - 80px);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
  
  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 300px;
    gap: ${props => props.theme.spacing.lg};
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
    text-align: center;
  }
`;

const ContentCard = styled(GlassmorphismCard)`
  padding: ${props => props.theme.spacing.xl};
  
  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.spacing.lg};
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.md};
    order: 2;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${props => props.theme.breakpoints.mobile} {
    order: 1;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin: ${props => props.theme.spacing.md} 0 ${props => props.theme.spacing.lg} 0;
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 0.9rem;
  }
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.lg};
  
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    align-items: center;
  }
`;

const HeroSection = ({ profileData }) => {
  const defaultProfileData = {
    name: "Aman Dubey",
    title: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nihil nam perferendis tempore id quo maiores quam lorem aperiam dolorum aequam voluptatem officia dignissimos hic repellendus nulla congue officia Maxime.",
    profileImage: "/api/placeholder/300/300",
    cvUrl: "/cv/emilian-leaman-cv.pdf",
    socialLinks: [
      { platform: 'play', url: '#', icon: 'FiPlay' },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: 'FiLinkedin' },
      { platform: 'twitter', url: 'https://twitter.com', icon: 'FiTwitter' },
      { platform: 'youtube', url: 'https://youtube.com', icon: 'FiYoutube' },
    ]
  };

  const data = { ...defaultProfileData, ...profileData };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <ContentCard>
          <ProfileInfo name={data.name} title={data.title} />
          <Description>{data.description}</Description>
          <ActionSection>
            <DownloadButton cvUrl={data.cvUrl} />
            <SocialIcons socialLinks={data.socialLinks} />
          </ActionSection>
        </ContentCard>
        
        <PhotoContainer>
          <ProfilePhoto 
            src={data.profileImage} 
            alt={`${data.name} - ${data.title}`}
          />
        </PhotoContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
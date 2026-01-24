import React from 'react';
import styled from 'styled-components';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/insta.png';
import linkedinIcon from '../../assets/likdin.png';

const SocialContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  align-items: center;
`;

const SocialIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.glass.background};
  border: none;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    width: 45px;
    height: 45px;
    
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const SocialIcons = ({ socialLinks }) => {
  const handleSocialClick = (url, platform) => {
    if (url === '#') {
      console.log(`${platform} link clicked - placeholder`);
      return;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <SocialContainer>
      {/* <SocialIcon
        onClick={() => handleSocialClick('#', 'play')}
        title="Play"
        type="button"
      >
        <span style={{fontSize: '18px'}}>▶️</span>
      </SocialIcon> */}
      <SocialIcon
        onClick={() => handleSocialClick('https://www.linkedin.com/in/aman-dubey-92005138b/', 'linkedin')}
        title="LinkedIn"
        type="button"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </SocialIcon>
      <SocialIcon
        onClick={() => handleSocialClick('https://github.com/Amandubey9326', 'github')}
        title="GitHub"
        type="button"
      >
        <img src={githubIcon} alt="GitHub" />
      </SocialIcon>
      <SocialIcon
        onClick={() => handleSocialClick('https://instagram.com', 'instagram')}
        title="Instagram"
        type="button"
      >
        <img src={instagramIcon} alt="Instagram" />
      </SocialIcon>
      {/* <SocialIcon
        onClick={() => handleSocialClick('https://youtube.com', 'youtube')}
        title="YouTube"
        type="button"
      >
        <span style={{fontSize: '18px'}}>📺</span>
      </SocialIcon> */}
    </SocialContainer>
  );
};

export default SocialIcons;
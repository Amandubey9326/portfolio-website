import styled from 'styled-components';
import { FiDownload } from 'react-icons/fi';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 4rem;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1.5rem;
    padding-top: 80px;
  }
`;

const HeroContent = styled.div`
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

const TextContent = styled.div`
  @media ${props => props.theme.breakpoints.mobile} {
    order: 2;
  }
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.8rem;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2.2rem;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  span.white {
    color: white;
  }
  
  span.accent {
    color: ${props => props.theme.colors.primary};
    font-style: italic;
  }
  
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.8rem;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    margin: 0 auto 2rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${props => props.theme.colors.primary};
  color: #0a0a0f;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(46, 229, 157, 0.3);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media ${props => props.theme.breakpoints.mobile} {
    order: 1;
  }
`;

const HexagonFrame = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  
  @media ${props => props.theme.breakpoints.tablet} {
    width: 320px;
    height: 360px;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    width: 280px;
    height: 320px;
  }
`;

const HexagonOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 3px solid ${props => props.theme.colors.primary};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: borderGlow 3s ease-in-out infinite;
`;

const HexagonInner = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  background: #1a1a2e;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  opacity: 0.1;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: float 6s ease-in-out infinite;
  
  &.shape1 {
    top: -20px;
    right: 20%;
    animation-delay: 0s;
  }
  
  &.shape2 {
    bottom: 10%;
    left: -30px;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
  }
  
  &.shape3 {
    top: 30%;
    right: -20px;
    width: 30px;
    height: 30px;
    animation-delay: 4s;
  }
`;

const HeroSection = ({ profileData }) => {
  const data = {
    name: "Aman Dubey",
    title: "Technical Support Engineer",
    description: "Technical Support Engineer and aspiring Web Developer with 1.5 years of experience supporting and building web applications using React, JavaScript, and REST APIs.",
    profileImage: profileData?.profileImage,
    cvUrl: "/Aman-Dubey-dev.pdf",
    ...profileData
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <TextContent>
          <Greeting>HI, I'M {data.name.toUpperCase()}!</Greeting>
          <Title>
            <span className="white">React </span>
            <span className="accent">Developer</span>
          </Title>
          <Description>{data.description}</Description>
          <ActionButtons>
            <DownloadButton href={data.cvUrl} download>
              Download CV <FiDownload />
            </DownloadButton>
          </ActionButtons>
        </TextContent>
        
        <PhotoContainer>
          <FloatingShape className="shape1" />
          <FloatingShape className="shape2" />
          <FloatingShape className="shape3" />
          <HexagonFrame>
            <HexagonOuter />
            <HexagonInner>
              <img src={data.profileImage} alt={data.name} />
            </HexagonInner>
          </HexagonFrame>
        </PhotoContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

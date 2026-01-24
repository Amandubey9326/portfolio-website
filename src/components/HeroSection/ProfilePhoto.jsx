import React, { useState } from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  
  @media ${props => props.theme.breakpoints.tablet} {
    width: 280px;
    height: 280px;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    width: 250px;
    height: 250px;
  }
`;

const PhotoFrame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  padding: 4px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${props => props.theme.borderRadius.full};
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.accent} 0%, 
      ${props => props.theme.colors.primary} 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.3;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.full};
  object-fit: cover;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.glass.background} 0%, 
    rgba(255, 255, 255, 0.05) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${props => props.theme.colors.text.secondary};
  position: relative;
  z-index: 1;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.theme.colors.glass.border};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ProfilePhoto = ({ src, alt, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <PhotoContainer {...props}>
      <PhotoFrame>
        {!imageError && (
          <Photo
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}
        
        {(isLoading || imageError) && (
          <PlaceholderContainer>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <span>👤</span>
            )}
          </PlaceholderContainer>
        )}
      </PhotoFrame>
    </PhotoContainer>
  );
};

export default ProfilePhoto;
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiDownload } from 'react-icons/fi';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  color: ${props => props.theme.colors.text.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  ${Button}:hover & {
    transform: translateY(-1px);
  }
`;

const DownloadButton = ({ cvUrl = "/Aman-Dubey-dev.pdf", ...props }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Aman-Dubey-dev.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simulate download delay for UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      
      // Fallback: open in new tab
      window.open(cvUrl, '_blank');
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      disabled={isDownloading}
      {...props}
    >
      <IconWrapper>
        <FiDownload />
      </IconWrapper>
      {isDownloading ? 'Downloading...' : 'Download CV'}
    </Button>
  );
};

export default DownloadButton;
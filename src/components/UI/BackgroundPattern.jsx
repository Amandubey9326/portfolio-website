import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
`;

const PatternContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const GeometricShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}20, 
    ${props => props.theme.colors.secondary}20
  );
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(1) {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
    animation-duration: 8s;
  }
  
  &:nth-child(3) {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
    animation-duration: 10s;
  }
  
  &:nth-child(4) {
    width: 120px;
    height: 120px;
    top: 30%;
    right: 30%;
    animation-delay: 1s;
    animation-duration: 7s;
  }
`;

const LinePattern = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, 
    transparent, 
    ${props => props.theme.colors.accent}40, 
    transparent
  );
  animation: ${pulse} 4s ease-in-out infinite;
  
  &:nth-child(5) {
    top: 20%;
    left: 50%;
    transform: rotate(45deg);
    animation-delay: 0s;
  }
  
  &:nth-child(6) {
    bottom: 30%;
    right: 40%;
    transform: rotate(-45deg);
    animation-delay: 2s;
  }
  
  &:nth-child(7) {
    top: 70%;
    left: 70%;
    transform: rotate(90deg);
    animation-delay: 1s;
  }
`;

const BackgroundPattern = ({ variant = 'combined' }) => {
  if (variant === 'gradient') {
    return null; // Gradient is handled in GlobalStyles
  }

  return (
    <PatternContainer>
      {(variant === 'geometric' || variant === 'combined') && (
        <>
          <GeometricShape />
          <GeometricShape />
          <GeometricShape />
          <GeometricShape />
        </>
      )}
      {(variant === 'combined') && (
        <>
          <LinePattern />
          <LinePattern />
          <LinePattern />
        </>
      )}
    </PatternContainer>
  );
};

export default BackgroundPattern;
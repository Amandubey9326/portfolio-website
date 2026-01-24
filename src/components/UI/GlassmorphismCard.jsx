import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${props => props.theme.colors.glass.background};
  backdrop-filter: blur(${props => props.blur || 10}px);
  -webkit-backdrop-filter: blur(${props => props.blur || 10}px);
  border: 1px solid ${props => props.theme.colors.glass.border};
  border-radius: ${props => props.borderRadius || props.theme.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.opacity || 1};
  position: relative;
  overflow: hidden;

  /* Fallback for browsers that don't support backdrop-filter */
  @supports not (backdrop-filter: blur(10px)) {
    background: rgba(255, 255, 255, 0.15);
  }

  /* Responsive border radius */
  @media ${props => props.theme.breakpoints.mobile} {
    border-radius: ${props => props.theme.borderRadius.md};
  }
`;

const GlassmorphismCard = ({ 
  children, 
  blur = 10, 
  opacity = 1, 
  borderRadius,
  className,
  ...props 
}) => {
  return (
    <StyledCard 
      blur={blur}
      opacity={opacity}
      borderRadius={borderRadius}
      className={className}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default GlassmorphismCard;
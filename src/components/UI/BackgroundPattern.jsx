import React from 'react';
import styled from 'styled-components';

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

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 20% 0%, rgba(46, 229, 157, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(46, 229, 157, 0.05) 0%, transparent 50%);
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(46, 229, 157, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(46, 229, 157, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
`;

const BackgroundPattern = () => {
  return (
    <PatternContainer>
      <GradientOverlay />
      <GridPattern />
    </PatternContainer>
  );
};

export default BackgroundPattern;

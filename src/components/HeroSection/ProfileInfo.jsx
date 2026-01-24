import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
  line-height: 1.1;
  
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.5rem;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0;
  
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.3rem;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }
`;

const ProfileInfo = ({ name, title }) => {
  return (
    <ProfileContainer>
      <Name>{name}</Name>
      <Title>{title}</Title>
    </ProfileContainer>
  );
};

export default ProfileInfo;
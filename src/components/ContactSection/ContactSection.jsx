import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 4rem;
  padding-top: 100px;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 3rem 1.5rem;
    padding-top: 80px;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span.white { color: white; }
  span.accent { color: ${props => props.theme.colors.primary}; }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(46, 229, 157, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(46, 229, 157, 0.3);
    transform: translateX(10px);
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(46, 229, 157, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(46, 229, 157, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: #0a0a0f;
    transform: translateY(-5px);
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(46, 229, 157, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.fullWidth ? '1.5rem' : '0'};
`;

const FormLabel = styled.label`
  display: block;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const FormInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(46, 229, 157, 0.1);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(46, 229, 157, 0.1);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: #0a0a0f;
  padding: 1.25rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(46, 229, 157, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SectionContainer id="contact">
      <Content>
        <SectionHeader>
          <SectionTitle>
            <span className="white">GET IN </span>
            <span className="accent">TOUCH</span>
          </SectionTitle>
          <SectionSubtitle>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </SectionSubtitle>
        </SectionHeader>
        
        <ContactGrid>
          <ContactInfo>
            <InfoCard>
              <InfoIcon><FiMail /></InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>amandubeycom2@gmail.com</InfoValue>
              </InfoContent>
            </InfoCard>
            
            <InfoCard>
              <InfoIcon><FiPhone /></InfoIcon>
              <InfoContent>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>+91 9326757725</InfoValue>
              </InfoContent>
            </InfoCard>
            
            <InfoCard>
              <InfoIcon><FiMapPin /></InfoIcon>
              <InfoContent>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>Mumbai, India</InfoValue>
              </InfoContent>
            </InfoCard>
            
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/aman-dubey-92005138b/" target="_blank">
                <FiLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/Amandubey9326" target="_blank">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/amann.__03/" target="_blank">
                <FiInstagram />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel>Your Name</FormLabel>
                <FormInput 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Your Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup fullWidth>
              <FormLabel>Subject</FormLabel>
              <FormInput 
                type="text" 
                name="subject"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup fullWidth>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Send Message <FiSend />
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Content>
    </SectionContainer>
  );
};

export default ContactSection;

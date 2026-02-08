import { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiInstagram, FiCheck, FiAlertCircle } from 'react-icons/fi';

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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  span.white { color: white; }
  span.accent { color: ${props => props.theme.colors.primary}; }
  @media ${props => props.theme.breakpoints.mobile} { font-size: 1.8rem; }
`;

const SectionSubtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  @media ${props => props.theme.breakpoints.mobile} { grid-template-columns: 1fr; }
`;

const ContactInfo = styled.div``;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(46, 229, 157, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  transition: all 0.3s ease;
  &:hover {
    border-color: rgba(46, 229, 157, 0.3);
    transform: translateX(8px);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(46, 229, 157, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;
const InfoLabel = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
`;
const InfoValue = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(46, 229, 157, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: #0a0a0f;
    transform: translateY(-4px);
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
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  @media ${props => props.theme.breakpoints.mobile} { grid-template-columns: 1fr; }
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.fullWidth ? '1.25rem' : '0'};
`;

const FormLabel = styled.label`
  display: block;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
`;

const FormInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(46, 229, 157, 0.1);
  }
  &::placeholder { color: ${props => props.theme.colors.text.muted}; }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  color: white;
  font-size: 0.95rem;
  min-height: 130px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(46, 229, 157, 0.1);
  }
  &::placeholder { color: ${props => props.theme.colors.text.muted}; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(10, 10, 15, 0.3);
  border-top-color: #0a0a0f;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: #0a0a0f;
  padding: 1.1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(46, 229, 157, 0.3);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StatusMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  animation: ${fadeIn} 0.3s ease;
  
  background: ${props => props.type === 'success'
    ? 'rgba(46, 229, 157, 0.1)'
    : 'rgba(239, 68, 68, 0.1)'};
  border: 1px solid ${props => props.type === 'success'
    ? 'rgba(46, 229, 157, 0.3)'
    : 'rgba(239, 68, 68, 0.3)'};
  color: ${props => props.type === 'success' ? '#2EE59D' : '#EF4444'};
  
  svg { font-size: 1.1rem; flex-shrink: 0; }
`;

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', text: '' }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ type: 'error', text: 'Failed to send message. Please try again or email me directly.' });
    } finally {
      setSending(false);
    }
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
                <InfoValue>amandubeycom@gmail.com</InfoValue>
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
              <SocialLink href="https://www.linkedin.com/in/aman-dubey-92005138b/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/Amandubey9326" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/amann.__03/" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            {/* Status message */}
            {status && (
              <StatusMessage type={status.type}>
                {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                {status.text}
              </StatusMessage>
            )}

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
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={sending}>
              {sending ? (
                <><Spinner /> Sending...</>
              ) : (
                <>Send Message <FiSend /></>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Content>
    </SectionContainer>
  );
};

export default ContactSection;

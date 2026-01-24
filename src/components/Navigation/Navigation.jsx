import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  letter-spacing: -0.5px;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.lg};
  margin: 0;
  padding: 0;
  
  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`;

const MenuItem = styled.li`
  a {
    color: ${props => props.theme.colors.text.secondary};
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
    
    &:hover, &.active {
      color: ${props => props.theme.colors.text.primary};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
  
  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 27, 75, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 1001;
  
  @media ${props => props.theme.breakpoints.tablet}, ${props => props.theme.breakpoints.desktop} {
    display: none;
  }
`;

const MobileMenuItem = styled.a`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.lg};
  right: ${props => props.theme.spacing.lg};
  background: none;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const Navigation = ({ isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home', isActive: true },
    { label: 'About', href: '#service' },
    // { label: 'Portfolio', href: '#portfolio' },
    // { label: 'Service', href: '#service' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = (href, label) => {
    // Special handling for Contact button
    if (label === 'Contact') {

      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <NavContainer isScrolled={isScrolled}>
        <NavContent>
          <Logo onClick={() => handleMenuClick('#home', 'Home')}>
            AD
          </Logo>
          
          <MenuItems>
            {menuItems.map((item) => (
              <MenuItem key={item.label}>
                <a 
                  onClick={() => handleMenuClick(item.href, item.label)}
                  className={item.isActive ? 'active' : ''}
                >
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </MenuItems>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            <FiMenu />
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>
          <FiX />
        </CloseButton>
        {menuItems.map((item) => (
          <MobileMenuItem 
            key={item.label}
            onClick={() => handleMenuClick(item.href, item.label)}
          >
            {item.label}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navigation;
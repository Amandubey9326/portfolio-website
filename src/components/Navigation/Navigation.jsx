import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 4rem;
  background: ${props => props.isScrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1rem 1.5rem;
  }
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.2rem;
    color: #0a0a0f;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
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
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
    cursor: pointer;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${props => props.theme.colors.primary};
      transition: width 0.3s ease;
    }
    
    &:hover, &.active {
      color: ${props => props.theme.colors.primary};
      
      &::after {
        width: 100%;
      }
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: ${props => props.theme.colors.primary};
  color: #0a0a0f;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  
  @media ${props => props.theme.breakpoints.mobile} {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 1001;
`;

const MobileMenuItem = styled.a`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: #0a0a0f;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navigation = ({ isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home', isActive: true },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = (href) => {
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavContainer isScrolled={isScrolled}>
        <NavContent>
          <Logo onClick={() => handleMenuClick('#home')}>
            <div className="logo-icon">AD</div>
            <span>AMAN</span>
          </Logo>
          
          <MenuItems>
            {menuItems.map((item) => (
              <MenuItem key={item.label}>
                <a 
                  onClick={() => handleMenuClick(item.href)}
                  className={item.isActive ? 'active' : ''}
                >
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </MenuItems>
          
          <MenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <FiMenu />
          </MenuButton>
        </NavContent>
      </NavContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
          <FiX />
        </CloseButton>
        {menuItems.map((item) => (
          <MobileMenuItem 
            key={item.label}
            onClick={() => handleMenuClick(item.href)}
          >
            {item.label}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navigation;

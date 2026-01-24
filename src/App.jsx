import React, { useState, useEffect } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import GlobalStyles from './styles/GlobalStyles';
import BackgroundPattern from './components/UI/BackgroundPattern';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import profileImage from './assets/me.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const profileData = {
    name: "Aman Dubey",
    title: "Technical Support Engineer — React Web Developer",
    description: "Technical Support Engineer and aspiring Web Developer with 1.5 years of experience supporting and building web applications using React, JavaScript, and REST APIs. Strong expertise in troubleshooting customer-reported issues, reproducing bugs, API validation, and assisting developers with SDK integration. Hands-on experience in frontend development, debugging, and Agile-based collaboration.",
    profileImage: profileImage,
    socialLinks: [
      { platform: 'play', url: '#', icon: 'FiPlay' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/aman-dubey-92005138b/', icon: 'FiLinkedin' },
      { platform: 'github', url: 'https://github.com/Amandubey9326', icon: 'FiGithub' },
      { platform: 'instagram', url: 'https://www.instagram.com/amann.__03/', icon: 'FiInstagram' },
      { platform: 'youtube', url: 'https://youtube.com', icon: 'FiYoutube' },
    ]
  };

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BackgroundPattern variant="combined" />
      <Navigation isScrolled={isScrolled} />
      
      {/* Home Section - Full Screen */}
      <section id="home" style={{ minHeight: '100vh' }}>
        <HeroSection profileData={profileData} />
      </section>
      
      {/* About Section - Full Screen */}
      <section id="about" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          width: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          padding: '4rem 3rem',
          borderRadius: '30px',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2)',
          animation: 'fadeInUp 0.8s ease-out',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 12px 48px 0 rgba(139, 92, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.2)';
        }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '3rem', 
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700',
            animation: 'slideInLeft 0.6s ease-out'
          }}>About Me</h2>
          <div style={{ 
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '2rem',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            borderLeft: '4px solid #8B5CF6',
            animation: 'slideInRight 0.8s ease-out',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
            e.currentTarget.style.transform = 'translateX(10px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            <h3 style={{ color: '#8B5CF6', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>Technical Skills</h3>
            <p style={{ 
              color: '#E2E8F0', 
              fontSize: '1.05rem', 
              lineHeight: '1.9',
              margin: 0
            }}>
              <strong style={{ color: '#A78BFA' }}>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Web Design<br/>
              <strong style={{ color: '#A78BFA' }}>Web Development:</strong> Component-Based Architecture, State Management, API Integration<br/>
              <strong style={{ color: '#A78BFA' }}>Tools & Technologies:</strong> REST APIs, Postman, Git, GitHub, JIRA, Browser DevTools<br/>
              <strong style={{ color: '#A78BFA' }}>Databases:</strong> MySQL (Basic Queries)
            </p>
          </div>
          <div style={{ 
            background: 'rgba(236, 72, 153, 0.1)',
            padding: '2rem',
            borderRadius: '20px',
            borderLeft: '4px solid #EC4899',
            animation: 'slideInRight 1s ease-out',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.15)';
            e.currentTarget.style.transform = 'translateX(10px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            <h3 style={{ color: '#EC4899', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>Education</h3>
            <p style={{ 
              color: '#E2E8F0', 
              fontSize: '1.05rem', 
              lineHeight: '1.9',
              margin: 0
            }}>
              <strong style={{ color: '#F9A8D4' }}>Bachelor of Computer Applications (BCA)</strong><br/>
              Tilak Maharashtra Vidyapeeth, 2024
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section - Full Screen */}
      <section id="portfolio" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem'
      }}>
        <HeroSection profileData={profileData} />
      </section>
      
      {/* Service Section - Full Screen */}
      <section id="service" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          padding: '3rem',
          borderRadius: '30px',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2)',
          animation: 'fadeInUp 0.8s ease-out',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 12px 48px 0 rgba(139, 92, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.2)';
        }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700',
            animation: 'slideInLeft 0.6s ease-out'
          }}>Professional Experience</h2>
          <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ 
              marginBottom: '2.5rem',
              animation: 'slideInRight 0.8s ease-out',
              transition: 'all 0.3s ease',
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '2rem',
              borderRadius: '15px',
              borderLeft: '4px solid #8B5CF6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
            }}>
              <h3 style={{ color: '#8B5CF6', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Technical Support Engineer</h3>
              <p style={{ color: '#A78BFA', fontSize: '1.1rem', marginBottom: '0.3rem' }}>CometChat, India</p>
              <p style={{ color: '#CBD5E0', fontSize: '0.95rem', marginBottom: '1rem' }}>April 2025 – Present</p>
              <ul style={{ color: '#E2E8F0', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>Provided technical support to developers integrating chat and messaging features into React applications</li>
                <li>Investigated, reproduced, and documented customer-reported issues related to SDK integration and APIs</li>
                <li>Assisted customers in debugging issues by analyzing logs, API responses, and browser network activity</li>
                <li>Collaborated with engineering and product teams to escalate bugs and verify fixes</li>
                <li>Validated real-time messaging behavior across multiple scenarios to ensure expected functionality</li>
              </ul>
            </div>
            <div style={{
              animation: 'slideInRight 1s ease-out',
              transition: 'all 0.3s ease',
              background: 'rgba(236, 72, 153, 0.1)',
              padding: '2rem',
              borderRadius: '15px',
              borderLeft: '4px solid #EC4899'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
            }}>
              <h3 style={{ color: '#EC4899', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Intern – QA / Technical Support</h3>
              <p style={{ color: '#F9A8D4', fontSize: '1.1rem', marginBottom: '0.3rem' }}>CometChat, India</p>
              <p style={{ color: '#CBD5E0', fontSize: '0.95rem', marginBottom: '1rem' }}>Oct 2024 – April 2025</p>
              <ul style={{ color: '#E2E8F0', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>Executed functional and regression testing for web and mobile applications</li>
                <li>Supported validation of bug fixes and feature enhancements before release</li>
                <li>Worked closely with developers to understand application behavior and edge cases</li>
                <li>Gained hands-on experience with Agile workflows and defect life cycle management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Full Screen */}
      <section id="contact" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem'
      }}>
        <div style={{ 
          maxWidth: '700px', 
          width: '100%',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          padding: '4rem 3rem',
          borderRadius: '30px',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2)',
          animation: 'fadeInUp 0.8s ease-out',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 12px 48px 0 rgba(139, 92, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.2)';
        }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '3rem', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700',
            animation: 'slideInLeft 0.6s ease-out'
          }}>Contact Me</h2>
          <p style={{ 
            color: '#CBD5E0', 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            marginBottom: '3rem',
            maxWidth: '500px',
            margin: '0 auto 3rem',
            animation: 'fadeIn 1s ease-out'
          }}>
            I'm always open to discussing new projects, job opportunities, or collaborations. Feel free to reach out through any of the platforms below.
          </p>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            textAlign: 'left',
            maxWidth: '550px',
            margin: '0 auto'
          }}>
            <div style={{ 
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '1.5rem 2rem',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              animation: 'slideInRight 0.8s ease-out',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0) scale(1)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
            }}>
              <span style={{ 
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                padding: '0.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '50px',
                height: '50px',
                animation: 'pulse 2s infinite'
              }}>📧</span>
              <div style={{ flex: 1 }}>
                <strong style={{ color: '#A78BFA', display: 'block', marginBottom: '0.3rem', fontSize: '0.9rem' }}>Email</strong>
                <a href="mailto:amandubeycom2@gmail.com" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  fontSize: '1.05rem',
                  transition: 'color 0.3s',
                  fontWeight: '500'
                }} onMouseOver={(e) => e.target.style.color = '#8B5CF6'} onMouseOut={(e) => e.target.style.color = 'white'}>
                  amandubeycom2@gmail.com
                </a>
              </div>
            </div>
            
            <div style={{ 
              background: 'rgba(236, 72, 153, 0.1)',
              padding: '1.5rem 2rem',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              animation: 'slideInRight 1s ease-out',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0) scale(1)';
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
            }}>
              <span style={{ 
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                padding: '0.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '50px',
                height: '50px',
                animation: 'pulse 2s infinite 0.3s'
              }}>�</span>
              <div style={{ flex: 1 }}>
                <strong style={{ color: '#F9A8D4', display: 'block', marginBottom: '0.3rem', fontSize: '0.9rem' }}>Phone</strong>
                <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: '500' }}>+91 9326757725</span>
              </div>
            </div>
            
            <div style={{ 
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '1.5rem 2rem',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              animation: 'slideInRight 1.2s ease-out',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0) scale(1)';
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
            }}>
              <span style={{ 
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                padding: '0.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '50px',
                height: '50px',
                animation: 'pulse 2s infinite 0.6s'
              }}>📍</span>
              <div style={{ flex: 1 }}>
                <strong style={{ color: '#A78BFA', display: 'block', marginBottom: '0.3rem', fontSize: '0.9rem' }}>Location</strong>
                <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: '500' }}>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default App

export const theme = {
  colors: {
    primary: '#8B5CF6', // Purple
    secondary: '#3B82F6', // Blue
    accent: '#06B6D4', // Cyan
    background: {
      start: '#1E1B4B', // Dark purple
      end: '#1E3A8A', // Dark blue
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E2E8F0',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.2)',
    },
  },
  breakpoints: {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    full: '50%',
  },
};
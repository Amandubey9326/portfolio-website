export const theme = {
  colors: {
    primary: '#2EE59D', // Green accent (matching reference)
    secondary: '#1a1a2e', // Dark background
    accent: '#2EE59D', // Green accent
    background: {
      start: '#0a0a0f', // Very dark
      end: '#12121a', // Dark blue-black
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
      muted: '#6B7280',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(46, 229, 157, 0.3)',
    },
    dark: '#0a0a0f',
    surface: '#16161d',
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

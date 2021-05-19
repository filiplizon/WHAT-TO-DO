export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  buttons: {
    primary: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: '5px',
      borderRadius: '50%',
      bg: 'primary',
      color: 'background',
      outlineColor: 'primary',
      transitionDuration: '.2s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    secondary: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: '5px',
      borderRadius: '50%',
      outlineColor: 'primary',
      transitionDuration: '.2s',
      cursor: 'pointer',
      fontSize: 3,
      bg: 'background',
      color: 'primary',
    },
  },
  forms: {
    label: {
      fontWeight: 'bold',
    },
    input: {
      borderBottom: '1px solid',
      borderColor: 'primary',
      outlineColor: 'primary',
    },
    textarea: {
      fontFamily: 'body',
      borderBottom: '1px solid',
      borderColor: 'primary',
      outlineColor: 'primary',
    },
  },
  shadows: {
    primary: '0 10px 30px -10px hsla(0, 0%, 0%, 0.2)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'regular',
    },
  },
  breakpoints: ['360px', '768px', '1024px', '1200px'],
};

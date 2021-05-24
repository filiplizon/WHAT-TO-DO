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
  text: {
    heading: {
      fontWeight: 'bold',
      color: 'primary',
    },
  },
  buttons: {
    primary: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: '5px',
      bg: 'primary',
      color: 'background',
      outlineColor: 'primary',
      transitionDuration: '.2s',
      cursor: 'pointer',
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
      boxShadow: 'primary',
    },
    textarea: {
      fontFamily: 'body',
      borderBottom: '1px solid',
      borderColor: 'primary',
      outlineColor: 'primary',
      boxShadow: 'primary',
      resize: 'none',
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

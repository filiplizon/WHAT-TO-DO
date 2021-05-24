import React from 'react';
import { Flex } from 'theme-ui';
import { keyframes } from '@emotion/react';

const preload = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const Preloader = () => (
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100vw',
      height: '100vh',
      bg: 'primary',
      '&>div': {
        width: '64px',
        height: '64px',
        border: '8px solid #fff',
        borderRadius: '50%',
        animation: `${preload} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
        borderColor: '#fff transparent transparent transparent',
      },
    }}
  >
    <div />
  </Flex>
);

export default Preloader;

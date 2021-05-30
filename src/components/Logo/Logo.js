import React from 'react';
import { Box, Text } from 'theme-ui';

const Logo = () => (
  <Box
    sx={{
      fontWeight: 'bold',
      fontSize: [2, 3, 4, 5, 4],
    }}
  >
    <Text>WHAT </Text>
    <Text
      sx={{
        color: 'primary',
      }}
    >
      TO DO
    </Text>
  </Box>
);

export default Logo;

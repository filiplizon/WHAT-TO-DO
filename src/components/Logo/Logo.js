import React from 'react';
import { Box, Text } from 'theme-ui';

const Logo = () => (
  <Box
    sx={{
      fontWeight: 'bold',
      fontSize: [3, null, 4, 5],
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

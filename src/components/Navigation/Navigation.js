import React from 'react';
import { Grid, Text, Input, Box, Button } from 'theme-ui';
import { AiFillEyeInvisible as EyeIcon } from 'react-icons/ai';

const Navigation = () => (
  <Grid
    as="nav"
    sx={{
      width: '100vw',
      height: '10vh',
      position: 'fixed',
      top: 0,
      px: '3vw',
      gridTemplateColumns: ['0.3fr 0.7fr 0.25fr', null, 'repeat(3, 1fr)'],
      alignItems: 'center',
      justifyItems: 'center',
      backgroundColor: 'background',
      boxShadow: 'primary',
      zIndex: 1000,
    }}
  >
    <Box
      sx={{
        fontWeight: 'bold',
        fontSize: [3, null, 4, 5],
        justifySelf: [null, null, 'flex-start'],
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
    <Input
      placeholder="Search"
      sx={{
        fontSize: [2, null, 4],
        outlineColor: 'primary',
      }}
    />
    <Button
      title="Hide completed"
      sx={{
        width: ['40px', null, '45px', '50px'],
        height: ['40px', null, '45px', '50px'],
        justifySelf: [null, null, 'flex-end'],
        fontSize: [5, 7],
      }}
    >
      <EyeIcon />
    </Button>
  </Grid>
);

export default Navigation;

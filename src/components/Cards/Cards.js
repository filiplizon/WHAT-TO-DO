import React from 'react';
import { Flex, Grid } from 'theme-ui';
import Card from 'components/Card/Card';

const Cards = () => (
  <Flex
    as="main"
    sx={{
      justifyContent: 'center',
    }}
  >
    <Grid
      sx={{
        width: ['100%', null, '90%'],
        minHeight: '90vh',
        gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
        gap: [null, null, '50px'],
        mt: '10vh',
        px: ['3vw', null, 0],
        py: '5vw',
        alignItems: 'center',
        justifyItems: 'center',
        zIndex: 1,
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  </Flex>
);

export default Cards;

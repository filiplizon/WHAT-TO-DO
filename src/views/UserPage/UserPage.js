import React from 'react';
import { Button } from 'theme-ui';
import Navigation from 'components/Navigation/Navigation';
import Cards from 'components/Cards/Cards';
import NewItemBar from 'components/NewItemBar/NewItemBar';

const UserPage = () => (
  <>
    <Navigation />
    <Cards />
    <Button
      sx={{
        width: ['60px', null, '70px', '80px'],
        height: ['60px', null, '70px', '80px'],
        position: 'fixed',
        bottom: ['15px', null, '25px', '30px'],
        right: ['15px', null, '25px', '30px'],
        fontSize: [6, null, null, 7],
        p: '0',
        zIndex: [null, null, 1001],
      }}
    >
      +
    </Button>
    <NewItemBar />
  </>
);

export default UserPage;

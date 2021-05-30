import React from 'react';
import { Button } from 'theme-ui';

const NewItemButton = ({ isVisible, toggleNewItemBarVisibilityFn }) => (
  <Button
    onClick={(e) => {
      isVisible ? e.preventDefault() : toggleNewItemBarVisibilityFn(!isVisible);
    }}
    sx={{
      width: ['40px', '55px', '60px', '75px', '60px'],
      height: ['40px', '55px', '60px', '75px', '60px'],
      position: 'fixed',
      bottom: ['15px', null, '25px', '30px'],
      right: ['15px', null, '25px', '30px'],
      borderRadius: '50%',
      fontSize: [4, 5, null, 6, 5],
      zIndex: [1000, null, 1001],
      '&:hover': {
        transform: isVisible ? 'scale(1)' : 'scale(1.1)',
      },
    }}
  >
    +
  </Button>
);

export default NewItemButton;

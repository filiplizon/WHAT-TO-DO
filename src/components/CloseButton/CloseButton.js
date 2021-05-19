import React from 'react';
import { Button } from '@theme-ui/components';
import { GrClose as CloseIcon } from 'react-icons/gr';

const CloseButton = () => (
  <Button
    variant="secondary"
    sx={{
      position: 'absolute',
      top: ['15px', null, '25px', '35px', '45px'],
      right: ['15px', null, '25px', '35px', '45px'],
      fontSize: [3, 4, 5, 6, 5],
    }}
  >
    <CloseIcon />
  </Button>
);

export default CloseButton;

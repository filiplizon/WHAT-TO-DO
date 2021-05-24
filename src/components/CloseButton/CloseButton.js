import React from 'react';
import { Button } from '@theme-ui/components';
import { GrClose as CloseIcon } from 'react-icons/gr';

const CloseButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant="secondary"
    sx={{
      fontSize: [3, 4, 5, 6, 5],
    }}
  >
    <CloseIcon />
  </Button>
);

export default CloseButton;

import React from 'react';
import { Flex, Heading, Close } from 'theme-ui';

const ClosePanel = ({ toggleNewItemBarVisibilityFn }) => (
  <Flex
    sx={{
      width: '100%',
      borderBottom: (theme) => `2px solid ${theme.colors.primary}`,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Heading
      as="h3"
      sx={{
        fontSize: [1, 2, 3, 4, 2],
      }}
    >
      new ToDo
    </Heading>
    <Close
      onClick={toggleNewItemBarVisibilityFn}
      sx={{
        cursor: 'pointer',
        transition: ' transform .2s',
        '&:hover': {
          transform: 'scale(1.5)',
        },
      }}
    />
  </Flex>
);

export default ClosePanel;

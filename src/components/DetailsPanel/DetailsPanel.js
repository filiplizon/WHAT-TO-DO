import React from 'react';
import { Flex } from 'theme-ui';
import Details from 'components/Details/Details';
import Filter from 'components/Filter/Filter';

const DetailsPanel = ({ isOpen }) => (
  <Flex
    sx={{
      position: 'fixed',
      right: 0,
      width: ['100%', null, null, '70%', '50%'],
      p: '20px',
      mt: '10vh',
      borderBottom: (theme) => `5px solid ${theme.colors.primary}`,
      borderLeft: (theme) => [null, null, null, `5px solid ${theme.colors.primary}`],
      flexDirection: ['column', null, 'row'],
      alignItems: 'center',
      justifyContent: 'space-around',
      fontSize: [null, null, 4],
      bg: 'background',
      color: 'primary',
      transform: isOpen ? 'translateY(0)' : 'translateY(-105%)',
      transition: 'transform .3s ease-in-out',
      zIndex: 999,
    }}
  >
    <Filter />
    <Details />
  </Flex>
);

export default DetailsPanel;

import React from 'react';
import { Flex as Header, Heading as Title } from 'theme-ui';
import Buttons from 'components/ItemButtons/ItemButtons';

const ItemHeader = (item) => (
  <Header
    as="header"
    sx={{
      justifyContent: 'space-around',
      alignItems: 'center',
      px: '10px',
      py: '5px',
      borderEndEndRadius: '20px',
      backgroundColor: 'primary',
      color: 'background',
    }}
  >
    <Title
      sx={{
        color: 'background',
        width: '60%',
        fontSize: [3, 4, null],
        overflowX: 'hidden',
      }}
    >
      {item.name ? item.name : 'TO DO'}
    </Title>
    <Buttons item={item} />
  </Header>
);

export default ItemHeader;

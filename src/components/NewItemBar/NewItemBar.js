import React from 'react';
import { Grid } from 'theme-ui';
import ClosePanel from 'components/ClosePanel/ClosePanel';
import Form from 'components/NewItemForm/NewItemForm';

const Sidebar = ({ isVisible, toggleNewItemBarVisibilityFn }) => (
  <>
    <Grid
      sx={{
        width: ['100vw', null, '60vw', null, '30vw'],
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        gridTemplateRows: ['0.1fr  2fr', null, '0.05fr 0.8fr'],
        px: ['3vw', null, null, '4vw'],
        py: '20px',
        borderLeft: [null, null, '10px solid'],
        borderColor: 'primary',
        bg: 'background',
        color: 'primary',
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .3s ease-in-out',
        zIndex: 1000,
      }}
    >
      <ClosePanel toggleNewItemBarVisibilityFn={toggleNewItemBarVisibilityFn} />
      <Form toggleNewItemBarVisibilityFn={toggleNewItemBarVisibilityFn} />
    </Grid>
  </>
);

export default Sidebar;

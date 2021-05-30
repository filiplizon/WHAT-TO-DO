import React, { useState } from 'react';
import { Grid, Button } from 'theme-ui';
import Logo from 'components/Logo/Logo';
import Input from 'components/SearchInput/SearchInput';
import DetailsPanel from 'components/DetailsPanel/DetailsPanel';
import { BsArrowDown as ArrowIcon } from 'react-icons/bs';

const Navigation = () => {
  const [isOpen, setDetailsBoxOpen] = useState(false);

  return (
    <>
      <DetailsPanel isOpen={isOpen} />
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
        <Logo />
        <Input />
        <Button
          onClick={() => setDetailsBoxOpen(!isOpen)}
          sx={{
            width: ['30px', '35px', '40px', '55px', '40px'],
            height: ['30px', '35px', '40px', '55px', '40px'],
            borderRadius: '50%',
            fontSize: [3, 5, 6],
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform .3s ease-in-out',
          }}
        >
          <ArrowIcon />
        </Button>
      </Grid>
    </>
  );
};

export default Navigation;

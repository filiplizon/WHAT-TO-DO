import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchInputValueState, todoListFilterState } from 'atoms/atoms';
import { Grid, Input, Button } from 'theme-ui';
import DetailsPanel from 'components/DetailsPanel/DetailsPanel';
import { BsArrowDown as ArrowIcon } from 'react-icons/bs';
import Logo from 'components/Logo/Logo';

const Navigation = () => {
  const [isOpen, setDetailsBoxOpen] = useState(false);
  const setSearchInput = useSetRecoilState(searchInputValueState);
  const setFilter = useSetRecoilState(todoListFilterState);

  const handleInputChange = ({ target: { value } }) => {
    setSearchInput(value);
  };

  const updateFilter = ({ target: { name } }) => {
    setFilter(name);
  };

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
        <Input
          name="Search by content"
          onClick={updateFilter}
          onChange={handleInputChange}
          placeholder="Search"
          sx={{
            width: ['100%', null, null, null, '60%'],
            fontSize: [2, null, 4],
          }}
        />
        <Button
          onClick={() => setDetailsBoxOpen(!isOpen)}
          sx={{
            width: ['40px', null, '45px', '50px'],
            height: ['40px', null, '45px', '50px'],
            borderRadius: '50%',
            fontSize: [5, 7],
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

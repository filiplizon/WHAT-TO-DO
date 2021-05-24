import React, { useState } from 'react';
import { Button } from 'theme-ui';
import Navigation from 'components/Navigation/Navigation';
import ToDoList from 'components/ToDoList/ToDoList';
import NewItemBar from 'components/NewItemBar/NewItemBar';

const UserPage = () => {
  const [isVisible, setNewItemBarVisibility] = useState(false);

  return (
    <>
      <Navigation />
      <ToDoList />
      <Button
        onClick={(e) => {
          isVisible ? e.preventDefault() : setNewItemBarVisibility(!isVisible);
        }}
        sx={{
          width: ['60px', null, '70px', '80px'],
          height: ['60px', null, '70px', '80px'],
          position: 'fixed',
          bottom: ['15px', null, '25px', '30px'],
          right: ['15px', null, '25px', '30px'],
          borderRadius: '50%',
          fontSize: [6, null, null, 7],
          p: '0',
          zIndex: [1000, null, 1001],
          '&:hover': {
            transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          },
        }}
      >
        +
      </Button>
      <NewItemBar
        isVisible={isVisible}
        toggleNewItemBarVisibilityFn={() => setNewItemBarVisibility(!isVisible)}
      />
    </>
  );
};

export default UserPage;

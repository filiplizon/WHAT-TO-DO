import React, { useState } from 'react';
import Navigation from 'components/Navigation/Navigation';
import ToDoList from 'components/ToDoList/ToDoList';
import Button from 'components/NewItemButton/NewItemButton';
import NewItemBar from 'components/NewItemBar/NewItemBar';

const UserPage = () => {
  const [isVisible, setNewItemBarVisibility] = useState(false);

  return (
    <>
      <Navigation />
      <ToDoList />
      <Button isVisible={isVisible} toggleNewItemBarVisibilityFn={setNewItemBarVisibility} />
      <NewItemBar
        isVisible={isVisible}
        toggleNewItemBarVisibilityFn={() => setNewItemBarVisibility(!isVisible)}
      />
    </>
  );
};

export default UserPage;

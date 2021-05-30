import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { toDosState } from 'atoms/atoms';
import { sendRequest, removeItemAtIndex, replaceItemAtIndex } from 'helpers/helpers';
import { Flex, Button } from 'theme-ui';
import { MdDone as DoneIcon } from 'react-icons/md';
import { AiFillDelete as RemoveIcon } from 'react-icons/ai';
import { BiShow as InfoIcon } from 'react-icons/bi';

const ItemButtons = ({ item: { item } }) => {
  const [todoList, setTodoList] = useRecoilState(toDosState);
  const [redirect, setRedirect] = useState(false);

  const index = todoList.findIndex((listItem) => listItem === item);

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
    sendRequest(item.id, 'DELETE');
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });
    setTodoList(newList);
    sendRequest(item.id, 'PUT', { completed: !item.completed });
  };

  const handleRedirect = () => {
    setRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to={`/WHAT-TO-DO/${item.id}`} />;
  }

  return (
    <Flex
      sx={{
        alignItems: 'center',
      }}
    >
      <Button
        onClick={handleRedirect}
        variant="secondary"
        sx={{
          mr: '10px',
        }}
      >
        <InfoIcon />
      </Button>
      <Button
        value="itemAction"
        onClick={deleteItem}
        variant="secondary"
        sx={{
          mr: '10px',
          '&:hover': { color: 'red' },
        }}
      >
        <RemoveIcon />
      </Button>
      <Button
        value="itemAction"
        onClick={toggleItemCompletion}
        variant="secondary"
        sx={{
          bg: item.completed && '#56E39F',
          color: item.completed && 'background',
          '&:hover': { backgroundColor: '#56E39F', color: 'background' },
        }}
      >
        <DoneIcon />
      </Button>
    </Flex>
  );
};

export default ItemButtons;

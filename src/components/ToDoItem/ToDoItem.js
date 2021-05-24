import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toDosState, currentItemState, charCountState } from 'atoms/atoms';
import { Card, Textarea as ToDoContent, Flex, Heading, Button, Text } from 'theme-ui';
import { MdDone as DoneIcon } from 'react-icons/md';
import { AiFillDelete as RemoveIcon } from 'react-icons/ai';
import { BiShow as InfoIcon } from 'react-icons/bi';

const removeItemAtIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];

const replaceItemAtIndex = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

const ToDoItem = ({ item }) => {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState('');
  const [todoList, setTodoList] = useRecoilState(toDosState);
  const [currentItem, setCurrentItem] = useRecoilState(currentItemState);
  const setCharCounter = useSetRecoilState(charCountState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  const editItemText = (value) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...currentItem,
      title: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });
    setTodoList(newList);
  };

  const handleCardClick = ({ target }) => {
    const { id } = target.closest('li');
    const currentItem = todoList.find((toDo) => toDo.id.toString() === id);
    setId(id);
    setCurrentItem(currentItem);
    setCharCounter(currentItem.title.length);
  };

  const handleRedirect = () => {
    setRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to={`/WHAT-TO-DO/${id}`} />;
  }

  return (
    <Card
      onClick={handleCardClick}
      as="li"
      id={item.id}
      completed={item.completed}
      sx={{
        position: 'relative',
        height: ['30vh', null, '25vh'],
        width: ['100%', null, '40vw', '25vw'],
        display: 'grid',
        gridTemplateRows: '0.2fr 1fr',
        mb: '20px',
        boxShadow: 'primary',
        transition: 'transform .2s',
        overflow: 'hidden',
        opacity: item.completed && 0.5,
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.03)', opacity: item.completed && 1 },
      }}
    >
      <Text sx={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 1 }}>
        Chars: {item.title.length}
      </Text>
      <Flex
        as="header"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '10px',
          py: '5px',
          borderEndEndRadius: '20px',
          backgroundColor: 'primary',
          color: 'background',
        }}
      >
        <Heading
          sx={{
            color: 'background',
            width: '75%',
            fontSize: [null, null, 5],
            overflowX: 'hidden',
          }}
        >
          {item.name ? item.name : 'To Do'}
        </Heading>

        <Flex>
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
      </Flex>
      <ToDoContent
        defaultValue={item.title}
        onChange={({ target: { value } }) => editItemText(value)}
        sx={{
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          border: 'none',
          p: '30px',
          lineHeight: '100%',
          fontSize: [null, 3, 3, 4],
          outlineColor: 'transparent',
        }}
      />
    </Card>
  );
};

export default ToDoItem;

import React from 'react';

import { useRecoilState } from 'recoil';
import { toDosState } from 'atoms/atoms';
import { sendRequest, replaceItemAtIndex } from 'helpers/helpers';
import { Card, Textarea as ItemContent, Text } from 'theme-ui';
import ItemHeader from 'components/ItemHeader/ItemHeader';

const ToDoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(toDosState);

  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target }) => {
    const content = target.value;
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      title: content,
    });
    setTodoList(newList);
    sendRequest(item.id, 'PUT', { title: content });
  };

  return (
    <Card
      as="li"
      id={item.id}
      completed={item.completed}
      sx={{
        position: 'relative',
        height: ['30vh', null, '22vh', '20vh', '30vh'],
        width: ['100%', null, '40vw', '25vw'],
        display: 'grid',
        gridTemplateRows: '0.2fr 1fr',
        mb: '20px',
        boxShadow: 'primary',
        transition: 'transform .2s',
        opacity: item.completed && 0.5,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.03)', opacity: item.completed && 1 },
      }}
    >
      <ItemHeader item={item} />
      <ItemContent
        defaultValue={item.title}
        onChange={editItemText}
        sx={{
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          border: 'none',
          p: '30px',
          lineHeight: '100%',
          fontSize: [null, 3, null, null, 3],
          outlineColor: 'transparent',
        }}
      />
      <Text sx={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: [0, 2, null] }}>
        Chars: {item.title.length}
      </Text>
    </Card>
  );
};

export default ToDoItem;

import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from 'atoms/atoms';
import { Flex, Grid } from 'theme-ui';
import ToDoItem from 'components/ToDoItem/ToDoItem';

const ToDoList = () => {
  const toDos = useRecoilValue(filteredTodoListState);
  const toDosItems = toDos.map((item) => <ToDoItem key={item.id} item={item} />);

  return (
    <Flex
      as="main"
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid
        as="ul"
        sx={{
          width: ['100%', null, '90%'],
          minHeight: '90vh',
          gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
          gap: [null, null, '50px'],
          mt: '10vh',
          px: ['3vw', null, 0],
          py: '5vw',
          alignItems: 'center',
          justifyItems: 'center',
          zIndex: 1,
        }}
      >
        {toDosItems}
      </Grid>
    </Flex>
  );
};
export default ToDoList;

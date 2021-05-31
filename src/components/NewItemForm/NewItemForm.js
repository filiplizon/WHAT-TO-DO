import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { toDosState } from 'atoms/atoms';
import { sendRequest, getId } from 'helpers/helpers';
import { Container, Grid, Label, Textarea, Input, Button } from 'theme-ui';

const NewItemForm = ({ toggleNewItemBarVisibilityFn }) => {
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const setToDoList = useSetRecoilState(toDosState);

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleTextAreaChange = ({ target: { value } }) => {
    setTextAreaValue(value);
  };

  const addNewToDo = async () => {
    if (textAreaValue) {
      const item = {
        user_id: getId(),
        name: inputValue ? inputValue : 'TO DO',
        title: textAreaValue,
        completed: false,
      };
      const newItem = await sendRequest('', 'POST', item);
      setToDoList((prevState) => [newItem, ...prevState]);
      setTextAreaValue('');
      setInputValue('');
      toggleNewItemBarVisibilityFn();
    }
  };

  return (
    <Grid
      as="form"
      sx={{
        height: '100%',
        gridTemplateRows: [
          '0.1fr 0.9fr 0.2fr',
          null,
          '0.1fr 0.6fr 0.1fr',
          '0.1fr 0.4fr 0.1fr',
          '0.1fr 0.7fr 0.2fr',
        ],
        mt: ['20px', null, '100px', '200px', '60px'],
      }}
    >
      <Container
        sx={{
          alignContent: 'center',
        }}
      >
        <Label
          sx={{
            fontSize: [3, 4, 5, null, 4],
            mb: ['5px', null, '10px'],
          }}
        >
          Title:
        </Label>
        <Input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="To Do"
          sx={{
            fontSize: [2, 3, 4, null, 3],
            bg: 'background',
            color: 'text',
          }}
        />
      </Container>
      <Container>
        <Label
          sx={{
            fontSize: [3, 4, 5, null, 4],
            mb: ['5px', null, '10px'],
          }}
        >
          Text:
        </Label>
        <Textarea
          value={textAreaValue}
          onChange={handleTextAreaChange}
          sx={{
            height: ['90%', null, null, '75%'],
            fontSize: [2, 3, 4, null, 3],
            bg: 'background',
            color: 'text',
          }}
        />
      </Container>
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addNewToDo();
        }}
        variant="primary"
        sx={{
          width: '30%',
          height: ['35px', '40px', '45px', '55px', '40px'],
          alignSelf: 'center',
          borderRadius: '5px',
          mx: 'auto',
          fontSize: [null, null, 4, 5, 3],
          boxShadow: 'primary',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        Add
      </Button>
    </Grid>
  );
};

export default NewItemForm;

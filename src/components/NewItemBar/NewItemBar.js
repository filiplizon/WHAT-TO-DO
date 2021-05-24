import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { toDosState } from 'atoms/atoms';
import { Container, Grid, Label, Close, Textarea, Input, Button, Heading, Flex } from 'theme-ui';

let id = 1000;
const getId = () => id++;

const Sidebar = ({ isVisible, toggleNewItemBarVisibilityFn }) => {
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const setToDos = useSetRecoilState(toDosState);

  const addNewToDo = () => {
    textAreaValue &&
      setToDos((prevState) => [
        {
          id: getId(),
          name: inputValue ? inputValue : 'To Do',
          title: textAreaValue,
          completed: false,
        },
        ...prevState,
      ]);
    setTextAreaValue('');
    setInputValue('');
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleTextAreaChange = ({ target: { value } }) => {
    setTextAreaValue(value);
  };

  return (
    <>
      <Grid
        sx={{
          width: ['100vw', null, '60vw', null, '30vw'],
          height: '100vh',
          position: 'fixed',
          top: 0,
          right: 0,
          gridTemplateRows: ['0.1fr  2fr', null, '0.05fr 0.8fr '],
          px: ['3vw', null, null, '5vw'],
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
        <Flex
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid',
            borderColor: 'primary',
          }}
        >
          <Heading
            as="h3"
            sx={{
              fontSize: [1, 2, 3, 4, 2],
            }}
          >
            new ToDo
          </Heading>
          <Close
            onClick={toggleNewItemBarVisibilityFn}
            sx={{
              cursor: 'pointer',
              transition: ' transform .2s',
              '&:hover': {
                transform: 'scale(1.5)',
              },
            }}
          />
        </Flex>
        <Grid
          sx={{
            gridTemplateRows: ['0.1fr 0.9fr 0.2fr', null, '0.1fr 0.9fr 0.1fr'],
            mt: ['20px', null, '100px'],
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
                mb: '5px',
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
              }}
            />
          </Container>
          <Container>
            <Label
              sx={{
                fontSize: [3, 4, 5, null, 4],
                mb: '5px',
              }}
            >
              Text:
            </Label>
            <Textarea
              value={textAreaValue}
              onChange={handleTextAreaChange}
              sx={{
                height: '90%',
                fontSize: [2, 3, 4, null, 3],
                bg: 'background',
              }}
            />
          </Container>
          <Button
            onClick={() => {
              addNewToDo();
              toggleNewItemBarVisibilityFn();
            }}
            variant="secondary"
            sx={{
              width: '30%',
              height: ['40px', null, null, '55px', '40px'],
              alignSelf: 'center',
              borderRadius: '5px',
              mx: 'auto',
              fontSize: [null, null, 4, 5, 4],
              bg: 'primary',
              color: 'background',
              boxShadow: 'primary',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Sidebar;

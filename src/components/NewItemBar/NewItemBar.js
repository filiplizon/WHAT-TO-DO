import React from 'react';
import { Container, Grid, Label, Textarea, Close, Input, Button, Heading, Flex } from 'theme-ui';

const Sidebar = () => (
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
        py: ['20px'],
        borderLeft: [null, null, '10px solid'],
        borderColor: 'primary',
        bg: 'background',
        color: 'primary',
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
            fontWeight: 700,
            fontSize: [1, 2, 3, 4, 2],
          }}
        >
          new ToDo
        </Heading>
        <Close
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
          mt: ['20px', null, '100px', null, null],
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
            sx={{
              fontSize: [2, 3, 4, null, 3],
              bg: 'background',
              color: 'text',
              boxShadow: 'primary',
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
            sx={{
              height: '90%',
              fontSize: [2, 3, 4, null, 3],
              bg: 'background',
              color: 'text',
              boxShadow: 'primary',
              resize: 'none',
            }}
          />
        </Container>
        <Button
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

export default Sidebar;

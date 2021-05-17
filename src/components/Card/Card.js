import React from 'react';
import { Card as CardItem, Flex, Heading, Button, Paragraph } from 'theme-ui';
import { MdDone as DoneIcon } from 'react-icons/md';
import { AiFillDelete as RemoveIcon } from 'react-icons/ai';

const Card = () => (
  <CardItem
    sx={{
      height: [null, null, '25vh'],
      width: ['100%', null, '40vw', '25vw'],
      display: 'grid',
      gridTemplateRows: '0.2fr 1fr',
      mb: '20px',
      boxShadow: 'primary',
      transition: 'transform .2s',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover': { transform: 'scale(1.03)' },
    }}
  >
    <Flex
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
          fontSize: [null, null, 5],
        }}
      >
        Title
      </Heading>
      <Flex>
        <Button
          variant="secondary"
          sx={{
            mr: '10px',
            '&:hover': { color: 'red' },
          }}
        >
          <RemoveIcon />
        </Button>
        <Button
          variant="secondary"
          sx={{
            '&:hover': { backgroundColor: '#56E39F', color: 'background' },
          }}
        >
          <DoneIcon />
        </Button>
      </Flex>
    </Flex>
    <Paragraph
      sx={{
        alignSelf: 'center',
        p: '10px',
        fontSize: [null, null, 3, 4],
      }}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatibus rem, harum
    </Paragraph>
  </CardItem>
);

export default Card;

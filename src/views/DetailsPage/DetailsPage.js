import React from 'react';
import { Button, Container, Flex, Paragraph, Textarea, Image, Heading } from '@theme-ui/components';
import CloseButton from 'components/CloseButton/CloseButton';
import Illustration from 'assets/images/illustration.svg';

const DetailsPage = () => (
  <>
    <CloseButton />
    <Container
      sx={{
        height: '100vh',
        width: [null, null, '80%', null, '100%'],
        px: '3vw',
        pt: ['2vh', null, null, null, '10vh'],
        pb: ['2vh', null, null, null, '10vh'],
      }}
    >
      <Container
        sx={{
          width: 'auto',
          position: [null, null, null, null, 'absolute'],
          top: '10vh',
          left: '70vw',
          mb: '30px',
          fontSize: [null, 3, 4, 5, 4],
          color: 'primary',
        }}
      >
        <Paragraph>Created:</Paragraph>
        <Paragraph>Last update:</Paragraph>
        <Paragraph>Chars:</Paragraph>
      </Container>
      <Flex
        sx={{
          position: 'relative',
          height: ['82%', null, null, null, '100%'],
          width: [null, null, null, null, '50%'],
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Heading
          as="h2"
          sx={{
            mt: [null, null, '20px', null, 0],
            fontSize: [4, 5, 6, 7, 6],
          }}
        >
          Title
        </Heading>
        <Textarea
          sx={{
            height: '70%',
            fontSize: [null, 3, 4, 5, 4],
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rerum dicta
          pariatur. Rem, maxime ipsa?
        </Textarea>
        <Button
          variant="primary"
          sx={{
            width: ['40%', null, null, null, '25%'],
            m: '0 auto',
            mt: [null, null, '20px'],
            py: [null, '10px', '15px'],
            fontSize: [null, 3, 4, 5, 4],
          }}
        >
          Save
        </Button>
        <Container
          sx={{
            display: ['none', null, null, null, 'block'],
            width: '85%',
            position: 'absolute',
            bottom: 0,
            right: '-100%',
            opacity: 0.4,
          }}
        >
          <Image src={Illustration} />
        </Container>
      </Flex>
    </Container>
  </>
);

export default DetailsPage;

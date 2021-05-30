import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { toDosState } from 'atoms/atoms';
import { Container, Flex, Paragraph, Heading } from '@theme-ui/components';
import Logo from 'components/Logo/Logo';
import CloseButton from 'components/CloseButton/CloseButton';
import Illustration from 'components/Illustration/Illustration';
import Wave from 'assets/images/wave.svg';

const ItemPage = ({
  match: {
    params: { id },
  },
}) => {
  const [redirect, setRedirect] = useState(false);
  const [item, setItem] = useState({});
  const toDoList = useRecoilValue(toDosState);

  useEffect(() => {
    const currentItem = toDoList.find((item) => item.id == id);
    setItem(currentItem);
  }, [item]);

  const handlePageClose = () => {
    setRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to={'/WHAT-TO-DO'} />;
  }

  return (
    <>
      <Flex
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          position: 'relative',
          top: ['15px', null, '25px', '35px', '20px'],
          px: '3vw',
        }}
      >
        <Logo />
        <CloseButton onClick={handlePageClose} />
      </Flex>
      <Flex
        sx={{
          height: ['95vh', null, null, null, '100%'],
          width: '100%',
          px: '3vw',
          pt: ['2vh', null, null, null, '10vh'],
          pb: ['2vh', null, null, null, '10vh'],
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Flex
          sx={{
            height: '80%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: ['center', null, null, null, 'flex-start'],
            textAlign: [null, null, null, null, 'center'],
          }}
        >
          <Container
            sx={{
              position: [null, null, null, null, 'absolute'],
              top: [null, null, null, null, '15%'],
              width: 'auto',
              p: '10px',
              m: 0,
              border: (theme) => `2px solid ${theme.colors.primary}`,
              alignSelf: 'flex-start',
              fontSize: [1, 2, 3, 5, 2],
              textAlign: 'left',
            }}
          >
            <Paragraph sx={{ mb: '10px' }}>
              Created at: {new Date(item.created_at).toLocaleString('pl-PL')}
            </Paragraph>
            <Paragraph>Completed: {item.completed ? 'Yes' : 'No'}</Paragraph>
          </Container>
          <Flex
            sx={{
              position: [null, null, null, null, 'absolute'],
              top: [null, null, null, null, '50%'],
              width: 'auto',
              flexDirection: 'column',
              alignItems: 'flex-start',
              transform: [null, null, null, null, 'translateY(-50%)'],
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontSize: [4, 5, null, 6, 5],
                color: 'primary',
              }}
            >
              {item.name ? item.name : 'TO DO'}
            </Heading>
            <Paragraph
              sx={{
                height: '70%',
                width: [null, null, null, null, '60%'],
                mt: '15px',
                fontSize: [null, 3, 4, 5, 3],
                textAlign: 'left',
              }}
            >
              {item.title}
            </Paragraph>
          </Flex>
          <Illustration />
        </Flex>
      </Flex>
      <Container
        sx={{
          display: ['none', null, null, null, 'block'],
          height: '30%',
          width: '100vw',
          position: 'absolute',
          bottom: 0,
          backgroundImage: `url(${Wave})`,
          backgroundSize: 'cover',
        }}
      />
    </>
  );
};

export default ItemPage;

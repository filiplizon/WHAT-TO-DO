import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentItemState } from 'atoms/atoms';
import { Container, Flex, Paragraph, Image, Heading } from '@theme-ui/components';
import CloseButton from 'components/CloseButton/CloseButton';
import Illustration from 'assets/images/illustration.svg';
import Logo from 'components/Logo/Logo';

const ItemPage = () => {
  const [redirect, setRedirect] = useState(false);
  const currentItem = useRecoilValue(currentItemState);

  const handlePageClose = () => {
    setRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to={'/'} />;
  }

  return (
    <>
      <Flex
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          position: 'absolute',
          top: ['15px', null, '25px', '35px', '45px'],
          px: '3vw',
        }}
      >
        <Logo />
        <CloseButton onClick={handlePageClose} />
      </Flex>
      <Flex
        sx={{
          height: '100vh',
          width: '100%',
          px: '3vw',
          pt: ['2vh', null, null, null, '10vh'],
          pb: ['2vh', null, null, null, '10vh'],
          alignItems: 'center',
          overflowX: 'hidden',
        }}
      >
        <Flex
          sx={{
            position: 'relative',
            left: [null, null, null, null, '5%'],
            height: ['65%', null, null, null, '100%'],
            width: '100%',
            flexDirection: ['column', null, null, null, 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: [null, null, null, null, 'center'],
          }}
        >
          <Flex
            sx={{
              width: [null, null, null, null, '620px'],
              height: [null, null, null, null, '450px'],
              position: 'relative',
              p: [null, null, null, null, '120px 30px 0'],
              borderRadius: '50%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: [null, null, null, null, 'center'],
              bg: [null, null, null, null, 'primary'],
              color: [null, null, null, null, 'background'],
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontSize: [4, 5, 6, 7, 6],
                color: ['primary', null, null, null, 'background'],
              }}
            >
              {currentItem.name ? currentItem.name : 'To Do'}
            </Heading>
            <Paragraph
              sx={{
                height: '70%',
                width: ['100%', null, '80%'],
                mt: '30px',
                fontSize: [null, 3, 4, 5, 4],
                overflow: 'hidden',
              }}
            >
              {currentItem.title}
            </Paragraph>
          </Flex>
          <Container
            sx={{
              width: ['100%', null, null, null, 'primary'],
              opacity: 0.4,
            }}
          >
            <Image sx={{ width: ['100%', null, null, null, '60%'] }} src={Illustration} />
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default ItemPage;

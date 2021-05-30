import React from 'react';
import { Container, Image } from 'theme-ui';
import illustration from 'assets/images/illustration.svg';

const Illustration = () => (
  <Container
    sx={{
      width: ['100%', null, null, null, '40%'],
      position: [null, null, null, null, 'absolute'],
      left: [null, null, null, null, '50%'],
      bottom: [null, null, null, null, '30%'],
      opacity: 0.4,
    }}
  >
    <Image src={illustration} />
  </Container>
);

export default Illustration;

import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoListDetailsState } from 'atoms/atoms';
import { Container, Paragraph } from 'theme-ui';

const Details = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(toDoListDetailsState);

  return (
    <Container
      as="ul"
      sx={{
        width: 'auto',
        m: 0,
        p: 0,
      }}
    >
      <Paragraph as="li" sx={{ listStyle: 'none' }}>
        Total items: {totalNum}
      </Paragraph>
      <Paragraph as="li" sx={{ listStyle: 'none' }}>
        Items completed: {totalCompletedNum}
      </Paragraph>
      <Paragraph as="li" sx={{ listStyle: 'none' }}>
        Items not completed: {totalUncompletedNum}
      </Paragraph>
    </Container>
  );
};

export default Details;

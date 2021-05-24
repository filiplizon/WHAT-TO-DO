import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoListDetailsState } from 'atoms/atoms';
import { Paragraph } from 'theme-ui';

const Details = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(toDoListDetailsState);

  return (
    <ul>
      <Paragraph as="li" sx={{ listStyle: 'none' }}>
        Total items: {totalNum}
      </Paragraph>
      <Paragraph as="li" sx={{ listStyle: 'none' }}>
        Items completed: {totalCompletedNum}
      </Paragraph>
      <Paragraph as="li" sx={{ listStyle: 'none' }}>
        Items not completed: {totalUncompletedNum}
      </Paragraph>
    </ul>
  );
};

export default Details;

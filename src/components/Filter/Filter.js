import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from 'atoms/atoms';
import { Flex, Label, Select } from 'theme-ui';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <Flex
      sx={{
        width: '40%',
        flexDirection: 'column',
      }}
    >
      <Label
        htmlFor="select"
        sx={{
          mb: '10px',
          fontWeight: 'regular',
        }}
      >
        Filter:
      </Label>
      <Select
        id="select"
        onChange={updateFilter}
        value={filter}
        sx={{ p: '10px', outlineColor: 'primary' }}
      >
        <option value="Search by content">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </Select>
    </Flex>
  );
};

export default Filter;

import React from 'react';
import { useSetRecoilState } from 'recoil';
import { searchInputValueState, todoListFilterState } from 'atoms/atoms';
import { Input } from 'theme-ui';

const SearchInput = () => {
  const setSearchInput = useSetRecoilState(searchInputValueState);
  const setFilter = useSetRecoilState(todoListFilterState);

  const handleInputChange = ({ target: { value } }) => {
    setSearchInput(value);
  };

  const updateFilter = ({ target: { name } }) => {
    setFilter(name);
  };

  return (
    <Input
      name="Search by content"
      onClick={updateFilter}
      onChange={handleInputChange}
      placeholder="Search"
      sx={{
        width: ['100%', null, null, null, '55%'],
        fontSize: [1, 2, null, 4, 2],
      }}
    />
  );
};

export default SearchInput;

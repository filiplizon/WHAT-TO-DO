import { atom, selector } from 'recoil';

export const toDosState = atom({
  key: 'toDosState',
  default: selector({
    key: 'toDosSelector',
    get: async () => {
      const response = await fetch('https://gorest.co.in/public-api/todos');
      const { data } = await response.json();
      return data;
    },
  }),
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const searchInputValueState = atom({
  key: 'searchInputValue',
  default: '',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(toDosState);
    const inputValue = get(searchInputValueState);

    switch (filter) {
      case 'Show Completed':
        return list.filter(
          ({ completed, title }) => completed && title.includes(inputValue.toLowerCase()),
        );
      case 'Show Uncompleted':
        return list.filter(
          ({ completed, title }) => !completed && title.includes(inputValue.toLowerCase()),
        );
      case 'Search by content':
        return list.filter(({ title }) => title.toLowerCase().includes(inputValue.toLowerCase()));
      default:
        return list;
    }
  },
});

export const toDoListDetailsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(toDosState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(({ completed }) => completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});

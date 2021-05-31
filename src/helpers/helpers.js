const myHeader = new Headers({
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  'Content-type': 'application/json',
});

export const sendRequest = async (id, method, object) => {
  const response = await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
    method,
    headers: myHeader,
    body: JSON.stringify(object),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
};

export const removeItemAtIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];

export const replaceItemAtIndex = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

let id = 200;
export const getId = () => id++;

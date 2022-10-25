import React from 'react'
import { AppUI } from './AppUI';


// const defaultTodos = [
//   { text: "Buy a new skin", completed: false },
//   { text: "sell the bike", completed: false },
//   { text: "Buy milk", completed: false },
//   { text: "Study the course", completed: false },
//   { text: "Buy a lot of chocolate", completed: false },
//   { text: "Build my House", completed: false }
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });
  function SaveItem(newToDos) {
    try {
      const stringItem = JSON.stringify(newToDos);
      localStorage.setItem(itemName, stringItem);
      setItem(newToDos);
    } catch (error) {
      setError(error);
    }
  }

  return [ item, SaveItem, loading, error ];
}

function App() {
  const [
    ToDos,
    SaveItem,
    loading,
    error,
  ] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState('');

  const ToDosCompleted = ToDos.filter(todo => !!todo.completed).length;
  const TotalToDos = ToDos.length;
  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = ToDos;
  } else {
    searchedToDos = ToDos.filter(todo => {
      const toDosText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return (toDosText.includes(searchText))
    })
  }
  const completeTodo = (text) => {
    const index = ToDos.findIndex(todo => todo.text === text);
    const newTodos = [...ToDos];
    if (!newTodos[index].completed) {
      newTodos[index].completed = true;
    } else {
      newTodos[index].completed = false;
    }
    SaveItem(newTodos);
  }
  const deleteTodo = (text) => {
    const index = ToDos.findIndex(todo => todo.text === text);
    const newTodos = [...ToDos];
    newTodos.splice(index, 1);
    SaveItem(newTodos);
  }

  return (
    <AppUI
      error={error}
      loading={loading}
      TotalToDos={TotalToDos}
      ToDosCompleted={ToDosCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

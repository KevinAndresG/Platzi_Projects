// import './styles/App.css';
import React from 'react'
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { CreateToDo } from './CreateToDo';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';


const todos = [
  { text: "Buy a new skin", completed: false },
  { text: "sell the bike", completed: false },
  { text: "Buy milk", completed: false },
  { text: "Study the course", completed: false },
  { text: "Buy a lot of chocolate", completed: false },
  { text: "Build my House", completed: false }
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <CreateToDo />
      <ToDoList>
        {todos.map(todo => (
          <ToDoItem text={todo.text} />
        ))}
      </ToDoList>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { CreateToDo } from '../CreateToDo';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';

function AppUI(
    {
        loading,
        error,
        TotalToDos,
        ToDosCompleted,
        searchValue,
        setSearchValue,
        searchedToDos,
        completeTodo,
        deleteTodo,
    }) {
    return (
        <React.Fragment>
            <ToDoCounter
                ToDosAmount={TotalToDos}
                ToDosCompleted={ToDosCompleted}
            />
            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <ToDoList>
                {error && <p>Error Founded!!!</p>}
                {loading && <p>!!!Wait...Loading!!!</p>}
                {(!loading && !searchedToDos.length) && <p>!!!Create Your First ToDo!!!</p>}
                {searchedToDos.map(todo => (<ToDoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    completeTodo={() => completeTodo(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)} />))}
            </ToDoList>
            <CreateToDo />
        </React.Fragment>
    );
}

export { AppUI };
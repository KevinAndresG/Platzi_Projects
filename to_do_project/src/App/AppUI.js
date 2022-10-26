import React from "react";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { CreateToDo } from '../CreateToDo';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDoContext } from '../ToDoContext'
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";

function AppUI() {
    const { error,
        loading,
        searchedToDos,
        completeTodo,
        deleteTodo,
        openModal,
        // setOpenModal,
    } = React.useContext(ToDoContext)

    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />
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

            {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

            <CreateToDo />
        </React.Fragment>
    );
}

export { AppUI };
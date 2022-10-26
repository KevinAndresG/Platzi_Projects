import React from "react";
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {
    const [newTodoText, setNewTodo] = React.useState("");

    const {
        CreateTodo,
        setOpenModal,
    } = React.useContext(ToDoContext)
    function OnChange(event) {
        setNewTodo(event.target.value)
    }
    function OnCancel() {
        setOpenModal(false);
    }
    function OnCreate(event) {
        event.preventDefault();
        CreateTodo(newTodoText);
        if(newTodoText.length > 0) {
            setOpenModal(false);
        }
        
    }
    return (
        <form onSubmit={OnCreate}>
            <label></label>
            <textarea
                value={newTodoText}
                onChange={OnChange}
                placeholder="Create Your ToDo" />
            <div>
                <button type="button" onClick={OnCancel}>
                    Cancel
                </button>
                <button type="submit">
                    Create
                </button>
            </div>
        </form>
    )
}
export { ToDoForm };
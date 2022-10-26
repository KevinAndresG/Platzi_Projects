import React from "react";
import "./ToDoItem.css"

function ToDoItem(lst) {
	return (
		<li className="items hovItems">
			<span className={`icon icon-check ${lst.completed && 'icon-check--active'} `} onClick={lst.completeTodo}>
				✔
			</span>
			<p className={`todoItem-p ${lst.completed && 'todoItem-p--completed'}`}>
				{lst.text}
			</p>
			<span className="icon icon-delete" onClick={lst.deleteTodo}>
				X
			</span>
		</li>
	);
}

export { ToDoItem };

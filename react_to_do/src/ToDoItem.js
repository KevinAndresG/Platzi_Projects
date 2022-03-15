import React from "react";
import "./styles/ToDoItem.css"

function ToDoItem(lst) {
	return (
		<li className="items hovItems">
			<p>{lst.text}</p>
		</li>
	);
}

export { ToDoItem };

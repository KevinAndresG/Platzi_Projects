import React from "react";
import "./styles/ToDoList.css"

function ToDoList(lst) {
	return (
		<div className="tdlistdiv">
			<ul className="tdlist">
				{lst.children}
			</ul>
		</div>
	);
}

export { ToDoList };
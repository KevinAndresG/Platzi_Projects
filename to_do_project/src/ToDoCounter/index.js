import React from "react";
import "./ToDoCounter.css"
import { ToDoContext } from '../ToDoContext'

function ToDoCounter() {
	const {TotalToDos, ToDosCompleted} = React.useContext(ToDoContext);

	return (
		<div className="titleHeader">
			<h1 className="title hovCounter completedToDos">{ToDosCompleted}</h1>
			<h1 className="title hovCounter ToDosCompletedText">/</h1>
			<h1 className="title hovCounter totalToDos">{TotalToDos}</h1>
			<h1 className="title hovCounter ToDosCompletedText">ToDos Completed</h1>
		</div>
	);
}

export { ToDoCounter };
import React from "react";
import "./ToDoCounter.css"

function ToDoCounter({ToDosAmount, ToDosCompleted}) {
	return (
		<div className="titleHeader">
			<h1 className="title hovCounter">{ToDosCompleted}/{ToDosAmount} ToDos Completed</h1>
		</div>
	);
}

export { ToDoCounter };
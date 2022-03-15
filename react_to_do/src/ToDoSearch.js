import React from "react";
import "./styles/ToDoSearch.css"

function ToDoSearch() {
	return (
		<div className='searchButton'>
			<input className='search' placeholder='Search Your ToDo' />
		</div>
	)
}

export { ToDoSearch }
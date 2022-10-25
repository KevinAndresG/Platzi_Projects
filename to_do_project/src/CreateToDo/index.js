import React from "react";
import "./CreateToDo.css"

function CreateToDo() {
	function onClickbtn(msg)
	{
		alert(msg)
	}

	return (
		<div className="divButton">
			<button className="button hovCreate" onClick={() => onClickbtn("holi")}>+</button>
		</div>);
}

export { CreateToDo };

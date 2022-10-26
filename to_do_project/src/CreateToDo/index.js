import React from "react";
import "./CreateToDo.css"
import { ToDoContext } from "../ToDoContext";

function CreateToDo() {
	const { setOpenModal, openModal } = React.useContext(ToDoContext);
	function onClickbtn() {
		if (openModal) {
			setOpenModal(false);
		} else {
			setOpenModal(true);
		}
	}
	return (
		<div className="divButton">
			<button className={`button hovCreate ${openModal && 'buttonDark'}`} onClick={() => onClickbtn()}>+</button>
		</div>);
		
}

export { CreateToDo };

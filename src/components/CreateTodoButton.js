import React from 'react';
import '../css/CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  
  const OnClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={OnClickButton}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
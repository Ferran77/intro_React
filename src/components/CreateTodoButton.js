import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const OnClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => OnClickButton('Le puchaste y por eso aparecí')}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
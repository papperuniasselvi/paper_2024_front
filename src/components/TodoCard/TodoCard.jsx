import React, { useState } from "react";
import "./TodoCard.css";

const TodoCard = ({ text }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleCompletion = () => {
    setCompleted(!completed);
  };

  const handleDelete = () => {
    console.log("Tarefa excluída:", text);
  };

  return (
    <div
      className={`card is-shadowless todo-card ${completed ? "completed" : ""}`}
    >
      <div className="card-content">
        <div className="content">
          <span
            className={`is-size-5 ${completed ? "has-text-grey-light" : ""}`}
            onClick={handleToggleCompletion}
          >
            {text}
          </span>
        </div>
      </div>
      <div className="card-footer">
        <button className="button is-danger is-small" onClick={handleDelete}>
          Excluir
        </button>
        <button
          className={`button is-small ${
            completed ? "is-primary" : "is-success"
          }`}
          onClick={handleToggleCompletion}
        >
          {completed ? "Desfazer" : "Concluir"}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;

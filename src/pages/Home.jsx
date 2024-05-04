import React from "react";
import TodoComponent from "../components/TodoComponent/TodoComponent";
import TodoCard from "../components/TodoCard/TodoCard";

export default function Home() {
  const tasks = [
    { id: 1, text: "Ajustar o Front-End" },
    { id: 2, text: "Ajustar rotas do Back-End" },
    { id: 3, text: "Testar a funcionalidade geral" },
    { id: 4, text: "Testar a UI" },
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title is-1">Lista de Tarefas</h1>
            <div className="mb-6">
              <TodoComponent />
            </div>
            <div className="card is-shadowless">
              <div className="card-content has-background-dark">
                {tasks.map((task) => (
                  <div key={task.id} className="mb-4">
                    <TodoCard text={task.text} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

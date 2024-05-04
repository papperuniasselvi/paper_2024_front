import React from 'react';

const Tarefa = ({ task }) => {
  return (
    <div className={`box ${task.concluido ? 'has-background-success' : ''}`}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{task.texto}</strong>
              <br />
              <small>{task.data}</small>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Tarefa;

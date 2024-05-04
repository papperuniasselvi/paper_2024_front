import React, { useState } from 'react';

const TodoComponent = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTexto('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              required
              className="input is-medium is-hovered"
              type="text"
              placeholder="Digite algo..."
              value={texto}
              onChange={handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-primary is-medium" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoComponent;

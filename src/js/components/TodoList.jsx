import React, { useState } from 'react';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([
    { id: 1, todo: 'Reunión suculenta ☕🍷' },
    { id: 2, todo: 'Odisea Culinaria 🍜🌮 ' },
    { id: 3, todo: 'Sesión Zen💆🏽‍♀️🕯️' },
  ]);

  const handleTask = (event) => setTask(event.target.value);

  const handleDeleteTask = (deletedTask) => {
    setListTask(listTask.filter((item) => item.id !== deletedTask.id));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      const newTask = { id: listTask.length + 1, todo: task };
      setListTask([...listTask, newTask]);
      setTask('');
    }
  };

  return (
    <div className="container py-5 bg-light min-vh-100">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto bg-white shadow rounded p-4">
          <h1 className="text-center text-danger mb-4 fw-bold">
            <i className="bi bi-journal-check me-2"></i>
            Todo List
          </h1>

          <form onSubmit={handleOnSubmit} className="mb-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-danger"
                placeholder="Agregar nueva tarea..."
                value={task}
                onChange={handleTask}
              />
              <button className="btn btn-danger text-white" type="submit">
                Agregar
              </button>
            </div>
          </form>

          <h5 className="text-danger mb-3">Tareas</h5>
          <ul className="list-group">
            {listTask.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 shadow-sm"
              >
                {item.todo}
                <button
                  className="btn btn-sm btn-outline-danger border-0"
                  onClick={() => handleDeleteTask(item)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))}
            <li className="list-group-item text-end bg-body-tertiary border-0">
              {listTask.length === 0
                ? 'No tienes tareas pendientes 🍷'
                : `${listTask.length} tareas pendientes`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
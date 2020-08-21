import React from 'react';

const Todo = ({task, removeTodo}) => (
    <div className="Todo">
        <div className="Todo-todo">{task}</div>
        <button className="Todo-remove" onClick={removeTodo}>X</button>
    </div>
)

export default Todo;
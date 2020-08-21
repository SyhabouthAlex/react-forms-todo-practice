import React, {useState} from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = ({todoArray}) => {
    const array = todoArray ? todoArray : [];
    const [todos, setTodos] = useState(array);
    const addTodo = (formData) => {
        setTodos(todos => [...todos, {...formData}]);
    };
    const removeTodo = (idx) => {
        setTodos(todos => todos.filter((v, i) => i !== idx));
    };

    return (
        <div className="TodoList">
            <h2 className="TodoList-title">Todos!</h2>
            <NewTodoForm addForm={addTodo}/>
            <div className="TodoList-todos">
                {todos.map(({task}, idx) => (
                    <Todo key={idx} task={task} removeTodo={() => removeTodo(idx)}/>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
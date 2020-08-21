import React, {useState} from 'react';

const NewTodoForm = ({addForm}) => {
    const INITIAL_STATE = {
        task: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addForm({...formData});
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit} className="NewTodoForm">
            <label htmlFor="task" className="NewTodoForm-input">Task</label>
            <input
                id="task"
                type="text"
                name="task"
                placeholder="Task"
                value={formData.color}
                onChange={handleChange}
            ></input>
            <button className="NewTodoForm-button">Create a new todo!</button>
        </form>
    )
}

export default NewTodoForm;
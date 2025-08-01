import { useState } from 'react';
import './style.css';

export default function TaskForm(props) {
    const [task, setTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (task === "")
            return
        props.addTodo(task);
        setTask('');
    }

    return (<form action=""
        className='new-item-form'
        onSubmit={handleSubmit}>
        {/* Input Text and Button to Add a Task in the ToDo List */}
        <div className='form=row'>
            <label htmlFor='item'>New Task</label>
            <input
                type='text'
                id='item'
                value={task}
                onChange={e => setTask(e.target.value)}
            />
        </div>
        <button className='btn'>Add</button>
    </form>)
}
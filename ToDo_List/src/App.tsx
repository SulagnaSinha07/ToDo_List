import { useState } from 'react';
import './style.css';

export default function App() {

  const[task, setTask] = useState("");
  const[todoList, setTodoList] = useState([]);

  function handleSubmit(e : React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setTodoList(curr => {
      return [
        ...curr,
        { id: crypto.randomUUID(),
          title : task,
          completed : false
        }
      ]
    });
    setTask('');
  }

  function toggleTodo(id, completed) {
    setTodoList(curr => {
      return curr.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    })
  }
console.log(todoList);

  return <>
    <form action="" 
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
  </form>

  {/* Display TODO items and their status */}
  <h1 className='header'>Todo List</h1>
  <ul className='list'>
    {todoList.map(todo => {
      return <li className='list li' key={todo.id}>
      <label>
        <input 
          type='checkbox' 
          id='checkbox1' 
          checked={todo.completed}
          onChange={e => toggleTodo(todo.id, e.target.checked)}/>{todo.title}
      </label>
      <button className='btn.btn-danger'>Remove</button>
    </li>
    })}
  </ul>
  </>
}
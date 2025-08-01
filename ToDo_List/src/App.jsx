import { useEffect, useState } from 'react';
import './style.css';
import TaskForm from './TaskForm';
import TodoList from './TodoList';

export default function App() {

  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todoList))
  }, [todoList]);

  function addNewTodo(title) {
    setTodoList(curr => {
            return [
                ...curr,
                {
                    id: crypto.randomUUID(),
                    title: title,
                    completed: false
                }
            ]
        });
  }

  function toggleTodo(id, completed) {
    setTodoList(curr => {
      return curr.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  console.log(todoList);

  function deleteItem(id) {
    setTodoList(curr => {
      return curr.filter(curr => curr.id !== id);
    });
  }

  return <>
    <TaskForm addTodo={addNewTodo}/>
    {/* Display TODO items and their status */}
    <h1 className='header'>Todo List</h1>
    <TodoList todoList={todoList} deleteFunction={deleteItem} toggleFunction={toggleTodo}/>
  </>
}
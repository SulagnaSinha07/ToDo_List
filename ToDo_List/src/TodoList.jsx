import { useState } from 'react';
import './style.css';
import TodoItem from './TodoItem';

export default function TodoList({todoList, deleteFunction, toggleFunction}) {

    return <>
        {todoList.length === 0 && 'No Items'}
        <ul className='list'>
            {todoList.map(todo => {
                return <TodoItem {...todo}
                key={todo.id}
                deleteFunction={deleteFunction}
                toggleFunction={toggleFunction}/>
            })}
        </ul>
    </>
}
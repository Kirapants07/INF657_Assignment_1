import React, { useState } from 'react'
import TodoList from './TodoList'

//Parent of TodoList
//Renders a TodoList component and a form to add new todo items
export default function TodoApp() {
    const [input, setInput] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setTodoItems([input, ...todoItems]);
        setInput('');
        console.log(todoItems);
    };

  return (
    <>
        {/* add new item input */}
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="New List Item" value={input} onChange={handleChange}></input>
            <button>Add</button>
        </form>
        {/* Display all todo items */}
        <TodoList description = {todoItems} />
    </>
  )
}

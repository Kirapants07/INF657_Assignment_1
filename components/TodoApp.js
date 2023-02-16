import React, {useState} from 'react'

export default function TodoApp() {
  // render a TodoList component and a form to add new todo items
const [input, setInput] = useState('');

  return (
    <form>
      <input type = "text" placeholder="New List Item" value={input}></input>
      <button>Add</button>
    </form>
  )
}

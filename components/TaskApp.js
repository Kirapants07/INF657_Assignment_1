import React, {useState} from 'react'
import Tasks from './Tasks';

export default function TaskApp() {
  // render a TodoList component and a form to add new todo items
const [input, setInput] = useState('');
const handleChange = e => {
  setInput(e.target.value);

};
const handleSubmit = e => {
  e.preventDefault();
  // props.onSubmit({
  //   id: 0,
  //   title: "",
  //   description: "",
  // });
  setInput('');
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type = "text" placeholder="New List Item" value={input} onChange={handleChange}></input>
        <button>Add</button>
      </form>
      <Tasks />
    </>
  )
}

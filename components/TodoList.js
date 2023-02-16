import React, { useState } from 'react'

//child of TodoList
//Layout for a single Task
export default function TodoList({description}) {
  const [todo, settodo] = useState([]); //array of todo items. Blank to start
  const [checked, setChecked] = useState(false); //useState for checkbox. Initial is false

  const handleChange = () => {
    setChecked(!checked); //toggle between true and false
  };

  return (
    <div>
        <input 
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {description}
    </div>
  );
}

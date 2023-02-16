import React, { useState } from 'react'
import Task from './Task';

//child of TodoApp, parent of Task
export default function TodoList({description}) {

    const [todo, settodo] = useState([]); //array of todo items. Blank to start

    return (
        <div>
            {/* map each array item to a prop */}
            {todo.map((task) => (
                <Task
                    description = {task.description} 
                />
            ))}
        </div>
  )
}

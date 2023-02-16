import React, { useState } from 'react'
import TodoList from './TodoList';

//child of TodoApp, parent of Task
export default function TodoListOLD({description}) {

    const [todo, settodo] = useState([]); //array of todo items. Blank to start

    
    return (
        <div>
            {/* map each array item to a prop */}
            {todo.map((task) => (
                <TodoList
                    description = {task.description} 
                />
            ))}
        </div>
  )
}

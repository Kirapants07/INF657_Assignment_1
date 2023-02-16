import React from 'react';
import Task from './Task';
import TaskData from './TaskData';

//Step 3. Goes to App
export default function Tasks() {
  return (
    <div>

    {TaskData.map((task) => (
      <Task
      key = {task.id} 
      title = {<h1>{task.title} </h1>}
      description = {task.description} />
    ))}
  </div>
  );
}

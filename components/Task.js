import React from 'react'

//Step 2. Goes to Tasks
export default function Task({ id, title, description }) {
  return (
    <div>
        {id} 
        {title} {description}
    </div>
  );
}

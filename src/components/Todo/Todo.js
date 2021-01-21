import React from 'react'
import './Todo.css'
const Todo = (props) => {
    return (
      <div>
        <p>{props.task}</p>
        <button onClick={() => props.removeHandler(props.index)}>delete</button>
      </div>
    )
  }

export default Todo
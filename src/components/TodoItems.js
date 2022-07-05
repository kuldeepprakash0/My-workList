import React from 'react'

const TodoItems = ({todo,onDelete}) => {
  return (
    <div className='my-4'>
      <h6>{todo.title}</h6>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <br />
      <hr />
    </div>
  )
}

export default TodoItems

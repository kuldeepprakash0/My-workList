import React from 'react'
import TodoItems from './TodoItems' 

const Todos = (props) => {
  return (
    <div className='container  my-3'>
        <h3 className='text-center'>My work List</h3>
        {props.todos.length===0?'No work to display':props.todos.map((todo)=>{
            return (
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            )
        })}
    </div>
  )
}

export default Todos

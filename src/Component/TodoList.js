import React from 'react'

 const TodoList = (props) => {
  return (
    <div>
      <li><ol>{props.text}</ol></li>
      <button type='delete' onClick={()=>{props.onSelect(props.id)}}>X</button>
    </div>
  )
}
export default TodoList
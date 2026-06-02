import React from 'react'
import { useState } from 'react'

function TodoList() {


  let [Todo,setTodo] = useState([])
  const [task,setTask] =useState("")

  let updateTodo = ()=>{
    setTodo((prevTodo)=>{
      return[...prevTodo,task]
    })
  }





  return (
    <div>
        <input placeholder='add a task' value={task} onChange={(e)=>{
          setTask(e.target.value)
        }}></input>
        <br />
        <button onClick={updateTodo}>Add Task</button>
        <br /><br /><br /><br />


        <hr />

        <h4>Todo List</h4>
        <ul>
            {
              Todo.map((todo,i)=>{
                return <li key={i}>{todo}</li>
              })
            }
        </ul>
    </div>
  )
}

export default TodoList
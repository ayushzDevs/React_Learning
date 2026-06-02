import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from "uuid";

function TodoList() {


  let [Todo,setTodo] = useState({task:"sample",id:uuidv4()})
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
              
            }
        </ul>
    </div>
  )
}

export default TodoList
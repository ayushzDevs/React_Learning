import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from "uuid";

function TodoList() {


  let [Todo,setTodo] = useState([{todo:"sample",id:uuidv4()}])
  const [task,setTask] =useState("")

  let addnewTask = ()=>{
    setTodo((prevTodo)=>{
      return[...prevTodo,{todo: task, id:uuidv4()}]
    })
    setTask("")
  }

  let updateTodoValue = (e)=>{
    setTask(e.target.value);
  }


  let deleteTodo=(id)=>{

    setTodo(Todo.filter((t)=> t.id != id));

  }


  return (
    <div>
        <input placeholder='add a task' value={task} onChange={updateTodoValue
        }></input>
        <br />
        <button onClick={addnewTask}>Add Task</button>
        <br /><br /><br /><br />


        <hr />

        <h4>Todo List</h4>
        <ul>
            {
              Todo.map((t)=>{
                return (
                <li key={t.id}>
                  <span>{t.todo}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={()=>deleteTodo(t.id)}>Delete</button></li>)
              })
            }
        </ul>
    </div>
  )
}

export default TodoList
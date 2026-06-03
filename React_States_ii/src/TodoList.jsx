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

    setTodo(prev => prev.filter(t => t.id !== id));

  }

  let upperCaseAll = ()=>{
    setTodo(Todo.map((t)=>{
      return {
        ...t, 
        todo: t.todo.toUpperCase()
      }
    }))
  }

  let lowerCaseAll = ()=>{
    setTodo(Todo.map((t)=>{
      return{
        ...t,
        todo: t.todo.toLowerCase()
      }
    }))
  }

  let upperCaseOne = (id)=>{
    setTodo((prevTodo)=>{
      return prevTodo.map((t)=>{
        if(t.id==id){
          return{
            ...t,
            todo: t.todo.toUpperCase()
          }
        }
        else{
          return t;
        }
      })
    })
  }

    let LowerCaseOne = (id)=>{
    setTodo((prevTodo)=>{
      return prevTodo.map((t)=>{
        if(t.id==id){
          return{
            ...t,
            todo: t.todo.toLowerCase()
          }
        }
        else{
          return t;
        }
      })
    })
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
                  <br />
                  <button onClick={()=>deleteTodo(t.id)}>Delete</button>
                  <br />
                  <button onClick={()=>upperCaseOne(t.id)}>UpperCase One</button>
                  <br />
                  <button onClick={()=>LowerCaseOne(t.id)}>LowerCase One</button>
                  </li>)

              })
              
            }
        </ul>
        <br /><br />
        <button onClick={upperCaseAll}>UpperCase All</button>
        <br /><br />
        <button onClick={lowerCaseAll}>LowerCase All</button>
        
    </div>
  )
}

export default TodoList
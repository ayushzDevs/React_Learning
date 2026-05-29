import React from 'react'

function HandleForm(event){
    event.preventDefault()
    console.log("form was submitted")
}


function Form() {
  return (
    <form onSubmit={HandleForm}>
        <input placeholder='type something' />
        <button>Submit</button>
    </form>
  )
}

export default Form
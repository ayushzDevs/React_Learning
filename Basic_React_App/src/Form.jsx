import React from 'react'

function HandleForm(event){
    event.preventDefault()
    console.log("form was submitted")
}


function Form() {
  return (
    <form>
        <input placeholder='type something' />
        <button onClick={HandleForm}>Submit</button>
    </form>
  )
}

export default Form
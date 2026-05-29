import React from 'react'

function doSOmething(event){
    event.preventDefault()
    console.log("I am doing something")
}


function Button() {
  return (
    <div>
        <button onClick={doSOmething}>Click me !</button>
        <p onMouseOver={doSOmething}>Hover over me!</p>
    </div>
  )
}

export default Button
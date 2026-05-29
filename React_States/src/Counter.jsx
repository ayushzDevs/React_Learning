import React from 'react'
import { useState } from 'react';




function Counter() {
    let [Count, setCount] = useState(0)

    let incCount = ()=>{

        setCount(Count+1)
        // console.log(Count)

    }



  return (
    <div>
        <h3>Count : {Count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
  )
}

export default Counter
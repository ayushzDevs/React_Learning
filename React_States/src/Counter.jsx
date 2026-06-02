import React from 'react'
import { useState } from 'react';


function init(){
  return Math.random();
}


function Counter() {
    let [Count, setCount] = useState(init())
    console.log("compoonent is rendered");
    console

    let incCount = ()=>{

        setCount((currVal)=>{
          return currVal +1
        });
        setCount((currVal)=>{
          return currVal +1

        });
        setCount((currVal)=>{
          return currVal +1

        });

        // setCount(25)
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
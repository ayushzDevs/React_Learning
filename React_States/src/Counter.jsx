import React from 'react'




function Counter() {
    let count = 0

    const IncreaseCount = ()=>{

        count +=1;
        console.log(count)
    
}

  return (
    <div>
        <h3>Count :{Counter}</h3>
        <button>Increase Count</button>
    </div>
  )
}

export default Counter
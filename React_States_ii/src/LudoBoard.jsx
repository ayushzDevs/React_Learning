import React from 'react'
import { useState } from 'react'

function LudoBoard() {
    let [moves, setMoves] = useState({blue : 0, red: 0, yellow: 0, green: 0});
    let [Count , setCount] = useState(0)
    
    let updateBlue=()=>{
        moves.blue+=1
        console.log(moves)
        setMoves(moves)
    }
  return (
    <div>
        <p>Game Begins !</p>
        <div className='board'>

            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow Moves = {moves.red} </p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>Green Moves = {moves.yellow} </p>
            <button style={{backgroundColor:"yellow" , color:"black"}}>+1</button>
            <p>Red Moves = {moves.green} </p>
            <button style={{backgroundColor:"green"}}>+1</button>



        </div>
    </div>
  )
}

export default LudoBoard
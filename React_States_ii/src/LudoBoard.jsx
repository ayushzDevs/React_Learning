import React from 'react'
import { useState } from 'react'

function LudoBoard() {
    let [moves, setMoves] = useState({blue : 0, red: 0, yellow: 0, green: 0});

    let [arr , setArr] = useState(["no moves"])

    let updateBlue=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:moves.blue+1}

            

        })
        // arr.push("blue moves");
        setArr((prevArr)=>{
            prevArr.pop()
            return [...prevArr,"blue moves"]
        });
        console.log(arr)
    }

    let updatRed=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,red:moves.red+1}

        })
        setArr((prevArr)=>{
            prevArr.pop()
            return [...prevArr,"red moves"]
        });
        console.log(arr)
    }

    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:moves.yellow+1}

        })
        setArr((prevArr)=>{
            prevArr.pop()
            return [...prevArr,"yellow moves"]
        });
        console.log(arr)
    }

    let updatGreen=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,green:moves.green+1}

        })
        setArr((prevArr)=>{
            prevArr.pop()
            return [...prevArr,"green moves"]
        });
        console.log(arr)
    }

    
  return (
    <div>
        <p>Game Begins !</p>
        <p> {arr} </p>
        <div className='board'>

            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow Moves = {moves.red} </p>
            <button style={{backgroundColor:"red"}} onClick={updatRed}>+1</button>
            <p>Green Moves = {moves.yellow} </p>
            <button style={{backgroundColor:"yellow" , color:"black"}} onClick={updateYellow}>+1</button>
            <p>Red Moves = {moves.green} </p>
            <button style={{backgroundColor:"green"}} onClick={updatGreen}>+1</button>



        </div>
    </div>
  )
}

export default LudoBoard;
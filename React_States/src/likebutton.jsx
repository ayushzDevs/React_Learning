import { useState } from "react";

function LikeButton(){
    
    let [isLiked , setisLiked] = useState(false)

    let toggleLike = () =>{
        setisLiked(!isLiked);

    }


    return(
        <div>
           <p onClick={toggleLike} >
            {
                isLiked ? (
                <i className="fa-solid fa-heart"></i>
            ): (
                <i className="fa-regular fa-heart"></i>)
            }
           </p>
        </div>
        
    )
}

export default LikeButton;
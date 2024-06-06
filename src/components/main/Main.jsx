import { useState } from "react"

const LikeButton = ()=>{
    const [like,setLike]=useState(false);

 const upLike =()=>{
        setLike(like+1)
 }



    return(
        <>
        <h1>{like}</h1>
        <button onClick={upLike}>LIKE</button>
        </>
        
    )
}
export default LikeButton

// rafce 
import { useState } from "react"

export default function LikeButton(){
	const [likeButton, setLikeButton] = useState<boolean>(false);
	function updateLikeButton(){
		setLikeButton(!likeButton)
	}
	return(
		<>
		<div style={{ padding: "7px" }}>
        <button onClick={updateLikeButton}>{likeButton?"❤️":"🤍"}</button>
      </div>
		</>
	)
}
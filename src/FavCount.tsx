import { useState } from "react"

export default function FavCount(){
	const [favCount, setDresses] = useState<number>(0);
	function incFavCount(){
		setDresses(favCount +1)
	}
	function decFavCount(){
		setDresses(favCount -1)
	}

	if (favCount === 0){
		return <p style={{color:"blue"}}> No favorite items yet </p>
	}

	if (favCount > 0){
	return(
		<>
		<span style={{margin:50}}> You have awesome taste! ✨</span>
		<button onClick={incFavCount}>+</button>
		<span>{favCount}</span>
		<button onClick={decFavCount}>_</button>
		</>
	)}
}
import { useState } from "react"

export default function ColorPicker(){
	const[colorPicker, setColorPicker] = useState<string>("red")
	function changeColor(newCol:string){
        setColorPicker(newCol)
    }
	return(
		<>
		<div
        style={{
          padding: "10px",
          display: "flex",
		  alignItems:"center",
          gap: "10px",
        }}
      >
		<p style={{color:colorPicker}}>{colorPicker}</p>
		<button style={{background:"red"}} onClick={()=> {changeColor("red")}}>red</button>
		<button style={{background:"black", color:"red"}} onClick={()=> {changeColor("black")}}>black</button>
		<button style={{background:"blue"}} onClick={()=> {changeColor("blue")}}>blue</button>
		{/* new way */}
		<button style={{background:"green"}} onClick={() => setColorPicker("green")}>green</button>
        <button style={{background:"yellow"}} onClick={() => setColorPicker("yellow")}>yellow</button>
	  </div>
		</>
	)
}
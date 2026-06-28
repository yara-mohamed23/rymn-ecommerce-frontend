import { useState } from "react"

export default function ColorMapper(){
	const [colorMapper, setColorMapper] = useState<string>("احمر")

const colorMap: { [key: string]: string } = {
		"اسود" : "black",
		"احمر" : "red",
		"اخضر" : "green",
		"اصفر" : "yellow",
		"ازرق" : "blue"
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
		<p style={{color: colorMap[colorMapper]}}>{colorMapper}</p>
		<button style={{background:"red"}} onClick={()=>setColorMapper("احمر")}>"احمر"</button>
		<button style={{background:"black", color:"white"}} onClick={()=>setColorMapper("اسود")}>"اسود"</button>
		<button style={{background:"blue"}} onClick={()=>setColorMapper("ازرق")}>"ازرق"</button>
		<button style={{background:"green"}}onClick={()=>setColorMapper("اخضر")}>"اخضر"</button>
        <button style={{background:"yellow"}}onClick={()=>setColorMapper("اصفر")}>"اصفر"</button>
	  </div>
		</>
	)
}
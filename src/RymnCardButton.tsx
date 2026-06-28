import type { ReactNode } from "react"

interface RymnCardButtonProps{
		children:ReactNode
		onClickFun:()=> void
	}

export default function RymnCardButton(props : RymnCardButtonProps){
	return (
		<>
		<div style={{ padding: "7px" }}>
        <button onClick={props.onClickFun}>
          {props.children}
        </button>
      </div>
		</>
	)
}
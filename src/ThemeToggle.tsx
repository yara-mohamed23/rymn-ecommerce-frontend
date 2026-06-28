import { useState, type ReactNode} from "react"

interface ThemeToggleProps {
  children: ReactNode;
}

export default function ThemeToggle({ children }: ThemeToggleProps){
	const [themeToggle, setThemeToggle] = useState<boolean>(false)
	function updateThemeToggle(){
		setThemeToggle(!themeToggle)
	}
	return(
		<>
		<div style = {{ background: themeToggle? "white": "black", color: themeToggle? "black" :" white"}}>
		<button onClick={updateThemeToggle}>ThemeToggle</button>
		<div style={{ marginTop: "20px" }}>
                {children}
            </div>
		</div>
		</>
	)
}
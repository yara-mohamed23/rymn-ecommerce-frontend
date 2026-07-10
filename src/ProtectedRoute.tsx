import type { ReactNode } from "react"
import { useAuth } from "./context/useAuth"
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps{
	children: ReactNode
}
export default function ProtectedRoute({children}:ProtectedRouteProps){
	const {loading, isAuthenticated} = useAuth()

	if(loading){
		return <div style={{ padding: "20px" }}>جاري التحقق من الأمان... 🛡️</div>;
	}
	if(!isAuthenticated){
		return <Navigate to='/login' replace/>
	}
	return(
		<>{children}</>
	)
}
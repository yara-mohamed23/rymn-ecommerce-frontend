import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext"; // بنستورد الصندوق الفاضي من الملف الأول

export const AuthProvider = ({children}:{children:ReactNode})=>{

	const [user, setUser] = useState<string|null>(()=>{
		return localStorage.getItem("auth_user")
	})
	const [token, setToken] = useState<string|null>(()=>{
		return localStorage.getItem("auth_token")
	});
	const [loading] = useState<boolean>(false);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(()=>{
		return !!localStorage.getItem("auth_token")
	})

	// useEffect(()=>{
	// const savedUser = localStorage.getItem("auth_user");
	// const savedToken = localStorage.getItem("auth_token");

	// if (savedUser && savedToken){
	// setUser(savedUser);
	// setToken(savedToken);
	// }
	// setLoading(false);
	// },[])

	function login(userData:string, tokenData:string){
		setUser(userData);
		setToken(tokenData);
		localStorage.setItem("auth_user",userData)
		localStorage.setItem("auth_token",tokenData)
		setIsAuthenticated(true); // نغير الـ state عشان الأبلكيشن يحس فوراً
	}
	function logout(){
		setUser(null)
		setToken(null)
		localStorage.removeItem("auth_user")
		localStorage.removeItem("auth_token")
	}

	return(
		<AuthContext.Provider value={{user,token,login,logout,loading,isAuthenticated}}>
			{children}
		</AuthContext.Provider>
	)
}
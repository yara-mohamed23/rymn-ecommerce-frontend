import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // بنستورد الصندوق من الملف الأول

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
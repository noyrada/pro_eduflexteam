// Logout.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear session
        sessionStorage.clear();
        navigate("/auth/login");
    }, [navigate]);

    return null;
}

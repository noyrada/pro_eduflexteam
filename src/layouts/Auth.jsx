import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// views
import Login from "../views/auth/Login.jsx";
import Logout from "../views/auth/Logout.jsx";

export default function Auth() {
    return (
        <>
            {/* component */}
            <main>
                <section>
                    <Routes>
                        {/* Route for login */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        
                        {/* Redirect from /auth to /auth/login */}
                        <Route path="/auth" element={<Navigate to="/auth/login" />} />
                    </Routes>
                </section>
            </main>
            {/* component */}
        </>
    );
}

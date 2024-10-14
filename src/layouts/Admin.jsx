import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// component
import AdminNavbar from '../components/Navbars/AdminNavbar.jsx';
import Sidebar from "../components/Sidebar/Sidbar";

// views
import Dashboard from "../views/admin/Dashboard";

export default function Admin() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-100">
            <AdminNavbar />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Routes>
                        {/* Route for login */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        
                        {/* Redirect from /admin to /admin/dashboard */}
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                    </Routes>
                </div>
            </div>
            {/* footer [optional] */}
        </>
    )
}
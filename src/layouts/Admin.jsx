import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// component
import AdminNavbar from '../components/Navbars/AdminNavbar.jsx';
import Sidebar from "../components/Sidebar/Sidbar";
// import Content from "../components/Content/Contents.jsx";

// views
import Dashboard from "../views/admin/Dashboard";

export default function Admin() {
    return (
        <>
            <div className="grid grid-cols-6 grid-rows-12 h-screen">
                {/* Sidebar */}
                <div className="col-span-1 row-span-full bg-gray-400">
                    <Sidebar />
                </div>

                {/* Header */} 
                <div className="col-span-5 row-span-1 h-14​">
                    <AdminNavbar />
                </div>

                {/* Main Content */}
                <div className="col-span-5 row-span-10 bg-gray-200">
                    <Routes>
                        {/* Route for login */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Redirect from /admin to /admin/dashboard */}
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                    </Routes>
                </div>

                {/* Footer */}
                <div className="col-span-5 bg-blue-200 p-4 h-16 mt-2">
                    <h1>Footer</h1>
                </div>
            </div>
        </>
    )
}
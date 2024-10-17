import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// component
import AdminNavbar from '../components/Navbars/AdminNavbar.jsx';
import Sidebar from "../components/Sidebar/Sidbar";
import FooterAdmin from "../components/Footer/FooterAdmin.jsx";

// views
import Dashboard from "../views/admin/Dashboard";

export default function Admin() {
    return (
        <>
            <div className="grid grid-cols-6 grid-rows-12 bg-gray-100">
                {/* Sidebar */}
                <div className="col-span-1 row-span-full bg-blue-400">
                    <Sidebar />
                </div>

                {/* Header */} 
                <div className="col-span-5 h-20" >
                    <AdminNavbar />
                </div>

                {/* Main Content */}
                <div className="col-span-5 row-span-10 h-auto">
                    <Routes>
                        {/* Route for login */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Redirect from /admin to /admin/dashboard */}
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                    </Routes>
                </div>

                {/* Footer */} 
                <div className="col-span-5 p-4 h-16 mt-6">
                    <FooterAdmin/>
                </div>
            </div>
        </>
    )
}
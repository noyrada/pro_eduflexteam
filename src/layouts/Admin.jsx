import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// component
import AdminNavbar from '../components/Navbars/AdminNavbar.jsx';
import Sidebar from "../components/Sidebar/Sidbar";
import FooterAdmin from "../components/Footer/FooterAdmin.jsx";

// views
import Dashboard from "../views/admin/Dashboard";
import Courses from "../views/admin/Courses.jsx";
import CourseTable from "../views/courses/CourseTable.jsx";
import CourseAssign from '../views/courses/CourseAssign.jsx';
import CourseEvent from '../views/courses/CourseEvent.jsx'
import Users from "../views/admin/Users.jsx";

export default function Admin() {
    return (
        <>
            <div className="grid grid-cols-6 grid-rows-12 bg-gray-100">
                {/* Sidebar */}
                <div className="col-span-1 row-span-full bg-gray-100">
                    <Sidebar />
                </div>

                {/* Header */} 
                <div className="col-span-5" >
                    <AdminNavbar />
                </div>

                {/* Main Content */}
                <div className="col-span-5 row-span-10">
                    <Routes>
                        {/* Route for admin dashboard*/}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Route for courses */}
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/courses-table" element={< CourseTable/>} />
                        <Route path="/courses-assign" element={< CourseAssign/>} />
                        <Route path="/courses-event" element={< CourseEvent/>} />

                        {/* Route for users */}
                        <Route path="/users" element={<Users/>} />
                        <Route path="/users-roles" element={<Users/>}/>

                        {/* Redirect from /admin to /admin/dashboard */}
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                    </Routes>
                </div>

                {/* Footer */} 
                <div className="col-span-5 row-span-2 p-4 h-16 mt-8">
                    <FooterAdmin/>
                </div>
            </div>
        </>
    )
}
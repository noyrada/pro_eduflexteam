import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// component
import AdminNavbar from '../components/Navbars/AdminNavbar.jsx';
import Sidebar from "../components/Sidebar/Sidbar";
import FooterAdmin from "../components/Footer/FooterAdmin.jsx";

// views
import Dashboard from "../views/admin/Dashboard";

// Courses
import ListCourses from '../views/CRUD/course/ListCourses.jsx'
import CourseTable from "../views/courses/CourseTable.jsx";
import CourseAssign from '../views/courses/CourseAssign.jsx';
import CourseEvent from '../views/courses/CourseEvent.jsx'
import CourseView from "../views/courses/CourseView.jsx";

// Users
import ListUsers from "../views/CRUD/user/ListUser.jsx";
import CreateUser from "../views/CRUD/user/CreateUser.jsx";
import UpdateUser from  "../views/CRUD/user/UpdateUser.jsx";

import ListRole from "../views/CRUD/role/ListRole.jsx";
import CreateRole from "../views/CRUD/role/CreateRole.jsx";
import UpdateRole from "../views/CRUD/role/UpdateRole.jsx";

import ListDepartment from '../views/CRUD/department/ListDepartment.jsx';
import UpdateDepartment from '../views/CRUD/department/UpdateDepartment.jsx'
import CreateCourse from "../views/CRUD/course/CreateCourse.jsx";

// Report
import Report from "../views/admin/reports/Report.jsx";

// Settings
import SettingPage from "../views/manage/SettingPage.jsx";
import SettingRole from "../views/manage/SettingRole.jsx";
import UserManagement from "../views/manage/UserManagement.jsx";

export default function Admin() {
    return (
        <>
            <div className="grid grid-cols-6 grid-rows-12 bg-gray-100 overflow-hidden">
                {/* Sidebar */}
                <div className="col-span-1 row-span-full bg-gray-100">
                    <Sidebar />
                </div>

                {/* Header */}
                <div className="col-span-5 h-20" >
                    <AdminNavbar />
                </div>

                {/* Main Content */}
                <div className="col-span-5 row-span-10">
                    <Routes>
                        {/* Route for admin dashboard*/}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Route for courses */}
                        <Route path="/courses" element={<ListCourses />} />
                        <Route path="/courses-table" element={< CourseTable />} />
                        <Route path="/courses-assign" element={< CourseAssign />} />
                        <Route path="/courses-event" element={< CourseEvent />} />
                        <Route path="/courses-view" element={< CourseView />} />

                        <Route path="/courses-create" element={<CreateCourse/>}/>

                        {/* Route for users */}
                        <Route path="/users" element={<ListUsers />} />
                        <Route path="/users-create" element={<CreateUser />} />
                        <Route path="/users-edit" element={<UpdateUser />} />

                        <Route path="/users-role" element={<ListRole />} />
                        <Route path="/users-role-create" element={<CreateRole />} />
                        <Route path="/users-role-edit/:id" element={<UpdateRole />} />

                        <Route path="/users-department" element={<ListDepartment />} />
                        <Route path="/users-department-edit" element={<UpdateDepartment />} />

                        {/* Reports */}
                        <Route path="/reports" element={<Report />} />

                        {/* Settings */}
                        <Route path="/setting-page" element={<SettingPage />} />
                        <Route path="/setting-role" element={<SettingRole />} />
                        <Route path="/setting-user-management" element={<UserManagement />} />

                        {/* Redirect from /admin to /admin/dashboard */}
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                    </Routes>
                </div>

                {/* Footer */}
                <div className="col-span-5 row-span-2 p-4 h-16 mt-6">
                    <FooterAdmin />
                </div>
            </div>
        </>
    )
}
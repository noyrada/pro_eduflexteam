import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ToolBarUserManagement() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md font-suwannaphum text-sm">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* users */}
                    <Link
                        to="/admin/setting-page"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/setting-page") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        គ្រប់គ្រងទំព័រ
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/setting-role"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/setting-role") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        តួនាទី & ការផ្តល់សិទ្ធ
                    </Link>

                    {/* Department */}
                    <Link
                        to="/admin/setting-user-management"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/setting-user-management") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        គ្រប់គ្រងអ្នកប្រើប្រាស់
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">

                    {/* Add New Course */}
                    <Link
                        to="/admin/users-create">
                        <button className="bg-blue-500 text-white py-2 px-3 rounded-md flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            បង្កើតថ្មី
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

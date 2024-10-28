import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ToolBarRole() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* users */}
                    <Link
                        to="/admin/setting-page"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/setting-page") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Page Management
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/setting-role"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/setting-role") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Role & Permission
                    </Link>

                    {/* Department */}
                    <Link
                        to="/admin/setting-user-management"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/setting-user-management") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        User Management
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">

                    {/* Add New Course */}
                    <Link
                        to="/admin/users-role-create">
                        <button className="bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            New Role
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

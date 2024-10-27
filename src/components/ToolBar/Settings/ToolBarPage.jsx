import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ToolBarPage() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* users */}
                    <Link
                        to="/admin/settings"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/settings") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Manage Pages
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/settings-roles"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/settings-roles") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Roles and Permissions
                    </Link>

                    {/* Department */}
                    <Link
                        to="/admin/settings-users"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/settings-users") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Manage Users
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">

                    {/* Add New Course */}
                    <Link
                        to="/admin/settings">
                        <button className="bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            New Page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

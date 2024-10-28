import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CardToolBarUser() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* users */}
                    <Link
                        to="/admin/users"
                        className={`font-suwannaphum py-2 px-4 rounded-lg block ${isActive("/admin/users") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        អ្នកប្រើប្រាស់់
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/users-role"
                        className={`font-suwannaphum py-2 px-4 rounded-lg block ${isActive("/admin/users-role") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        តួនាទី
                    </Link>
                    
                    {/* Department */}
                    <Link
                        to="/admin/users-department"
                        className={`font-suwannaphum py-2 px-4 rounded-lg block ${isActive("/admin/users-department") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        នាយកដ្ឋាន
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">

                    {/* Add New Course */}
                    <Link 
                        to="/admin/users-create">
                        <button className="font-suwannaphum bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            បង្កើតថ្មី
                        </button>
                    </Link>

                    {/* Filter */}
                    <button className="font-suwannaphum bg-green-500 text-white py-2 px-3 rounded-lg flex items-center">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        តម្រង
                    </button>
                </div>
            </div>
        </div>
    );
}

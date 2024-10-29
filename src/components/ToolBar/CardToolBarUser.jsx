import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CardToolBarUser() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md font-suwannaphum text-sm">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* users */}
                    <Link
                        to="/admin/users"
                        className={` py-2 px-4 rounded-md block ${isActive("/admin/users") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        អ្នកប្រើប្រាស់់
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/users-role"
                        className={` py-2 px-4 rounded-md block ${isActive("/admin/users-role") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        តួនាទី
                    </Link>
                    
                    {/* Department */}
                    <Link
                        to="/admin/users-department"
                        className={` py-2 px-4 rounded-md block ${isActive("/admin/users-department") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        នាយកដ្ឋាន
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">

                    {/* Add New Course */}
                    <Link 
                        to="/admin/users-create">
                        <button className=" bg-gray-300 text-gray-900 shadow-md py-2 px-3 rounded-md flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            បង្កើតថ្មី
                        </button>
                    </Link>

                    {/* Filter */}
                    <button className="bg-gray-300 text-gray-900 shadow-md py-2 px-3 rounded-md flex items-center">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        តម្រង
                    </button>
                </div>
            </div>
        </div>
    );
}

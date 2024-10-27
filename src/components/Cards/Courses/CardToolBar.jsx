import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CardToolBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    <Link
                        to="/admin/courses"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/courses") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Manage Courses
                    </Link>

                    <Link
                        to="/admin/courses-assign"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/courses-assign") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Assigned Courses
                    </Link>

                    <Link
                        to="/admin/courses-event"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/courses-event") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Manage Events
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">
                    {/* View as card */}
                    <Link to="/admin/courses">
                        <span className="px-2 py-1 border rounded-lg">
                            <ion-icon name="albums-outline"></ion-icon>
                        </span>
                    </Link>

                    {/* View as table */}
                    <Link to="/admin/courses-table"
                        className={`py-1 rounded-lg block ${isActive("/admin/courses-table") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        <span className="px-2 py-1 border rounded-lg">
                            <ion-icon name="reorder-four-outline"></ion-icon>
                        </span>
                    </Link>

                    {/* Add New Course */}
                    <Link to="/admin/courses-create">
                        <button className="bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            Add New Course
                        </button>
                    </Link>

                    {/* Filter */}
                    <button className="bg-green-500 text-white py-2 px-3 rounded-lg flex items-center">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
}

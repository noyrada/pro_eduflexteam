import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CardToolBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md text-sm font-suwannaphum">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    <Link
                        to="/admin/courses"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/courses") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        គ្រប់គ្រងវគ្គសិក្សា
                    </Link>

                    <Link
                        to="/admin/courses-assign"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/courses-assign") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        ផ្តល់វគ្គសិក្សា
                    </Link>

                    <Link
                        to="/admin/courses-event"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/courses-event") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        គ្រប់គ្រងព្រឹត្តិការណ៍
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
                        className={`py-2 rounded-md block ${isActive("/admin/courses-table") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        <span className="px-2 py-1 border rounded-md">
                            <ion-icon name="reorder-four-outline"></ion-icon>
                        </span>
                    </Link>

                    {/* Add New Course */}
                    <Link to="/admin/courses-create">
                        <button className="bg-gray-200 text-blue-900 shadow-md py-2 px-3 rounded-md flex items-center">
                            <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                            បង្កើតថ្មី
                        </button>
                    </Link>

                    {/* Filter */}
                    <button className="bg-gray-200 text-blue-900 shadow-md py-2 px-3 rounded-md flex items-center">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        តម្រង
                    </button>
                </div>
            </div>
        </div>
    );
}

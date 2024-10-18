import React from "react";
import { Link } from "react-router-dom";


// components

export default function CardToolBar() {
    return (
        <>
            <div className="">
                <div className="flex justify-between items-center bg-white p-2 rounded-md">
                    {/* Left Side */}
                    <div className="flex space-x-4">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
                            <Link to={"/admin/courses"}>
                                Manage Courses
                            </Link>
                        </button>

                        <Link to={"/admin/courses-assign"} className="text-gray-700 hover:text-gray-900 pt-2">
                            Assigned Courses
                        </Link>

                        <Link to={"/admin/courses-event"} className="text-gray-700 hover:text-gray-900 pt-2">
                            Manage Events
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex space-x-4 items-center">

                        {/* view card */}
                        <Link to={"/admin/courses"}>
                            <span className="px-2 border rounded-lg py-1">
                                <ion-icon name="albums-outline"></ion-icon>
                            </span>
                        </Link>

                        {/* view table */}
                        <Link to={"/admin/courses-table"}>
                            <span className="px-2 border rounded-lg py-1">
                                <ion-icon name="reorder-four-outline"></ion-icon>
                            </span>
                        </Link>

                        {/* Add New Courses */}
                        <button className="bg-blue-500 text-white py-2 px-3 rounded-lg">
                            <span className="pr-2">
                                <ion-icon name="add-circle-outline"></ion-icon>
                            </span>
                            Add New Courses
                        </button>

                        {/* Filter */}
                        <button className="bg-green-500 text-white py-2 px-3 rounded-lg">
                            <span className="pr-2">
                                <ion-icon name="filter-outline"></ion-icon>
                            </span>
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
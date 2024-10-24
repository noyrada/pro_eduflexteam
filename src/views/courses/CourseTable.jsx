import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";
import CardTable from "../../components/Cards/Courses/CardTable";
import PaginationCourse from "../../components/Paginations/PaginationCourse";

export default function CourseTable() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>Home / Table</p>
                </div>

                {/* Tool Bar */}
                <div className="shadow-sm">
                    <CardToolBar />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2 h-screen">
                    <div className="">
                        <CardTable />
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-2 w-full"> 
                <div className="flex items-center gap-2 p-2 bg-white shadow-sm rounded-lg border border-gray-200">
                    <PaginationCourse />
                </div>
            </div>
        </>
    )
}
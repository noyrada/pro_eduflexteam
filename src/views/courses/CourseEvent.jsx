import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";
import CardEvents from "../../components/Cards/Courses/CardEvents";
import PaginationCourse from "../../components/Paginations/PaginationCourse";

export default function CourseAssign() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="bg-gray-200 p-4 shadow-sm">
                    <p>Home &gt; Course &gt; Events</p>
                </div>

                {/* Tool Bar */}
                <div className="shadow-sm">
                    <CardToolBar/>
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2 h-screen">
                    <div className="">
                        <CardEvents/>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-9 w-full">
                    <div className="flex items-center gap-2 p-2 bg-white shadow-sm rounded-lg border border-gray-200">
                        <PaginationCourse />
                    </div>
                </div>
            </div>
        </>
    )
}
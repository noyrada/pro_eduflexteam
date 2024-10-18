import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";
import CardTable from "../../components/Cards/Courses/CardTable";

export default function CourseTable() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="bg-gray-200 p-4 shadow-sm">
                    <p>Home &gt; Course &gt; Table</p>
                </div>

                {/* Tool Bar */}
                <div className="shadow-sm">
                    <CardToolBar/>
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2 h-screen">
                    <div className="">
                        <CardTable/>
                    </div>
                </div>
            </div>
        </>
    )
}
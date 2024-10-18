import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";

export default function CourseAssign() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="bg-gray-200 p-4 shadow-sm">
                    <p>Home &gt; Course &gt; Assigned</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <CardToolBar/>
                </div>

                {/* Content Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="grid grid-cols-3 gap-6 p-5">
                        {/* Card 1 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            
                        </div>

                        {/* Card 4 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            
                        </div>

                        {/* Card 5 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            <h1>Optional</h1>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            <h1>Optional</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
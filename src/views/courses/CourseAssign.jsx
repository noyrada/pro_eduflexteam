import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";
import PaginationCourse from "../../components/Paginations/PaginationCourse";

export default function CourseAssign() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ទំព័រដើម / ផ្តល់វគ្គសិក្សា</p>
                </div>

                {/* Tool Bar */}
                <div className="">
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
                
                {/* Pagination */}
                <div className="flex justify-center items-center mt-2 w-full">
                    <div className="flex items-center gap-2 p-2 bg-white shadow-sm rounded-lg border border-gray-200">
                        <PaginationCourse />
                    </div>
                </div>
            </div>
        </>
    )
}
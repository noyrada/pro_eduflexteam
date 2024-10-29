import React from "react";

// component
import CardToolBar from "../../../components/Cards/Courses/CardToolBar";
import PaginationCourse from "../../../components/Paginations/PaginationCourse";

export default function Courses() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3 font-suwannaphum text-sm">
                    <p>ទំព័រដើម / វគ្គសិក្សា</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <CardToolBar />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="grid grid-cols-3 gap-6 p-5">
                        {/* Card 1 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            {/* Content of the card goes here */}
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            {/* Content of the card goes here */}
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            {/* Content of the card goes here */}
                        </div>

                        {/* Card 4 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            {/* Content of the card goes here */}
                        </div>

                        {/* Card 5 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            {/* Content of the card goes here */}
                        </div>

                        {/* Card 6 */}
                        <div className="bg-gray-200 rounded-md h-96 p-3">
                            {/* Content of the card goes here */}
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-1 w-full">
                    <div className="flex items-center gap-2 p-2 bg-white shadow-sm rounded-md border border-gray-200 font-suwannaphum text-sm">
                        <PaginationCourse />
                    </div>
                </div>
            </div>
        </>
    )
}
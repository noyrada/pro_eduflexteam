import React from "react";

// component
import CardToolBar from "../../components/Cards/Courses/CardToolBar";

export default function Courses() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="bg-gray-200 p-4 shadow-sm">
                    <p>Home &gt; Course</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <CardToolBar/>
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
            </div>
        </>
    )
}
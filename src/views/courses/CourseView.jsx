import React from "react";

// components
import CardViewCourse from "../../components/Cards/Courses/CardViewCourse";

export default function CourseView() {
    return (
        <>
           <div className="grid grid-rows-[auto,auto,1fr] mx-8">

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md h-screen">
                    <div className="">
                        <CardViewCourse/>
                    </div>
                </div>
            </div>
        </>
    )
}
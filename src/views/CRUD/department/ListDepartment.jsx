import React from "react";

// component 
import CardToolBarDepartment from "../../../components/ToolBar/CardToolBarDepartment";

export default function Departments() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>Home / Department</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <CardToolBarDepartment />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="h-screen">
                        List of Groups
                    </div>
                </div>
            </div>
        </>
    )
}
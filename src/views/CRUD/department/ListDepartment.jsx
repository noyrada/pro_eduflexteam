import React from "react";

// component 
import CardToolBarDepartment from "../../../components/ToolBar/CardToolBarDepartment";

export default function Departments() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ទំព័រដើម / នាយកដ្ឋាន</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <CardToolBarDepartment />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div className="h-screen">
                        តារាងនាយកដ្ឋាន
                    </div>
                </div>
            </div>
        </>
    )
}
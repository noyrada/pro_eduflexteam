import React from "react";

// component 
import CardToolBarUser from "../../../components/ToolBar/CardToolBarUser"; 

export default function ViewUser() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ទំព័រដើម / អ្នកប្រើប្រាស់់</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <CardToolBarUser />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div className="h-screen">
                        តារាងអ្នកប្រើប្រាស់
                    </div>
                </div>
            </div>
        </>
    )
}
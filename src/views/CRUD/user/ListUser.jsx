import React from "react";

// component 
import CardToolBarUser from "../../../components/ToolBar/CardToolBarUser"; 

export default function ViewUser() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>Home / User</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <CardToolBarUser />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="h-screen">
                        list User as Table
                    </div>
                </div>
            </div>
        </>
    )
}
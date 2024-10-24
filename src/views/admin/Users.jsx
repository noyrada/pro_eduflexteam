import React from "react";

// component 
import CardToolBarUser from "../../components/Cards/Users/ToolBar/CardToolBarUser";
import CardTableUsers from "../../components/Cards/Users/CardTableUser";

export default function Users() {
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
                    <div className="grid grid-cols-3 gap-6 p-5 h-screen">
                        <CardTableUsers />
                    </div>
                </div>
            </div>
        </>
    )
}
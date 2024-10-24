import React from "react";

// component 
import CardToolBarGroup from "../../components/Cards/Users/ToolBar/CardToolBarGroup";

export default function UserGroups() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>Home / Group</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <CardToolBarGroup />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="grid grid-cols-3 gap-6 p-5 h-screen">
                        This is User Groups
                    </div>
                </div>
            </div>
        </>
    )
}
import React from "react";

// component 
import CardToolBarRole from "../../components/Cards/Users/ToolBar/CardToolBarRole";

export default function UserRoles() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="bg-gray-200 p-4 shadow-sm">
                    <p>Home &gt; Role</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <CardToolBarRole />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="grid grid-cols-3 gap-6 p-5 h-screen">
                        This is User Roles
                    </div>
                </div>
            </div>
        </>
    )
}
import React from "react";

// component 
import ToolBarRole from "../../components/ToolBar/Settings/ToolBarRole";

export default function SettingPage() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>Role / Permission</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <ToolBarRole />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="h-screen">
                        Role and Permission Managemnt
                    </div>
                </div>
            </div>
        </>
    )
}
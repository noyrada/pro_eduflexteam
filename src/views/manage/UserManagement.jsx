import React from "react";

// component 
import ToolBarUserManagement from "../../components/ToolBar/Settings/ToolBarUserManagement";

export default function SettingPage() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>User Management</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <ToolBarUserManagement />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="h-screen">
                        User Management
                    </div>
                </div>
            </div>
        </>
    )
}
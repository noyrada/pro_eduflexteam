import React from "react";

// component 
import ToolBarPage from "../../components/ToolBar/Settings/ToolbarPage"; 

export default function SettingPage() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>Settings / Pages</p>
                </div>

                {/* Tool Bar */}
                <div className=" shadow-sm">
                    <ToolBarPage />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-md rounded-md mt-2">
                    <div className="h-screen">
                        Manage Pages
                    </div>
                </div>
            </div>
        </>
    )
}
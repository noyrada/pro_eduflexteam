import React from "react";

// component 
import ToolBarUserManagement from "../../components/ToolBar/Settings/ToolBarUserManagement";

export default function SettingPage() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ការកំណត់ / អ្នកប្រើប្រាស់</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <ToolBarUserManagement />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div className="h-screen">
                     ការគ្រប់គ្រងអ្នកប្រើប្រាស់
                    </div>
                </div>
            </div>
        </>
    )
}
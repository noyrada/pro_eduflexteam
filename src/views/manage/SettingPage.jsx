import React from "react";

// component 
import ToolBarPage from "../../components/ToolBar/Settings/ToolbarPage"; 

export default function SettingPage() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ការកំណត់ / ទំព័រ</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <ToolBarPage />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div className="h-screen">
                        គ្រប់គ្រងទំព័រ
                    </div>
                </div>
            </div>
        </>
    )
}
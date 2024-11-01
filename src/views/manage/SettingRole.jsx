import React from "react";

// component 
import ToolBarRole from "../../components/ToolBar/Settings/ToolBarRole";

export default function SettingPage() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>តួនាទី / ការអនុញ្ញាត</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <ToolBarRole />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div className="h-screen">
                        តួនាទីនិងការអនុញ្ញាត
                    </div>
                </div>
            </div>
        </>
    )
}
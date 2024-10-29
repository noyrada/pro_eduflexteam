import React from "react";

// component 
import CardToolBarRole from "../../../components/ToolBar/CardToolBarRole";

export default function ListRole() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ទំព័រដើម / តួនាទី</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <CardToolBarRole />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div className="h-screen">
                        តារាងតួនាទី
                    </div>
                </div>
            </div>
        </>
    )
}
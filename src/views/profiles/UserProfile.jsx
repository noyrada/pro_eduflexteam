import React from "react";
import { Link } from "react-router-dom";

// component

export default function UserProfile() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>អ្នកប្រើប្រាស់</p>
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2 font-sans h-screen">
                    <div>
                        Hello
                    </div>
                </div>
            </div>
        </>
    );
}

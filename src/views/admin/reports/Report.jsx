import React from "react";
// import { Link } from "react-router-dom"

// components
import CardStats from "../../../components/Cards/CardStats";
import CardEventCourse from '../../../components/Cards/Courses/CardEvents'

export default function Report() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8">
                {/* Card Stats */}
                <div className="">
                    <div class="grid grid-cols-4  gap-4">
                        <CardStats title="Course Completed" icon={<ion-icon name='document-outline'></ion-icon>} num="98" />
                        <CardStats title="In process" icon={<ion-icon name="trending-up-sharp"></ion-icon>} num="98" />
                        <CardStats title="Upcoming Course" icon={<ion-icon name="document-text-outline"></ion-icon>} num="98" />
                        <CardStats title="Watch Time" icon={<ion-icon name='time-outline'></ion-icon>} num="56:25" />
                    </div>
                </div>

                <div className="text-sm font-suwannaphum mt-4">
                    <p>របាយការណ៍ / វគ្គសិក្សា</p>
                </div>

                {/* Card LineChart */}
                <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
                    <CardEventCourse/>
                </div>

            </div>
        </>
    );
}

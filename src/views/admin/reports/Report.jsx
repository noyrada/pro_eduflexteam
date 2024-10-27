import React from "react";
// import { Link } from "react-router-dom"

// components
import CardStats from "../../../components/Cards/CardStats";
import CardLineChart from "../../../components/Cards/CardLineChart";

export default function Report() {
    return (
        <>
            <div className="grid grid-cols-4 gap-5 mx-8 pt-0">
                {/* Card Stats */}
                <div className="col-span-3   ">
                    <div class="grid grid-cols-4  gap-4">
                        <CardStats title="Course Completed" icon={<ion-icon name='document-outline'></ion-icon>} num="98" />
                        <CardStats title="In process" icon={<ion-icon name="trending-up-sharp"></ion-icon>} num="98" />
                        <CardStats title="Upcoming Course" icon={<ion-icon name="document-text-outline"></ion-icon>} num="98" />
                        <CardStats title="Watch Time" icon={<ion-icon name='time-outline'></ion-icon>} num="56:25" />
                    </div>
                </div>

                {/* Card LineChart */}
                <div className="col-span-3 bg-white shadow-sm rounded-sm h-100">
                    <CardLineChart />
                </div>

            </div>
        </>
    );
}

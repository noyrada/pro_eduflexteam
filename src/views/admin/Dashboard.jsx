import React from "react";

// components
import CardStats from "../../components/Cards/CardStats";
import CardCourses from "../../components/Cards/CardCourses";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardLastActivity from "../../components/Cards/CardLastActivity";


export default function Dashboard() {
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

        {/* Card Last Activity */}
        <div className="row-span-2 bg-white shadow-sm rounded-sm">
          <CardLastActivity />
        </div>

        {/* Card LineChart */}
        <div className="col-span-3 bg-white shadow-sm rounded-sm h-100">
          <CardLineChart />
        </div>

        {/* Card Courses */}
        <div className="col-span-4 bg-white shadow-sm rounded-sm h-83">
          <CardCourses />
        </div>
      </div>
    </>
  );
}

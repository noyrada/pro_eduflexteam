import React from "react";

// components
import CardStats from "../../components/Cards/CardStats";
import CardCourses from "../../components/Cards/CardCourses";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardLastActivity from "../../components/Cards/CardLastActivity";


export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mx-8 pt-0 h-screen">
        {/* Card Stats */}
        <div className="col-span-3 bg-white shadow-md h-36">
          <CardStats/>
        </div>

        {/* Card Last Activity */}
        <div className="row-span-2 bg-white shadow-sm rounded-sm">
          <CardLastActivity/>
        </div>

        {/* Card LineChart */}
        <div className="col-span-3 bg-white shadow-sm rounded-sm h-96">
          <CardLineChart/>
        </div>

        {/* Card Courses */}
        <div className="col-span-4 bg-white shadow-sm rounded-sm h-80">
          <CardCourses/>
        </div>
      </div>
    </>
  );
}

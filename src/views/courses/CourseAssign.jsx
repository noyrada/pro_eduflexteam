import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";
import PaginationCourse from "../../components/Paginations/PaginationCourse";
import Image1 from "../../assets/images/ux.jpg";
import Image2 from "../../assets/images/syber.jpeg";
import Image3 from "../../assets/images/program.png";
import Image4 from "../../assets/images/react.jpg";


const Card = ({ Image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <img
        src={Image}
        alt="Course Thumbnail"
        className="rounded-t-lg w-full h-60 object-cover"
      />
      <div className="p-4 mr-3 ml-3">
        <div className="flex justify-between text-gray-400 text-md mb-4">
          <span>2h 14m</span>
          <span>Created: April 14, 2024</span>
        </div>
        <h3 className="text-blue-600 font-semibold text-md mt-3 ">
          Mastering UI-UX Design System in Figma
        </h3>
        <div className="flex items-center space-x-2 mt-4">
          <div className="w-full bg-gray-200 h-3 rounded-md">
            <div
              className="bg-green-500 h-3 rounded-md"
              style={{ width: "54%" }}
            ></div>
          </div>
          <span className="text-md font-semibold text-gray-400">54%</span>
        </div>
      </div>
    </div>
  );
};

export default function CourseAssign() {
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>ទំព័រដើម / ផ្តល់វគ្គសិក្សា</p>
        </div>

        {/* Tool Bar */}
        <div className="">
          <CardToolBar />
        </div>

        {/* Content Cards */}
        <div className="bg-white shadow-md rounded-md mt-2 font-sans">
          <div className="grid grid-cols-3 gap-6 p-5">
            {/* Card 1 */}
            <div className="rounded-md">
              <Card Image={Image1} />
            </div>

            {/* Card 2 */}
            <div className="rounded-md">
              <Card Image={Image2} />
            </div>

            {/* Card 3 */}
            <div className="rounded-md">
              <Card Image={Image3} />
            </div>

            {/* Card 4 */}
            <div className="rounded-md">
              <Card Image={Image4} />
            </div>

            {/* Card 5 */}
            <div className="bg-gray-200 rounded-md  p-3">
              
            </div>

            {/* Card 6 */}
            <div className="bg-gray-200 rounded-md p-3">
              
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-1 w-full">
          <div className="flex items-center gap-2 p-2 bg-white shadow-sm rounded-md border border-gray-200">
            <PaginationCourse />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

// components
import CardToolBar from "../../components/Cards/Courses/CardToolBar";
import PaginationCourse from "../../components/Paginations/PaginationCourse";
import ImageUx from "../../assets/images/ux.jpg";
import ImageFigma from "../../assets/images/figma-ios-design-system.jpg";

const Card = ({ Image }) => {
  return (
    <div className="bg-white shadow-xl rounded-md">
      <img
        src={Image}
        alt="Course Thumbnail"
        className="rounded-t-md w-full h-80 object-cover"
      />
      <div className="p-4 mr-3 ml-3">
        <div className="flex justify-between text-gray-400 text-lg mb-4">
          <span>2h 14m</span>
          <span>Created: April 14, 2024</span>
        </div>
        <h3 className="text-blue-600 font-semibold text-xl mt-3 ">
          Mastering UI-UX Design System in Figma
        </h3>
        <div className="flex items-center space-x-2 mt-4">
          <div className="w-full bg-gray-200 h-4 rounded-md">
            <div
              className="bg-green-500 h-4 rounded-md"
              style={{ width: "54%" }}
            ></div>
          </div>
          <span className="text-lg font-semibold text-gray-400">54%</span>
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
        <div className="bg-white shadow-md rounded-md mt-2">
          <div className="grid grid-cols-3 gap-6 p-5">
            {/* Card 1 */}
            <div className="rounded-md">
              <Card Image={ImageUx} />
            </div>

            {/* Card 2 */}
            <div className="rounded-md">
              <Card Image={ImageFigma} />
            </div>

            {/* Card 3 */}
            <div className="rounded-md">
              <Card Image={ImageUx} />
            </div>

            {/* Card 4 */}
            <div className="rounded-md">
              <Card Image={ImageFigma} />
            </div>

            {/* Card 5 */}
            <div className="bg-gray-200 rounded-md  p-3">
              <h1>Optional</h1>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-200 rounded-md p-3">
              <h1>Optional</h1>
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

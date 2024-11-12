import React from "react";

// component
import CardToolBar from "../../../components/Cards/Courses/CardToolBar";
import PaginationCourse from "../../../components/Paginations/PaginationCourse";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

// Images
import ImageP1 from "../../../assets/images/ux.jpg";
import ImageP2 from "../../../assets/images/syber.jpeg";
import ImageP3 from "../../../assets/images/react.jpg";
import ImageP4 from "../../../assets/images/program.png";
import ImageP5 from "../../../assets/images/sql.png";


function ListCourses({ image, title, createdDate, level, duration, price }) {
  return (
    <>
      <div className="bg-white shadow-md rounded-xl cursor-pointer marker:shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex flex-col">
          <img
            className="rounded-xl w-full h-60"
            src={image}
            alt="course-thumbnail"
          />
          <div className="flex mt-2 ml-8">
            <MdOutlineSignalCellularAlt className="fill-green-700 size-7" />
            <div className="flex justify-between w-full text-gray-500 text-md mr-8 ml-2">
              <span>{level}</span>
              <span>{duration}</span>
              <span>${price}</span>
            </div>
          </div>
          <div>
            <h3 className="text-blue-900 text-md font-semibold mt-2 ml-8">
              {title}
            </h3>
            <p className="text-gray-500 text-md mt-3 ml-8 mb-2">
              Created: {createdDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Courses() {
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8">
        {/* Breadcrumb */}
        <div className="text-md mb-3 font-suwannaphum text-sm">
          <p>ទំព័រដើម / វគ្គសិក្សា</p>
        </div>

        {/* Tool Bar */}
        <div className="">
          <CardToolBar />
        </div>

        {/* Content Area with Cards */}
        <div className="bg-white shadow-md rounded-md mt-2">
          <div className="grid grid-cols-3 gap-6 p-5">
            {/* Card 1 */}
            <div className="rounded-md">
              {/* Content of the card goes here */}
              <ListCourses
                image={ImageP1}
                title={"Mastering UX/UI System Design In Figma"}
                createdDate={"April 14, 2024"}
                level={"Expert"}
                duration={"22h14m"}
                price={"180"}
              />
            </div>

            {/* Card 2 */}
            <div className="rounded-md">
              {/* Content of the card goes here */}
              <ListCourses
                image={ImageP2}
                title={"Mastering UX/UI System Design In Figma"}
                createdDate={"April 14, 2024"}
                level={"Expert"}
                duration={"22h14m"}
                price={"180"}
              />
            </div>

            {/* Card 3 */}
            <div className="rounded-md">
              {/* Content of the card goes here */}
              <ListCourses
                image={ImageP3}
                title={"Mastering UX/UI System Design In Figma"}
                createdDate={"April 14, 2024"}
                level={"Expert"}
                duration={"22h14m"}
                price={"180"}
              />
            </div>

            {/* Card 4 */}
            <div className="rounded-md">
              {/* Content of the card goes here */}
              <ListCourses
                image={ImageP4}
                title={"Mastering UX/UI System Design In Figma"}
                createdDate={"April 14, 2024"}
                level={"Expert"}
                duration={"22h14m"}
                price={"180"}
              />
            </div>

            {/* Card 5 */}
            <div className="rounded-md">
              <ListCourses
                image={ImageP5}
                title={"Mastering UX/UI System Design In Figma"}
                createdDate={"April 14, 2024"}
                level={"Expert"}
                duration={"22h14m"}
                price={"180"}
              />
            </div>

            {/* Card 6 */}
            <div className="rounded-md">
              {/* Content of the card goes here */}
              <ListCourses
                image={ImageP1}
                title={"Mastering UX/UI System Design In Figma"}
                createdDate={"April 14, 2024"}
                level={"Expert"}
                duration={"22h14m"}
                price={"180"}
              />
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-2 w-full">
          <div className="flex items-center gap-2 p-2 bg-white shadow-sm rounded-md border border-gray-200 font-suwannaphum text-sm">
            <PaginationCourse />
          </div>
        </div>
      </div>
    </>
  );
}

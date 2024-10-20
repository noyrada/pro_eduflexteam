import React, { useState } from "react";

// components
const coursesData = [
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: true,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: false,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: false,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: true,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: false,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: true,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: false,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: true,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: false,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: true,
  },
  {
    name: "Mastering UX-UI & Design System In Figma",
    level: "Expert",
    category: "Design",
    user: "47 User",
    dateCreated: "12/09/2024",
    isActive: false,
  },
];

export default function CardTable() {
  
    // const [courses, setCourses] = useState(coursesData);

  // const toggleActive = (index) => {
  //   const updatedCourses = [...courses];
  //   updatedCourses[index].isActive = !updatedCourses[index].isActive;
  //   setCourses(updatedCourses);
  // };
  
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-gray-700">Name Course</th>
              <th className="px-4 py-3 text-left text-gray-700">Level</th>
              <th className="px-4 py-3 text-left text-gray-700">Category</th>
              <th className="px-4 py-3 text-left text-gray-700">User</th>
              <th className="px-4 py-3 text-left text-gray-700">
                Date Created
              </th>
              <th className="px-4 py-3 text-left text-gray-700">Active</th>
              <th className="px-4 py-3 text-left text-gray-700">Edit</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2 text-base text-gray-700 ">{course.name}</td>
                <td className="px-4 py-2 text-base text-gray-700 ">{course.level}</td>
                <td className="px-4 py-2 text-base text-gray-700 ">{course.category}</td>
                <td className="px-4 py-2 text-base text-gray-700 ">{course.user}</td>
                <td className="px-4 py-2 text-base text-gray-700 ">{course.dateCreated}</td>
                <td className="px-4 py-2 text-base text-gray-700 ">
                <input
                  type="checkbox"
                  checked={course.isActive}
                  // onChange={() => toggleActive(index)}
                  className="peer relative shrink-0 w-[33px] h-[21px]  border-blue-800 bg-white border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-800 checked:border-blue-800 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600

  before:inline-block before:w-[16px] before:h-[16px] before:border-[1px] before:border-blue-800 before:mb-[1px] before:bg-white checked:before:bg-white  before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
                />
                </td>
                <td className="px-4 py-2 text-xl  text-blue-800">
                <ion-icon name="create-outline"></ion-icon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  );
}

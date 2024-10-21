import React, { useState } from "react";

// Sample course data with 17 courses, setting indices [2, 4, 7, 15] as inactive
const coursesData = Array(17).fill({
  name: "Mastering UX-UI & Design System In Figma",
  level: "Expert",
  category: "Design",
  user: "47 User",
  dateCreated: "12/09/2024",
  isActive: true,
}).map((course, index) => {

  // Set users at index [2, 4, 7, 15] as inactive
  if ([2, 4, 7, 9, 12, 14, 16].includes(index)) {
    return { ...course, isActive: false };
  }
  return course;
});

export default function CardTable() {
  // State to manage active toggles
  const [courses, setCourses] = useState(coursesData);

  // Toggle active status for a course
  const toggleActive = (index) => {
    const updatedCourses = [...courses];
    updatedCourses[index].isActive = !updatedCourses[index].isActive;
    setCourses(updatedCourses);
  };

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
              <th className="px-4 py-3 text-left text-gray-700">Date Created</th>
              <th className="px-4 py-3 text-left text-gray-700">Active</th>
              <th className="px-4 py-3 text-left text-gray-700">Edit</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">{course.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{course.level}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{course.category}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{course.user}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{course.dateCreated}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={course.isActive}
                    onChange={() => toggleActive(index)} // Toggle active status
                    role="switch"
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  />
                </td>
                <td className="px-4 py-2 text-xl text-blue-800">
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import data from "../../../models/modelDepartment.json";
import Checkbox from "@mui/material/Checkbox";
import CardToolBarDepartment from "../../../components/ToolBar/CardToolBarDepartment";
// component
const departments = data.Department;
export default function Departments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Department")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>ទំព័រដើម / នាយកដ្ឋាន</p>
        </div>

        {/* Tool Bar */}
        <div className="">
          <CardToolBarDepartment />
        </div>

        {/* Content Area with Cards */}
        <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
          <div>
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left pl-16 py-1 px-4 font-bold text-gray-600 border-b flex">
                    <div className="mr-8">
                      <Checkbox />
                    </div>
                    <div className="mt-2.5">Department Name</div>
                    <div className="text-xl mt-2 ml-2">
                      <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                  </th>
                  <th className="text-left pl-16 py-1 px-4 font-bold text-gray-600 border-b">
                    Description
                  </th>
                  <th className="text-left pl-10 py-1 px-4 font-bold text-gray-600 border-b">
                    Total User
                  </th>
                  <th className="text-left pl-16 py-1 px-4 font-bold text-gray-600 border-b">
                    Edit
                  </th>
                  <th className="text-left font-bold  text-gray-600 border-b ">Delete</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department) => (
                  <tr key={department.Id}>
                    <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b flex">
                      <div className="mr-8 ">
                        <Checkbox />
                      </div>
                      <div className="mt-2.5">{department.DepartmentName}</div>
                    </td>
                    <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b">
                      {department.Description}
                    </td>
                    <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b">
                      {department.TotalUser}
                    </td>
                    <td className="text-left pl-16 py-1 px-4 text-2xl border-b text-blue-800 ">
                      <Link to="/admin/users-department-edit">
                        <div className="cursor-pointer">
                          <ion-icon name="create-outline" />
                        </div>
                      </Link>

                    </td>
                    <td className="text-left pr-6 text-2xl border-b text-rose-700">
                      <div className='cursor-pointer '><ion-icon name="trash-outline" className="cursor-pointer"></ion-icon></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import data from "../../../models/modelDepartment.json";
import Checkbox from "@mui/material/Checkbox";
import CardToolBarDepartment from "../../../components/ToolBar/CardToolBarDepartment";
import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// component

const departments = data.Department;
export default function Departments() {
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>ទំព័រដើម / នាយកដ្ឋាន</p>
        </div>

        {/* Tool Bar */}
        <div className="shadow-sm">
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
                  <th className="text-left pl-3.5 font-bold  text-gray-600 border-b ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department) => (
                  <tr key={department.id}>
                    <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b flex">
                      <div className="mr-8 ">
                        <Checkbox />
                      </div>
                      <div className="mt-2.5">{department.DepartmentName}</div>
                    </td>
                    <td className="text-left pl-1 px-4 text-gray-600 border-b">
                      {department.Description}
                    </td>
                    <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b">
                      {department.TotalUser}
                    </td>
                    {/* button Edit*/}
                    <td className="py-3 px-4 border-b ">
                      <button className="text-blue-600 hover:text-blue-800 mr-2 ">
                        <Link
                          to={`/admin/users-department-edit/${department.id}`}
                        >
                          <div className="cursor-pointer text-xl">
                            <ion-icon name="create-outline" />
                          </div>
                        </Link>
                      </button>
                      {/* Button delete */}
                      <button className="text-red-600 hover:text-red-800">
                        <Link
                          to={`/admin/users-department-delete/${department.id}`}
                        >
                          <div className="cursor-pointer text-xl ">
                            <ion-icon name="trash-outline"></ion-icon>
                          </div>
                        </Link>
                      </button>
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

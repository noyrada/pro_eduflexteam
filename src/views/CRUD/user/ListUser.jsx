import data from "../../../models/db.json";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CardToolBarUser from "../../../components/ToolBar/CardToolBarUser";
import { Link } from "react-router-dom";

// component
const users = data.Users;
export default function ListUser() {
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>ទំព័រដើម / អ្នកប្រើប្រាស់</p>
        </div>

        {/* Tool Bar */}
        <div className="shadow-sm">
          <CardToolBarUser />
        </div>

        {/* Content Area with Cards */}
        <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
          <div>
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-200 font-suwannaphum text-md text-blue-900">
                <tr>
                  <th className="text-left pl-16 py-1 px-4 border-b flex">
                    <div className="mr-8">
                      <Checkbox />
                    </div>
                    <div className="mt-2.5">ឈ្មោះអ្នកប្រើប្រាស់</div>
                    <div className="text-xl mt-2 ml-2">
                      <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                  </th>
                  <th className="text-left pl-10 py-1 px-4 border-b">
                    ដេប៉ាឌឺម៉ង់
                  </th>
                  <th className="text-left pl-10 py-1 px-4 border-b">
                    ស្ថានភាព
                  </th>
                  <th className="text-left pl-10 py-1 px-4 border-b">
                    តួនាទី
                  </th>
                  <th className="text-center pr-6  border-b ">
                    សកម្មភាព
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="text-left pl-16 py-4 px-4 text-gray-600 border-b flex">
                      <div className="mr-8">
                        <Checkbox />
                      </div>
                      <div className="mt-2.5">{user.UserName}</div>
                    </td>
                    <td className="text-left pl-16 py-2 px-4 text-gray-600 border-b">
                      {user.Department}
                    </td>
                    <td className="text-left pl-10 py-1 px-4 text-gray-600 border-b">
                      {user.Status}
                    </td>
                    <td className="text-left pl-10 py-1 px-4 text-gray-600 border-b">
                      {user.RoleName}
                    </td>
                    <td className="text-center pr-6 text-lg border-b">
                      <div className="flex justify-center space-x-6">
                        <Link to={`/admin/users-edit/${user.id}`}>
                          <div className="cursor-pointer hover:text-blue-800">
                            <ion-icon name="create-outline" />
                          </div>
                        </Link>

                        <Link to={`/admin/users-delete/${user.id}`}>
                          <div className="cursor-pointer text-red-600 hover:text-red-800">
                            <ion-icon name="trash-outline" />
                          </div>
                        </Link>
                      </div>
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

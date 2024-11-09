import data from "../../models/db.json";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

// component 
import ToolBarUserManagement from "../../components/ToolBar/Settings/ToolBarUserManagement";

export default function UserManagement() {

    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ការកំណត់ / អ្នកប្រើប្រាស់</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <ToolBarUserManagement />
                </div>

                {/* User Management Table */}
                <div className="bg-white shadow-sm rounded-md mt-2">
                    <div>
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="text-left pl-16 py-1 px-4 font-bold text-gray-600 border-b flex">
                                        <div className="mr-8">
                                            <Checkbox />
                                        </div>
                                        <div className="mt-2.5">User Name</div>
                                        <div className="text-xl mt-2 ml-2">
                                            <ion-icon name="arrow-up-outline"></ion-icon>
                                        </div>
                                    </th>
                                    <th className="text-left pl-10 py-1 px-4 font-bold text-gray-600 border-b">
                                        Department
                                    </th>
                                    <th className="text-left pl-10 py-1 px-4 font-bold text-gray-600 border-b">
                                        Status
                                    </th>
                                    <th className="text-left pl-10 py-1 px-4 font-bold text-gray-600 border-b">
                                        Role
                                    </th>
                                    <th className="text-left pl-3.5 font-bold text-gray-600 border-b">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="text-left pl-16 py-4 px-4 text-gray-600 border-b flex">
                                            <div className="mr-8">
                                                <Checkbox />
                                            </div>
                                            <div className="mt-2.5">Rada</div>
                                        </td>
                                        <td className="text-left pl-16 py-2 px-4 text-gray-600 border-b">
                                            IT
                                        </td>
                                        <td className="text-left pl-10 py-1 px-4 text-gray-600 border-b">
                                            Active
                                        </td>
                                        <td className="text-left pl-10 py-1 px-4 text-gray-600 border-b">
                                           IT
                                        </td>
                                        <td className="py-3 px-4 border-b">
                                            <Link to="/admin/users-edit">
                                                <button className="text-blue-600 hover:text-blue-800 mr-2">
                                                    <div className="cursor-pointer text-xl">
                                                        <ion-icon name="create-outline" />
                                                    </div>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
import data from '../../../models/db.json';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CardToolBarRole from "../../../components/ToolBar/CardToolBarRole";
import {Link} from 'react-router-dom';

// component
const roles = data.Roles;
export default function ListRole() {
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>ទំព័រដើម / តួនាទី</p>
                </div>

        {/* Tool Bar */}
        <div className=" shadow-sm">
          <CardToolBarRole />
        </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
                    <div >
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-200 font-suwannaphum text-md rounded-md font-bold text-blue-900 shadow-sm">
                                <tr>
                                    <th className="text-left pl-16 py-1 px-4 border-b flex">
                                        <div className='mr-8'><Checkbox /></div>
                                        <div className='mt-2.5'>ឈ្មោះតួនាទី</div>
                                        <div className='text-xl mt-2 ml-2'><ion-icon name="arrow-up-outline"></ion-icon></div>
                                    </th>
                                    <th className="text-left pl-16 py-1 px-4 border-b">ពិពណ៌នា</th>
                                    <th className="text-left pl-10 py-1 px-4 border-b">អ្នកប្រើប្រាស់សុរប</th>
                                    <th className="text-left px-4 border-b ">សកម្មភាព</th>
                                    
                                </tr>
                            </thead>
                            <tbody >
                                {roles.map((role) => (
                                    <tr key={role.id}>
                                        <td className="text-left pl-16 py-2 px-4 text-gray-600 border-b flex ">
                                            <div className='mr-8 '><Checkbox /></div>
                                            <div className='mt-2.5'>{role.RoleName}</div>
                                        </td>
                                        <td className="text-left pl-1 px-4 text-gray-600 border-b ">{role.Description}</td>
                                        <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b ">{role.TotalUser}</td>

                

                                        <td className="text-left space-x-6 border-b">
                                            <button className="text-blue-600 hover:text-blue-800 ">
                                                <Link to={`/admin/users-role-edit/${role.id}`}>
                                                    <div className='cursor-pointer text-xl'>
                                                        <ion-icon name="create-outline" />
                                                    </div>
                                                </Link>
                                            </button>

                                            <button className="text-red-600 hover:text-red-800 mr-2">
                                                <Link to={`/admin/users-role-delete/${role.id}`}>
                                                    <div className='cursor-pointer text-xl'>
                                                        <ion-icon name="trash-outline" ></ion-icon>
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
    )
}

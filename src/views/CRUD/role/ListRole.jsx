import data from './RoleData.json';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import CardToolBarRole from "../../../components/ToolBar/CardToolBarRole";
// component 
const roles = data.Roles;
export default function ListRole() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/Roles')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

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
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="text-left pl-16 py-1 px-4 font-bold text-gray-600 border-b flex">
                                        <div className='mr-8'><Checkbox /></div>
                                        <div className='mt-2.5'>Role Name</div>
                                        <div className='text-xl mt-2 ml-2'><ion-icon name="arrow-up-outline"></ion-icon></div>
                                    </th>
                                    <th className="text-left pl-16 py-1 px-4 font-bold  text-gray-600 border-b">Description</th>
                                    <th className="text-left pl-10 py-1 px-4 font-bold  text-gray-600 border-b">Total User</th>
                                    <th className="text-left pl-16 py-1 px-4 font-bold  text-gray-600 border-b">Edit</th>
                                </tr>
                            </thead>
                            <tbody >
                                {roles.map((role) => (
                                    <tr key={role.id}>
                                        <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b flex">
                                            <div className='mr-8 '><Checkbox /></div>
                                            <div className='mt-2.5'>{role.RoleName}</div>
                                        </td>
                                        <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b">{role.Description}</td>
                                        <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b">{role.TotalUser}</td>
                                        <td className="text-left pl-16 py-1 px-4 text-2xl border-b text-blue-800 ">
                                            <div className='cursor-pointer'><ion-icon name="create-outline" /></div>
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

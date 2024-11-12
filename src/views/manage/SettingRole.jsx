import React, { useEffect, useState } from "react";
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

// component 
import data from '../../models/db.json';
import ToolBarRole from "../../components/ToolBar/Settings/ToolBarRole";

const roles = data.Roles;
export default function SettingRole() {

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
                    <p>តួនាទី / ការអនុញ្ញាត</p>
                </div>

                {/* Tool Bar */}
                <div className="">
                    <ToolBarRole />
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-lg mt-2">
                    <div >
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-200 font-suwannaphum text-md rounded-md font-bold text-blue-900 shadow-sm">
                                <tr>
                                    <th className="text-left pl-16 py-1 px-4  border-b flex">
                                        <div className='mr-8'><Checkbox /></div>
                                        <div className='mt-2.5'>ឈ្មោះតួនាទី</div>
                                        <div className='text-lg mt-2 ml-2'><ion-icon name="arrow-up-outline"></ion-icon></div>
                                    </th>
                                    <th className="text-left pl-16 py-1 px-4  border-b">
                                        ពិពណ៌នា
                                    </th>
                                    <th className="text-center pr-6  border-b ">
                                        សកម្មភាព
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {roles.map((role) => (
                                    <tr key={role.id}>
                                        <td className="text-left pl-16 py-1 px-4 text-gray-600 border-b flex">
                                            <div className='mr-8 '><Checkbox /></div>
                                            <div className='mt-2.5'>{role.RoleName}</div>
                                        </td>
                                        <td className="text-left py-1 px-4 text-gray-600 border-b ">
                                            {role.Description}
                                        </td>

                                        <td className="text-center pr-6 text-lg border-b">
                                            <div className="flex justify-center space-x-6">
                                                <Link to="/admin/users-role">
                                                    <div className="cursor-pointer text-blue-600">
                                                        <ion-icon name="create-outline" />
                                                    </div>
                                                </Link>

                                                <Link to="/admin/users-role">
                                                    <div className="cursor-pointer text-gray-600">
                                                        <ion-icon name="settings-outline" />
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
    )
}
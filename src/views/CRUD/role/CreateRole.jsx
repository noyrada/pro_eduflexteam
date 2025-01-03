import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

// components

export default function CreateRole({ isOpen, onClose, onSubmit }) {
    const [values, setValues] = useState({
        RoleName: '',
        Description: '',
        TotalUser: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/Roles', values)
            .then(res => {
                console.log(res);
                navigate('/admin/users-role');
                onClose();
            })
            .catch(err => console.log(err));
    }
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 font-sans">
                <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[50%]">
                    <h3 className="text-md mb-4 text-center font-suwannaphum">បង្កើតតួនាទី</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div >
                            <label className="block text-gray-700 font-suwannaphum text-sm mb-1" htmlFor="roleName">
                                ឈ្មោះ
                            </label>
                            <input
                                type="text"
                                name='roleName'
                                className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onChange={e => setValues({ ...values, RoleName: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-suwannaphum text-sm mb-1" htmlFor="roleName">
                                ពិពណ៌នា
                            </label>
                            <input
                                type="textarea"
                                name='Description'
                                className="w-full h-32 p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onChange={e => setValues({ ...values, Description: e.target.value })}
                                required
                            />
                        </div>
                       
                        <div className="flex justify-end space-x-2 mt-4">
                            <Link to="/admin/users-role">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition font-suwannaphum text-sm'>
                                    ថយក្រោយ
                                </button>
                            </Link>

                            <button
                                type='submit'
                                //onClick={onsubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-suwannaphum text-sm"
                            >
                                បង្កើតថ្មី
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
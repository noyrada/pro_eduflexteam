import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// components

export default function CreateRole({ isOpen, onClose, onSubmit }) {
    const [values,setValues]=useState({
        RoleName:'',
        Description:'',
        TotalUser:''
    })
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/Roles',values)
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
                    <h3 className="text-lg font-semibold mb-2 text-center">Add New Role</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div >
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="roleName">
                                Role Name
                            </label>
                            <input 
                                type="text" 
                                name='roleName' 
                                className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                                placeholder='Enter role name' 
                                onChange={e=>setValues({...values,RoleName:e.target.value})}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="roleName">
                                Description
                            </label>
                            <input 
                                type="text" 
                                name='Description' 
                                className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                                placeholder='Enter description' 
                                onChange={e=>setValues({...values,Description:e.target.value})}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="roleName">
                                Total User
                            </label>
                            <input 
                                type="text" 
                                name='TotalUser' 
                                className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                                placeholder='Enter total user' 
                                onChange={e=>setValues({...values,TotalUser:e.target.value})}
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={onClose} 
                                className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition'>
                                Cancel
                            </button>

                            <button
                                type='submit'
                                // onClick={onsubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 btn btn-success"
                            >
                                Add Role
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// component 

export default function UpdateRole() {
  const [data,setData]=useState([])
  const {id}=useParams();
  const [values,setValues]=useState({
    RoleName:'',
    Description:'',
    TotalUser:''
  })
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/Roles/'+id)
      .then(res=>setValues(res.data))
      .catch(err=>console.log(err));
  },[])

  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3000/Roles/'+id,values)
    .then(res=>{
      console.log(res);
      navigate('/admin/users-role')
    })
    .catch(err=>console.log(err));
  }
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>តួនាទី / កែប្រែ</p>
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 font-sans">
                    <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[50%]">
                        <h3 className="text-lg font-semibold mb-2 text-center">Update User</h3>
                        <form onSubmit={handleUpdate} className="space-y-4">
                        <div >
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="roleName">
                            Role Name
                        </label>
                        <input 
                            type="text" 
                            name='RoleName' 
                            className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            placeholder='Enter role name' 
                            value={values.RoleName}
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
                            value={values.Description}
                            onChange={e=>setValues({...values,Description:e.target.value})}
                            required
                            />
                        </div>

                        <div className="flex justify-end space-x-2">
                        <Link to={'/admin/users-role'}>
                            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition'>
                                Cancel
                            </button>
                        </Link>

                            <button
                            type='submit'
                            // onClick={onsubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 btn btn-success"
                            >
                            Update
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// component 

export default function DeleteUser() {
  const [data, setData] = useState([])
  const { id } = useParams();
  const navigate=useNavigate();
  useEffect(() => {
      axios.get('http://localhost:8000/Users')
          .then(res => setData(res.data))
          .catch(err => console.log(err));
  }, [])
  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:8000/Users/${id}`)
      .then(() => {
        navigate('/admin/users');
      })
      .catch(err => console.log(err));
  };
    return (
        <>
            <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
                {/* Breadcrumb */}
                <div className="text-md mb-3">
                    <p>អ្នកប្រើប្រាស់ / លុប</p>
                </div>

                {/* Content Area with Cards */}
                <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 font-sans">
                    <div className="bg-white p-6 rounded-lg w-[25%] mx-4 shadow-lg h-[25%]">
                        
                        <h3 className="text-lg mb-2 text-center font-suwannaphum">លុបអ្នកប្រើប្រាស់</h3>
            
                        <form onSubmit={(event) => handleDelete(event)} className="space-y-4">
                          <div>
                            <h6 className='pt-3 font-suwannaphum text-md'>តើអ្នកប្រាកដថាចង់លុបអ្នកប្រើប្រាស់នេះទេ?</h6>
                          </div>
                          
                          <div className="flex justify-end space-x-2 pt-3">
                            <Link to={'/admin/users'}>
                                <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition font-suwannaphum text-md'>
                                    ថយក្រោយ
                                </button>
                            </Link>
                              <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-suwannaphum text-md">
                                លុប
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
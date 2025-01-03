import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// component

export default function DeleteDepartment() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/Department")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/Department/${id}`)
      .then(() => {
        navigate("/admin/users-department");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>ដេប៉ាឌឺម៉ង់ / លុប</p>
        </div>
        {/* Content Area with Cards */}
        <div className="bg-white shadow-sm rounded-md mt-2 font-suwannaphum">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            <div className="bg-white p-6 rounded-lg w-[25%] mx-4 shadow-lg h-[25%]">
              {/*  */}
              <h3 className="text-lg font-semibold mb-2 text-center">
                លុបដេប៉ាឌឺម៉ង់
              </h3>
              <form
                onSubmit={(event) => handleDelete(event)}
                className="space-y-4"
              >
                <div>
                  {/* Post Message */}
                  <h6 className="pt-3">
                  តើអ្នកប្រាកដថាចង់លុដេប៉ាឌឺម៉ង់នេះទេ?
                  </h6>
                </div>

                <div className="flex justify-end space-x-2 pt-3">
                  <Link to={"/admin/users-department"}>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">
                      ថយក្រោយ
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 btn btn-success"
                  >
                    លុប
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

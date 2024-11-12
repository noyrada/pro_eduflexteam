import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// component

export default function UpdateDepartment() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    DepartmentName: "",
    Description: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/Department/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/Department/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/admin/users-department");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>នាយកដ្ឋាន / កែប្រែ</p>
        </div>

        {/* Content Area with Cards */}
        <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 font-sans">
            <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[50%]">
              <h3 className="text-lg mb-4 text-center font-suwannaphum text-gray-700">
                កែប្រែដេប៉ាឌឺម៉ង
              </h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 font-suwannaphum text-md mb-1"
                    htmlFor="departmentName"
                  >
                    ឈ្មោះ
                  </label>
                  <input
                    type="text"
                    name="DepartmentName"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={values.DepartmentName}
                    onChange={(e) =>
                      setValues({ ...values, DepartmentName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-1 font-suwannaphum text-md"
                    htmlFor="departmentName"
                  >
                  ពិពណ៌នា
                  </label>
                  <input
                    type="textarea"
                    name="Description"
                    className="w-full h-32 p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={values.Description}
                    onChange={(e) =>
                      setValues({ ...values, Description: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  {/* <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button> */}
                  <Link to={"/admin/users-department"}>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition font-suwannaphum text-md">
                      ថយក្រោយ
                    </button>
                  </Link>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-suwannaphum text-md"
                  >
                    កែប្រែ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

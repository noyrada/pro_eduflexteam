import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// component
export default function UpdateUser() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    UserName: "",
    Department: "",
    RoleName: "",
    Status: "",
  });
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Users/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/Users/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/admin/users"); // Navigate to the user list after update
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
        {/* Breadcrumb */}
        <div className="text-md mb-3">
          <p>អ្នកប្រើប្រាស់ / កែប្រែ</p>
        </div>

        {/* Content Area with Cards */}
        <div className="bg-white shadow-sm rounded-md mt-2 font-sans">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 font-sans">
            <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[60%]">
              <h3 className="text-md font-suwannaphum mb-2 text-center">
                កែប្រែអ្នកប្រើប្រាស់
              </h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 font-suwannaphum text-sm mb-1"
                    htmlFor="userName"
                  >
                    ឈ្មោះអ្នកប្រើប្រាស់
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    className="font-suwannaphum text-sm w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={values.UserName}
                    onChange={(e) =>
                      setValues({ ...values, UserName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-suwannaphum text-sm mb-1"
                    htmlFor="department"
                  >
                    ដេប៉ាឌឺម៉ង់
                  </label>
                  <input
                    type="text"
                    name="Department"
                    className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={values.Department}
                    onChange={(e) =>
                      setValues({ ...values, Department: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-suwannaphum text-sm  mb-1"
                    htmlFor="roleName"
                  >
                    តួនាទី
                  </label>
                  <input
                    type="text"
                    name="RoleName"
                    className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={values.RoleName}
                    onChange={(e) =>
                      setValues({ ...values, RoleName: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-suwannaphum text-sm  mb-1"
                    htmlFor="roleName"
                  >
                    ស្ថានភាព
                  </label>
                  <input
                    type="text"
                    name="Status"
                    className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={values.Status}
                    onChange={(e) =>
                      setValues({ ...values, Status: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-end space-x-2 font-suwannaphum text-sm ">
                  <Link to={"/admin/users"}>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">
                      ថយក្រោយ
                    </button>
                  </Link>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 btn btn-success"
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

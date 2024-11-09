import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// components

export default function CreateUser({ isOpen, onClose, onSubmit }) {
  // const [values, setValues] = useState({
  //   UserName: "",
  //   Department: "",
  //   RoleName: "",
  //   Status: "",
  // });
  // const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:8000/Users", values)
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/admin/users");
  //       onClose();
  //     })
  //     .catch((err) => console.log(err));
  // };

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-20 font-sans">
        <div className="bg-white p-6 rounded-lg w-[60%] mx-4 shadow-lg h-auto">
          <div className="w-full flex justify-between items-center bg-white rounded-lg">
            <h3 className="text-md mb-4 text-center font-suwannaphum">
              បង្កើតអ្នកប្រើប្រាស់
            </h3>
            <div className="flex justify-end space-x-3">
              <Link to="/admin/users">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400 font-suwannaphum text-md"
                >
                  ថយក្រោយ
                </button>
              </Link>

              <button
                type="submit"
                onClick={onsubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-suwannaphum text-md">
                បង្កើតថ្មី
              </button>
            </div>
          </div>

          {/* form */}
          <form>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  User Type
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm">
                  <option>Admin</option>
                  <option>User</option>
                  <option>Guest</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(855 xxx xxx xxxx)"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                />
              </div>

              {/* User Role */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <div className="mt-1 grid grid-cols-2 gap-2 p-2 border rounded-lg max-h-40 overflow-y-auto bg-gray-50">
                  ghjkl
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}


// Old Code:
{/* <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="roleName"
              >
                User Name
              </label>
              <input
                type="text"
                name="UserName" // Change 'User Name' to 'UserName'
                className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="User Name"
                onChange={(e) =>
                  setValues({ ...values, UserName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="userName"
              >
                Department
              </label>
              <input
                type="text"
                name="Department"
                className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Department"
                onChange={(e) =>
                  setValues({ ...values, Department: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="roleName"
              >
                Role
              </label>
              <input
                type="text"
                name="RoleName"
                className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter RoleName"
                onChange={(e) =>
                  setValues({ ...values, RoleName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="roleName"
              >
                Status
              </label>
              <input
                type="text"
                name="Status"
                className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Status"
                onChange={(e) =>
                  setValues({ ...values, Status: e.target.value })
                }
                required
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Link to="/admin/users">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                // onClick={onsubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 btn btn-success"
              >
                Add Role
              </button>
            </div>
          </form> */}

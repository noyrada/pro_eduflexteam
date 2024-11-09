import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// components

export default function CreateUser({ isOpen, onClose, onSubmit }) {
  const [values, setValues] = useState({
    UserName: "",
    Department: "",
    RoleName: "",
    Status: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/Users", values)
      .then((res) => {
        console.log(res);
        navigate("/admin/users"); // navigate to users page
        onClose(); // close modal
      })
      .catch((err) => console.log(err));
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 font-sans">
        <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[65%]">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Create User
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
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
          </form>
        </div>
      </div>
    </>
  );
}

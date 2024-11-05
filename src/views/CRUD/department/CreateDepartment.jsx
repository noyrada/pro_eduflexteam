import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//cpmponents

export default function CreateDepartment({ isOpen, onClose, onSubmit }) {
  const [values, setValues] = useState({
    DepartmentName: "",
    Description: "",
    TotalUser: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/Department", values)
      .then((res) => {
        console.log(res);
        navigate("/admin/users-department");
        onClose();
      })
      .catch((err) => console.log(err));
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
        <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[50%]">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Add New Department
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="departmentName"
              >
                Department Name
              </label>
              <input
                type="text"
                name="departmentName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter department name"
                onChange={(e) =>
                  setValues({ ...values, DepartmentName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="departmentName"
              >
                Description
              </label>
              <input
                type="text"
                name="Description"
                className="w-full p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter description"
                onChange={(e) =>
                  setValues({ ...values, Description: e.target.value })
                }
                required
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

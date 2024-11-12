import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//cpmponents

export default function CreateDepartment({ isOpen, onClose, onSubmit }) {
  const [values, setValues] = useState({
    DepartmentName: "",
    Description: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/Department", values)
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
          <h3 className="text-lg font-suwannaphum mb-4 text-center">
            បង្កើតដេប៉ាឌឺម៉ង់
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-suwannaphum text-sm mb-1"
                htmlFor="departmentName"
              >
                ឈ្មោះ
              </label>
              <input
                type="text"
                name="departmentName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) =>
                  setValues({ ...values, DepartmentName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-suwannaphum text-sm mb-1"
                htmlFor="departmentName"
              >
                ពិពណ៌នា
              </label>
              <input
                type="textarea"
                name="Description"
                className="w-full h-32 p-2 border border-gray-300 form-control rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition font-suwannaphum text-md"
              >
                ថយក្រោយ
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-suwannaphum text-md"
              >
                រក្សាទុក
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

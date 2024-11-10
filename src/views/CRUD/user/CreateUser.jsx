import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function CreateUser({ isOpen, onClose }) {
  const [values, setValues] = useState({
    f_name: "",
    l_name: "",
    gender: "",
    password: "",
    dob: "",
    UserName: "",
    usertype: "",
    Status: "",
    Phone: "",
    Email: "",
    Department: "",
    RoleName: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/Users", values)
      .then((res) => {
        console.log(res);
        navigate("/admin/users");
        onClose();
      })
      .catch((err) => console.log(err));
  };

  if (!isOpen) return null;

  return (
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
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-suwannaphum text-md"
            >
              បង្កើតថ្មី
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                name="f_name"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="First Name"
                onChange={(e) =>
                  setValues({ ...values, f_name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                name="l_name"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="Last Name"
                onChange={(e) =>
                  setValues({ ...values, l_name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username *
              </label>
              <input
                type="text"
                name="UserName"
                className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="User Name"
                onChange={(e) =>
                  setValues({ ...values, UserName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={values.gender}
                onChange={(e) =>
                  setValues({ ...values, gender: e.target.value })
                }
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border form-control border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                required
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
                onChange={(e) => setValues({ ...values, dob: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Type
              </label>
              <select
                name="usertype"
                value={values.usertype}
                onChange={(e) =>
                  setValues({ ...values, usertype: e.target.value })
                }
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                required
              >
                <option value="">Select User type</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Admin">Co-Admin</option>
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
                onChange={(e) =>
                  setValues({ ...values, Phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                onChange={(e) =>
                  setValues({ ...values, Email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="Status"
                value={values.Status}
                onChange={(e) =>
                  setValues({ ...values, Status: e.target.value })
                }
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                onChange={(e) =>
                  setValues({ ...values, Department: e.target.value })
                }
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                onChange={(e) =>
                  setValues({ ...values, RoleName: e.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

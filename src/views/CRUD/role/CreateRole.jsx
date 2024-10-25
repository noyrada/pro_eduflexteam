import React from "react";

// components

export default function CreateRole({ isOpen, onClose, onSubmit }) {
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
                <div className="bg-white p-6 rounded-lg w-[40%] mx-4 shadow-lg h-[50%]">
                    <h3 className="text-lg font-semibold mb-4 text-center">Add New Role</h3>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="roleName">
                                Role Name
                            </label>
                            <input
                                type="text"
                                id="roleName"
                                name="roleName"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter role name"
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
                                Add Role
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
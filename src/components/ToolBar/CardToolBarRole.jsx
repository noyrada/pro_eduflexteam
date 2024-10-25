import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RoleModal from "../../views/CRUD/role/CreateRole"; // Adjust the path as necessary

export default function CardToolBarRole() {
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to toggle modal visibility
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // Form submission handler
    const handleRoleSubmit = (event) => {
        event.preventDefault();
        const roleName = event.target.roleName.value;
        console.log("New Role:", roleName);
        // Add logic to handle the role name submission (e.g., API request)
        closeModal();
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* Users */}
                    <Link
                        to="/admin/users"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/users") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Users
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/users-role"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/users-role") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Roles
                    </Link>

                    {/* Department */}
                    <Link
                        to="/admin/users-department"
                        className={`py-2 px-4 rounded-lg block ${isActive("/admin/users-department") ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                    >
                        Departments
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">
                    {/* Add New Role Button to open modal */}
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center"
                    >
                        <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                        Add Role
                    </button>

                    {/* Filter Button */}
                    <button className="bg-green-500 text-white py-2 px-3 rounded-lg flex items-center">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        Filter
                    </button>
                </div>
            </div>

            {/* Role Modal */}
            <RoleModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleRoleSubmit} />
        </div>
    );
}

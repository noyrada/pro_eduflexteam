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
        <div className="bg-white p-2 rounded-md text-sm font-suwannaphum">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* Users */}
                    <Link
                        to="/admin/users"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/users") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        អ្នកប្រើប្រាស់់
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/users-role"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/users-role") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        តួនាទី
                    </Link>

                    {/* Department */}
                    <Link
                        to="/admin/users-department"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/users-department") ? "bg-gray-300 text-gray-900 shadow-md" : "text-gray-700 hover:text-blue-800"}`}
                    >
                        នាយកដ្ឋាន
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">
                    {/* Add New Role Button to open modal */}
                    <button
                        onClick={openModal}
                        className="bg-gray-300 text-gray-900 shadow-md py-2 px-3 rounded-md flex items-center"
                    >
                        <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                        បង្កើតថ្មី
                    </button>

                    {/* Filter Button */}
                    <button className="bg-gray-300 text-gray-900 shadow-md py-2 px-3 rounded-md flex items-center">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        តម្រង
                    </button>
                </div>
            </div>

            {/* Role Modal */}
            <RoleModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleRoleSubmit} />
        </div>
    );
}

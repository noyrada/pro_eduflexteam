import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DepartmentModal from "../../views/CRUD/department/CreateDepartment"; // Adjust the path as necessary

export default function CardToolBarDepartment() {
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to toggle modal visibility
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // Form submission handler
    const handleDepartmentSubmit = (event) => {
        event.preventDefault();
        const departmentName = event.target.departmentName.value;
        console.log("New Department:", departmentName);
        // Add logic to handle the department name submission (e.g., API request)
        closeModal();
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white p-2 rounded-md font-suwannaphum text-sm">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex space-x-4">
                    {/* Users */}
                    <Link
                        to="/admin/users"
                        className={` py-2 px-4 rounded-md block ${isActive("/admin/users") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        អ្នកប្រើប្រាស់់
                    </Link>
                    {/* User Roles */}
                    <Link
                        to="/admin/users-role"
                        className={` py-2 px-4 rounded-md block ${isActive("/admin/users-role") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        តួនាទី
                    </Link>

                    {/* Department */}
                    <Link
                        to="/admin/users-department"
                        className={`py-2 px-4 rounded-md block ${isActive("/admin/users-department") ? "bg-gray-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-900"}`}
                    >
                        ដេប៉ាដឺម៉ង់
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex space-x-4 items-center">
                    {/* Add New Department Button to open modal */}
                    <button
                        onClick={openModal}
                        className="bg-gray-200 text-blue-900 py-2 px-3 rounded-md flex items-center shadow-md"
                    >
                        <ion-icon name="add-circle-outline" className="pr-2"></ion-icon>
                        បង្កើតថ្មី
                    </button>

                    {/* Filter Button */}
                    <button className="bg-gray-200 text-blue-900 py-2 px-3 rounded-md flex items-center shadow-md">
                        <ion-icon name="filter-outline" className="pr-2"></ion-icon>
                        តម្រង
                    </button>
                </div>
            </div>

            {/* Department Modal */}
            <DepartmentModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleDepartmentSubmit} />
        </div>
    );
}

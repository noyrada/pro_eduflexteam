import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa"; // Icons for dropdown
import { FiSettings, FiUser, FiLayers, FiBook, FiBarChart2 } from "react-icons/fi"; // Icons for sections
import ToolBarPage from "../../components/ToolBar/Settings/ToolBarPage";

const Dropdown = ({ title, items, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left bg-gray-100 p-3 font-semibold text-gray-800 rounded-md hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
                <div className="flex items-center space-x-2">
                    {icon}
                    <span>{title}</span>
                </div>
                <span className="text-gray-500">
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>
            </button>
            {isOpen && (
                <div className="pl-6 mt-2 space-y-2 transition-all duration-200 ease-in-out">
                    {items.map((item, index) => (
                        <div key={index} className="mb-2">
                            <span className="text-gray-600 font-normal">{item.label}</span>
                            {item.subItems && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <p key={subIndex} className="text-gray-500 pl-2">
                                            • {subItem}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function SettingPage() {
    const sections = [
        {
            title: "ការគ្រប់គ្រងទំព័រ",
            items: [],
            icon: <FiSettings className="text-blue-500" />,
        },
        {
            title: "តួនាទីនិង ​ការអនុញ្ញាត",
            items: [
                {
                    label: "កំណត់សិទ្ធអនុញ្ញាត",
                    subItems: ["CREATE", "EDIT", "APPLY PERMISSION", "DELETE"],
                },
            ],
            icon: <FiLayers className="text-green-500" />,
        },
        {
            title: "ការគ្រប់គ្រងអ្នកប្រើប្រាស់",
            items: [
                {
                    label: "កំណត់សិទ្ធអនុញ្ញាត",
                    subItems: ["CREATE", "EDIT", "RESET PASSWORD", "LOCK AND UNLOCK", "DELETE"],
                },
            ],
            icon: <FiUser className="text-purple-500" />,
        },
        {
            title: "ការគ្រប់គ្រងនាយកដ្ឋាន",
            items: [
                {
                    label: "កំណត់សិទ្ធអនុញ្ញាត",
                    subItems: ["CREATE", "EDIT", "APPLY PERMISSION", "DELETE"],
                },
            ],
            icon: <FiLayers className="text-red-500" />,
        },
        {
            title: "វគ្គសិក្សា",
            items: [
                {
                    label: "កំណត់សិទ្ធអនុញ្ញាត",
                    subItems: ["CREATE", "EDIT", "DELETE"],
                },
            ],
            icon: <FiBook className="text-yellow-500" />,
        },
        {
            title: "ផ្ទាំងគ្រប់គ្រង",
            items: [],
            icon: <FiSettings className="text-teal-500" />,
        },
        {
            title: "របាយការណ៍",
            items: [],
            icon: <FiBarChart2 className="text-indigo-500" />,
        },
    ];

    return (
        <div className="grid grid-rows-[auto,auto,1fr] mx-8 font-suwannaphum text-sm">
            {/* Breadcrumb */}
            <div className="text-md mb-3">
                <p className="text-gray-600">ការកំណត់ / ទំព័រ</p>
            </div>

            {/* Tool Bar */}
            <div>
                <ToolBarPage />
            </div>

            {/* Content Area with Cards */}
            <div className="bg-white shadow-sm rounded-md mt-2">
                <div className="p-6 bg-gray-50 rounded-md">
                    {sections.map((section, index) => (
                        <Dropdown
                            key={index}
                            title={section.title}
                            items={section.items}
                            icon={section.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

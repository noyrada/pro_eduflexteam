import React from "react";
import Flag from "../../assets/images/Khmer_language.png";
import User from "../../assets/images/profile-rada.jpg";
import { Search, Bell, ChevronDown } from "lucide-react";

// component

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="flex top-0 left-0 w-full z-10 bg-blue-600 items-center justify-between p-3 shadow-[0_5px_10px_rgba(0,0,0,0.3)]">
                <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">

                    {/* Form */}
                    <form className="flex-grow flex justify-center">
                        <div className="relative flex w-full max-w-md">
                            <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <i className="fas fa-search"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Search your course..."
                                className="border-0 px-2 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                            />
                        </div>
                    </form>

                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex space-x-4">
                        {/* flag */}
                        <li>
                            <button className="cursor-pointer text-white p-0">
                                <img
                                    src={Flag}
                                    alt="flag"
                                    className="h-7 w-7 rounded-full border"
                                />
                            </button>
                        </li>
                        {/* Bell icon */}
                        <li>
                            <button className="cursor-pointer text-white p-0">
                                <Bell className="h-7 w-7" />
                            </button>
                        </li>

                        {/* User profile */}
                        <li>
                            <button className="cursor-pointer text-white p-0">
                                <img
                                    src={User}
                                    alt="flag"
                                    className="h-7 w-7 rounded-full border"
                                />
                            </button>
                        </li>

                        {/* <UserDropdown /> */}
                        <li>
                            <button className="cursor-pointer text-white p-1 mr-2">
                                <ChevronDown className="h-7 w-7" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}

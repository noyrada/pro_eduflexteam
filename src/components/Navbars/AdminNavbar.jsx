import React from "react";
import Flag from "../../assets/images/Khmer_language.png";
import User from "../../assets/images/profile-rada.jpg";
import { Search, Bell, ChevronDown } from "lucide-react";

// views
import ProfileMenu from "../../views/profiles/ProfileMenu";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="flex z-10 top-0 start-0 shadow-xl bg-white items-center p-2 justify-between ml-[3px]">
                <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10">

                    {/* Form */}
                    <form className="flex-grow flex justify-center">
                        <div className=" flex w-80 bg-white rounded-2xl">
                            <span className="z-10 h-full leading-snug font-normal text-center text-gray-600 absolute text-base items-center justify-center w-8 pl-3 py-2">
                                <i className="fas fa-search"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Search your course..."
                                className="border-gray-300 px-2 py-2 placeholder-blueGray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none w-full pl-10"
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
                                    className="h-6 w-6 rounded-full border"
                                />
                            </button>
                        </li>
                        {/* Bell icon */}
                        <li>
                            <button className="cursor-pointer text-gray-600 p-1">
                                <Bell className="h-6 w-6" />
                            </button>
                        </li>

                        {/* User profile */}
                        <li>
                            <button className="cursor-pointer">
                            <ProfileMenu />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}

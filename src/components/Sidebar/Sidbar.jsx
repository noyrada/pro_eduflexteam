import React from "react";
import logo from "../../assets/images/EduFlex-logo.png";
import { Link, NavLink } from "react-router-dom";

// component

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10  px-6">
                <div className="md:flex-col  md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* Brand */}
                    <div className="flex items-center">
                        <Link className="inline-flex items-center" to="/">
                            <img
                                src={logo}
                                className="w-[100px]"
                                alt="logo"
                            />
                            <span className="text-xl text-blue-950 font-bold">
                                EduFlex
                            </span>
                        </Link>
                    </div>
                    
                    {/* menu */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +collapseShow
                        }
                    >
                        <div className="mt-2">
                            <ul>
                                <li className="mb-3">
                                    <NavLink
                                        to="/admin/dashboard"
                                        className={({ isActive }) =>
                                            isActive
                                                ? " text-white bg-blue-600 px-2 p-2 rounded-lg block"
                                                : "px-2 p-2 text-gray-700"
                                        }
                                    >
                                        <span className=" md:mr-2 text-xl">
                                            {" "}
                                            <ion-icon name="grid-outline"></ion-icon>{" "}
                                        </span>{" "}
                                        <span className=" absolute left-[14%] md:left-12  ">
                                            {" "}
                                            Dashboard
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink
                                        to="/admin/courses"
                                        className={({ isActive }) =>
                                            isActive
                                                ? " text-white px-2 p-2 rounded-lg  bg-blue-600 block "
                                                : "px-2 p-2 text-gray-700"
                                        }
                                    >
                                        <span className=" md:mr-2 text-xl">
                                            <ion-icon name="newspaper-outline"></ion-icon>
                                        </span>{" "}
                                        <span className=" absolute left-[14%] md:left-12">
                                            Courses
                                        </span>
                                    </NavLink>
                                </li>

                                {/* Users */}
                                <li className="mb-3">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? " text-white px-2 p-2  bg-blue-600  rounded-lg block "
                                                : "px-2 p-2 text-gray-700"
                                        }>
                                        <span className=" md:mr-2 text-xl">
                                            <ion-icon name="person-outline"></ion-icon>
                                        </span>
                                        <span className=" absolute left-[14%] md:left-12 ">
                                            Users
                                        </span>
                                    </NavLink>
                                </li>

                                {/* Reports */}
                                <li className="mb-3">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? " text-white px-2 p-2  bg-blue-600  rounded-lg block "
                                                : "px-2 p-2 text-gray-700"
                                        }>
                                        <span className=" md:mr-2 text-xl">
                                            <ion-icon name="pie-chart-outline"></ion-icon>
                                        </span><span className=" absolute left-[14%] md:left-12">
                                            Reports
                                        </span>
                                    </NavLink>
                                </li>

                                {/* Settings */}
                                <li className="mb-3">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? " text-white px-2 p-2  bg-blue-600  rounded-lg block "
                                                : "px-2 p-2 text-gray-700"
                                        }>

                                        <span className=" md:mr-2 text-xl">
                                            <ion-icon name="settings-outline"  ></ion-icon>
                                        </span> <span className=" absolute left-[14%] md:left-12">
                                            Settings
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

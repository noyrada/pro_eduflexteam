import React from "react";
import logo from "../../assets/images/EduFlex-logo.png";
import { Link, NavLink } from "react-router-dom";

// component

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-400 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block  md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm  font-bold py-4  md:pt-5  px-0"
                        to="/"
                    >
                        <img
                            src={logo}
                            className="md:w-[100px] w-[100px] left-1/3 -top-1.5 sm:left-[37%] sm:-top-1.5  absolute md:left-0  md:-top-1    "
                            alt="logo"
                        />{" "}
                        <span className="md:ml-16 md:text-xl sm:ml-8 ml-7 text-xl text-blue-950 ">
                            EduFlex
                        </span>
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">

                        </li>
                        <li className="inline-block relative">

                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        EduFlex
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                            <ul>
                                <li className="mb-5">
                                    <NavLink
                                        to="/admin"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-xl text-white bg-blue-600 pl-3 p-2 rounded-md block"
                                                : "pl-3 p-2 text-gray-700 text-xl"
                                        }
                                    >
                                        <span className=" md:mr-2 text-2xl"> <ion-icon name="grid-outline"  ></ion-icon> </span> <span className=" absolute left-[14%] md:left-12  "> Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="mb-5">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-xl text-white p-2 pl-3  bg-blue-600  rounded-md block "
                                                : "p-2 pl-3 text-gray-700 text-xl"
                                        }
                                    >
                                        <span className=" md:mr-2 text-2xl"><ion-icon name="newspaper-outline"></ion-icon></span> <span className=" absolute left-[14%] md:left-12">Courses</span>
                                    </NavLink>
                                </li>

                                <li className="mb-5">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-xl text-white p-2 pl-3  bg-blue-600  rounded-md block "
                                                : "p-2  pl-3 text-gray-700 text-xl"
                                        }>
                                        <span className=" md:mr-2 text-2xl"><ion-icon name="person-outline"></ion-icon></span> <span className=" absolute left-[14%] md:left-12 ">Users</span>
                                    </NavLink>
                                </li>
                                <li className="mb-5">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-xl text-white p-2 pl-3  bg-blue-600  rounded-md block "
                                                : "p-2  pl-3 text-gray-700 text-xl"
                                        }>
                                        <span className=" md:mr-2 text-2xl"><ion-icon name="pie-chart-outline"></ion-icon></span><span className=" absolute left-[14%] md:left-12">Reports</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-xl text-white p-2 pl-3  bg-blue-600  rounded-md block "
                                                : "p-2  pl-3 text-gray-700  text-xl"
                                        }>

                                        <span className=" md:mr-2 text-2xl"> <ion-icon name="settings-outline"  ></ion-icon></span> <span className=" absolute left-[14%] md:left-12"> Settings</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </>
    );
}

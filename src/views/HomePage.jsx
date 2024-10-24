import React from "react";
import logo from "../assets/images/EduFlex-logo.png";

// components
import Sidebar from "../components/Sidebar/Sidbar.jsx";
import AdminNavbar from '../components/Navbars/AdminNavbar.jsx';
import FooterHome from '../components/Footer/FooterHome.jsx';

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-[auto_1fr_auto] h-screen">
        {/* Sidebar */}
        <div className="col-span-1 row-span-full bg-gray-100">
          <Sidebar />
        </div>

        {/* Header */}
        <div className="col-span-5 bg-white">
          <AdminNavbar />
        </div>

        {/* Main Content */}
        <div className="col-span-5 row-span-1 bg-gray-300">
          <div className="grid place-items-center">
            <div className="text-center mt-9">
              {/* Corrected image src reference */}
              <img
                src={logo}
                alt="EduFlex"
                className="mx-auto w-96 h-80"
              />
              <h1 className="text-center text-4xl font-bold">
                Welcome to EduFlex
              </h1>
              <span className="text-blue-800 font-thin text-xl">
                Learning Management System
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="col-span-5 bg-gray-300">
          <FooterHome />
        </div>
      </div>
    </>
  );
}

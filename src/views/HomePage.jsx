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
        <div className="col-span-5 row-span-1 bg-gray-200">
          <div className="grid place-items-center">
            <div className="text-center mt-9">
              {/* Corrected image src reference */}
              <img
                src={logo}
                alt="EduFlex"
                className="mx-auto w-96 h-80"
              />
              <h1 className="text-center text-4xl font-bold font-suwannaphum p-4">
                សូមស្វាគមន៍មកកាន់ EduFlex
              </h1>
              <span className="text-blue-900 font-suwannaphum text-xl p-3 bg-gray-200">
                ប្រព័ន្ធគ្រប់គ្រងការរៀន
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="col-span-5 bg-gray-200">
          <FooterHome />
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSave, FaArrowRight, FaBook, FaChalkboardTeacher, FaImage, FaVideo } from "react-icons/fa";

export default function CreateNewCourse() {
    const [coverPhoto, setCoverPhoto] = useState([]);
    const [promoVideo, setPromoVideo] = useState([]);

    const handleImageUpload = (e, setFiles) => {
        setFiles(Array.from(e.target.files)); // Convert FileList to an array and set to state
    };

    return (
        <div className="grid grid-rows-[auto,auto,1fr] mx-8 text-sm p-8 bg-white rounded-lg shadow-sm">
            <div className="w-full flex justify-between items-center bg-white rounded-lg mb-4">
                <h3 className="text-lg mb-4 text-center font-suwannaphum">
                    បង្កើតវគ្គសិក្សា
                </h3>
                <div className="flex justify-end space-x-3">
                    <Link to="/admin/users">
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400 font-suwannaphum text-md">
                            ថយក្រោយ
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-suwannaphum text-md">
                        បង្កើតថ្មី
                    </button>
                </div>
            </div>

            {/* Course Details Form */}
            <div>
                {/* Course Title */}
                <div className="mb-4">
                    <label className="text-sm font-semibold mb-1 flex items-center">
                        <FaBook className="mr-2 text-indigo-600" /> Course Title
                    </label>
                    <input
                        type="text"
                        placeholder=""
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                    />
                </div>

                {/* Course Subtitle */}
                <div className="mb-4">
                    <label className="flex text-sm font-semibold mb-1 items-center">
                        <FaChalkboardTeacher className="mr-2 text-indigo-600" /> Course Subtitle
                    </label>
                    <input
                        type="text"
                        placeholder="Course Subtitle"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                    />
                </div>

                {/* Category and Sub Category */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Category</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100">
                            <option>Design</option>
                            <option>Development</option>
                            <option>Marketing</option>
                        </select>
                    </div>
                    <div>
                        <label className="flex text-sm font-semibold mb-1">Sub Category</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100">
                            <option>UI/UX Design</option>
                            <option>Graphic Design</option>
                            <option>Web Design</option>
                        </select>
                    </div>
                </div>

                {/* Level and Head Department */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="flex text-sm font-semibold mb-1">Level</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100">
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                    <div>
                        <label className="flex text-sm font-semibold mb-1 items-center">
                            Head Department
                        </label>
                        <input
                            type="text"
                            placeholder="Head Department"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                        />
                    </div>
                </div>

                {/* Course Description */}
                <div className="mb-4">
                    <label className="flex text-sm font-semibold mb-1">Course Description</label>
                    <textarea
                        placeholder="Course Description"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100 h-24"
                    />
                </div>

                {/* What Students Will Learn */}
                <div className="mb-4">
                    <label className="flex text-sm font-semibold mb-1">What Students Will Learn?</label>
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100 mb-2"
                    />
                </div>

                {/* Cover Photo */}
                <div className="mb-6">
                    <label className="flex text-sm font-semibold mb-1 items-center">
                        <FaImage className="mr-2 text-indigo-600" /> Cover Photo
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImageUpload(e, setCoverPhoto)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                    />
                    <div className="mt-2 flex gap-2">
                        {coverPhoto.map((file, index) => (
                            <div key={index} className="text-sm text-gray-500">
                                {file.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promotional Video */}
                <div className="mb-6">
                    <label className="flex text-sm font-semibold mb-1 items-center">
                        <FaVideo className="mr-2 text-indigo-600" /> Promotional Video
                    </label>
                    <input
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={(e) => handleImageUpload(e, setPromoVideo)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                    />
                    <div className="mt-2 flex gap-2">
                        {promoVideo.map((file, index) => (
                            <div key={index} className="text-sm text-gray-500">
                                {file.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

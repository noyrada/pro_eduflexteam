import React, { useState } from "react";
import { FaBook, FaChalkboardTeacher, FaDollarSign, FaImage, FaVideo, FaSave, FaArrowRight } from "react-icons/fa";

export default function CreateNewCourse() {
    const [step, setStep] = useState(1);
    const [coverPhoto, setCoverPhoto] = useState([]);
    const [promoVideo, setPromoVideo] = useState([]);

    const handleImageUpload = (e, setter) => {
        const files = Array.from(e.target.files);
        setter((prev) => [...prev, ...files]);
    };

    const stepTitles = ["Course Details", "Curriculum", "FAQ"];

    return (
        <div>

            {/* Step Indicator */}
            <div className="flex justify-between mb-6 text-center">
                {stepTitles.map((title, index) => (
                    <button
                        key={index}
                        className={`w-1/3 font-medium pb-4 ${index + 1 === step ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
                        onClick={() => setStep(index + 1)}
                    >
                        {title}
                    </button>
                ))}
            </div>

            {/* Course Details Form (only shown in Step 1) */}
            {step === 1 && (
                <>
                    {/* Course Title */}
                    <div className="mb-4">
                        <label className="text-sm font-semibold mb-1 flex items-center">
                            <FaBook className="mr-2 text-indigo-600" /> Course Title
                        </label>
                        <input
                            type="text"
                            placeholder="Graphic Design Bootcamp: Photoshop, Illustrator, InDesign"
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
                            placeholder="Interactive platform for learning"
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

                    {/* Level and Price */}
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
                                <FaDollarSign className="mr-2 text-indigo-600" /> Price
                            </label>
                            <input
                                type="number"
                                placeholder="$250.00"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                            />
                        </div>
                    </div>

                    {/* Instructor */}
                    <div className="mb-4">
                        <label className="flex text-sm font-semibold mb-1">Instructor</label>
                        <input
                            type="text"
                            placeholder="Rakib Ahmed"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                        />
                    </div>

                    {/* Course Description */}
                    <div className="mb-4">
                        <label className="flex text-sm font-semibold mb-1">Course Description</label>
                        <textarea
                            placeholder="Describe your course..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100 h-24"
                        />
                    </div>

                    {/* What Students Will Learn */}
                    <div className="mb-4">
                        <label className="flex text-sm font-semibold mb-1">What Students Will Learn?</label>
                        <input
                            type="text"
                            placeholder="Learn Figma Basic to Advanced Design"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100 mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Build & test a full website design"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
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
                </>
            )}
        </div>
    );
}

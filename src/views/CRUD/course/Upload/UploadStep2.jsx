import React, { useState } from "react";
import { FaBook, FaChalkboardTeacher, FaArrowRight, FaPlusCircle } from "react-icons/fa";

export default function CurriculumStep({ step, setStep }) {
    const [sections, setSections] = useState([]);

    const addSection = () => {
        setSections([...sections, { title: "", lessons: [] }]);
    };

    const addLesson = (index) => {
        const newSections = [...sections];
        newSections[index].lessons.push({ title: "", video: null });
        setSections(newSections);
    };

    const handleSectionTitleChange = (index, title) => {
        const newSections = [...sections];
        newSections[index].title = title;
        setSections(newSections);
    };

    const handleLessonTitleChange = (sectionIndex, lessonIndex, title) => {
        const newSections = [...sections];
        newSections[sectionIndex].lessons[lessonIndex].title = title;
        setSections(newSections);
    };

    const handleLessonVideoUpload = (sectionIndex, lessonIndex, video) => {
        const newSections = [...sections];
        newSections[sectionIndex].lessons[lessonIndex].video = video;
        setSections(newSections);
    };

    return (
        <div>
            {/* Step Indicator */}
            <div className="flex justify-between mb-6 text-center">
                {["Course Details", "Curriculum", "FAQ"].map((title, index) => (
                    <button
                        key={index}
                        className={`w-1/3 font-medium pb-4 ${index + 1 === step ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
                        onClick={() => setStep(index + 1)}
                    >
                        {title}
                    </button>
                ))}
            </div>

            {/* Curriculum Form */}
            {step === 2 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">Add Sections & Lessons</h2>

                    {/* Add Section Button */}
                    <button
                        onClick={addSection}
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 mb-4"
                    >
                        <FaPlusCircle className="mr-2" />
                        Add Section
                    </button>

                    {/* Sections */}
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-6">
                            {/* Section Title */}
                            <div className="mb-4">
                                <label className="text-sm font-semibold mb-1">Section Title</label>
                                <input
                                    type="text"
                                    value={section.title}
                                    onChange={(e) => handleSectionTitleChange(sectionIndex, e.target.value)}
                                    placeholder="Section Title"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                                />
                            </div>

                            {/* Add Lesson Button */}
                            <button
                                onClick={() => addLesson(sectionIndex)}
                                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 mb-4"
                            >
                                <FaPlusCircle className="mr-2" />
                                Add Lesson
                            </button>

                            {/* Lessons */}
                            {section.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="mb-4">
                                    {/* Lesson Title */}
                                    <div className="mb-2">
                                        <label className="text-sm font-semibold mb-1">Lesson Title</label>
                                        <input
                                            type="text"
                                            value={lesson.title}
                                            onChange={(e) => handleLessonTitleChange(sectionIndex, lessonIndex, e.target.value)}
                                            placeholder="Lesson Title"
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                                        />
                                    </div>

                                    {/* Video Upload */}
                                    <div className="mb-4">
                                        <label className="flex text-sm font-semibold mb-1">Lesson Video</label>
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={(e) => handleLessonVideoUpload(sectionIndex, lessonIndex, e.target.files[0])}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                                        />
                                        {lesson.video && (
                                            <div className="mt-2 text-sm text-gray-500">
                                                {lesson.video.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

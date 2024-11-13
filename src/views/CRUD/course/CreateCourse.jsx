import React, { useState } from "react";
import UploadStep1 from "../../../views/CRUD/course/Upload/UploadStep1";
import UploadStep2 from "../../../views/CRUD/course/Upload/UploadStep2";
import UploadStep3 from "../../../views/CRUD/course/Upload/UploadStep3";
import { FaSave, FaArrowRight } from "react-icons/fa";

export default function CreateNewCourse() {
    const [step, setStep] = useState(1);

    return (
        <div className="grid grid-rows-[auto,auto,1fr] mx-8 text-sm p-8 bg-white rounded-lg shadow-sm">
            {/* Header */}
            <h1 className="text-xl font-bold mb-6">Create New Course</h1>

            {/* Step Indicator */}
            {step === 1 && <UploadStep1 />}
            {step === 2 && <UploadStep2 step={step} setStep={setStep} />}
            {step === 3 && <UploadStep3 step={step} setStep={setStep} />}

            {/* Buttons */}
            <div className="flex justify-between">
                <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md font-semibold text-gray-700 hover:bg-gray-300">
                    <FaSave className="mr-2" /> Save as Draft
                </button>
                <button
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
                    onClick={() => setStep(step + 1)}
                >
                    Save & Continue <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
}

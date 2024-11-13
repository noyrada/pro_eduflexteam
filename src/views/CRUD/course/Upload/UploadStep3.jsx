import React, { useState } from "react";
import { FaQuestionCircle, FaPlusCircle } from "react-icons/fa";

export default function FAQStep({ step, setStep }) {
    const [faqs, setFaqs] = useState([]);

    const addFaq = () => {
        setFaqs([...faqs, { question: "", answer: "" }]);
    };

    const handleFaqChange = (index, type, value) => {
        const newFaqs = [...faqs];
        newFaqs[index][type] = value;
        setFaqs(newFaqs);
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

            {/* FAQ Form */}
            {step === 3 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">Add Frequently Asked Questions</h2>

                    {/* Add FAQ Button */}
                    <button
                        onClick={addFaq}
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 mb-4"
                    >
                        <FaPlusCircle className="mr-2" />
                        Add FAQ
                    </button>

                    {/* FAQ List */}
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6">
                            {/* Question */}
                            <div className="mb-4">
                                <label className="text-sm font-semibold mb-1">Question</label>
                                <input
                                    type="text"
                                    value={faq.question}
                                    onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                                    placeholder="What is the course duration?"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                                />
                            </div>

                            {/* Answer */}
                            <div className="mb-4">
                                <label className="text-sm font-semibold mb-1">Answer</label>
                                <textarea
                                    value={faq.answer}
                                    onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                                    placeholder="This course lasts for 6 weeks..."
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100 h-24"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

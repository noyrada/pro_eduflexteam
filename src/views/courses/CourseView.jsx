import React from "react";
import VideoP1 from "../../assets/images/video.png";
// components
const lessons = [
  {
    section: "Introduction",
    items: [{ title: "How to do everything in learning", time: "12:47" }],
  },
  {
    section: "Get Going",
    items: [
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
      { title: "How to do everything in learning", time: "12:47" },
    ],
  },
];

export default function CourseView() {
  return (
    <>
      <div className="grid grid-rows-[auto,auto,1fr] mx-4">
        {/* Content Area with Cards */}
        <div className="flex flex-wrap">
          <div className="basis-1/2 px-5  flex-1">
            <div className="text-sm block h-auto text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="aspect-w-15 aspect-h-9">
                <img
                  src={VideoP1}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-2xl">
                  Mastering UI-UX Design System In Figma
                </h3>
                <p className="text-gray-600 text-xl">
                  In the world of product designs, creating a consistent and
                  visually appealing user interface (UI) is essential for a good
                  user experience. One effective way to achieve this is by
                  creating a design system. This blog explains the process of
                  building a UI design system using Figma, a popular design tool
                  known for its collaborative features and powerful design
                  capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="pr-5 flex-1">
            <div className="block h-auto rounded border border-solid border-blueGray-100">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-xl font-semibold mb-2">
                  12 Lesson (20h 30m)
                </h4>
                {lessons.map((section, idx) => (
                  <div key={idx} className="mb-4">
                    <h5 className="font-semibold text-gray-700 text-lg mb-2">
                      {section.section}
                    </h5>
                    {section.items.map((lesson, index) => (
                      <div key={index} className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-gray-300 rounded-lg"></div>
                        <div className="ml-4">
                          <p className="text-gray-800 text-lg">
                            {lesson.title}
                          </p>
                          <span className="text-gray-500 text-base">
                            {lesson.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

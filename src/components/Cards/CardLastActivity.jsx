import React from "react";
import ImageP1 from "../../assets/images/ux.jpg";
import ImageP2 from "../../assets/images/figma-ios-design-system.jpg";

const activities = [
  {
    id: 1,
    icon: ImageP1,
    title: "New Course Uploaded",
    description: "Noy Rada, Update the Courses Path",
    date: "10/09/2024",
  },
  {
    id: 2,
    icon: ImageP2,
    title: "New Course Uploaded",
    description: "Noy Rada, Update the Courses Path",
    date: "10/09/2024",
  },
  {
    id: 3,
    icon: ImageP1,
    title: "New Course Uploaded",
    description: "Noy Rada, Update the Courses Path",
    date: "10/09/2024",
  },
  {
    id: 4,
    icon: ImageP2,
    title: "New Course Uploaded",
    description: "Noy Rada, Update the Courses Path",
    date: "10/09/2024",
  },
  {
    id: 5,
    icon: ImageP1,
    title: "New Course Uploaded",
    description: "Noy Rada, Update the Courses Path",
    date: "10/09/2024",
  },
];

export default function CardLastActivity() {
  return (
    <>
      <div className="p-4">
        <h3 className="text-lg font-bold">Last Activity</h3>
        <p className="text-gray-600 mb-6">Last 30 day</p>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <img
                src={activity.icon}
                alt="Activity Icon"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{activity.title}</h4>
                <p className="text-gray-600 text-base">
                  {activity.description}
                </p>
                <span className="text-gray-500 text-base">{activity.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

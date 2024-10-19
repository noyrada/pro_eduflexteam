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
      <div className="ml-2 mt-2">
        <div className="font-bold text-sm">Last Activity</div>
        <p className="text-gray-600 mb-3">Last 30 day</p>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-1">
              <img
                src={activity.icon}
                alt="Activity Icon"
                className="w-12 h-12 rounded-full object-cover mr-2"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{activity.title}</h3>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
                <span className="text-gray-500 text-sm">{activity.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

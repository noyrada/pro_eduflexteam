import React from "react";

// components

const events = Array(16).fill({
  name: "UX-UI & Design System",
  starting: "12/09/2024, 03:15",
  dateCreated: "12/09/2024, 03:15",
});

export default function CardEvents() {
  return (
    <>
      <div className="container mx-auto p-0">
        <div className="overflow-x-auto bg-gray-100 shadow-md rounded-lg">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left pl-16 py-3 px-4 font-bold text-base text-gray-600 border-b">
                  Name Event
                </th>
                <th className="text-left pl-0 py-3 px-4 font-bold text-base text-gray-600 border-b">
                  Stating
                </th>
                <th className="text-left pl-0 py-3 px-4 font-bold text-base text-gray-600 border-b">
                  Date Created
                </th>
                <th className="text-left pl-0 py-3 px-4 font-bold text-base text-gray-600 border-b">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {events.map((event, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="py-3 px-4 pl-16">{event.name}</td>
                  <td className="py-3 px-4 pl-0">{event.starting}</td>
                  <td className="py-3 px-4 pl-0">{event.dateCreated}</td>
                  <td className="py-3 px-4 pl-0">
                    <button className="text-blue-600 hover:text-blue-800 mr-2 ">
                      <ion-icon name="create-outline" class="size-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <ion-icon name="trash-outline" class="size-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

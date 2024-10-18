import React from "react";

export default function CardStats(props) {
  return (
    <>
      {/* <div class="grid grid-cols-4 gap-6"> */}
        <div className="bg-white shadow-md p-2 h-[100px]">
          <h2 className=" font-bold text-xl text-center text-sky-600">{props.title}</h2>
          <div className="flex items-center justify-center ">
            <div className="relative size-[60px]  ">
              <svg
                className="size-full -rotate-90"
                viewBox="0 -3 16 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  fill="none"
                  className="stroke-current text-gray-200 dark:text-neutral-700"
                  stroke-width="3"
                ></circle>
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  fill="none"
                  className="stroke-current text-blue-600 dark:text-blue-500"
                  stroke-width="3"
                  stroke-dasharray="100"
                  stroke-dashoffset="45"
                  stroke-linecap="round"
                ></circle>
              </svg>

              <div className="absolute top-[22%] left-[27%]  ">
                <span className="text-center text-xl font-bold text-blue-600 dark:text-blue-500">
                   {props.icon}
                </span>
              </div>
            </div>
            <div className="text-[35px] font-bold  mb-4 text-blue-600">{props.num}</div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

import React from "react";
import ImageP1 from "../../assets/images/ux.jpg";
import ImageP2 from "../../assets/images/sql.png";
import ImageP3 from "../../assets/images/react.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

function Image({ image, title, createdDate, level, duration, price }) {
    return (
        <div class=" border rounded-xl cursor-pointer m-4 marker:shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
            <img className="rounded-xl h-w-160 w-full" src={image} alt={title} />
            <div className="ml-4">
                <div className="flex mt-2 ">
                    <MdOutlineSignalCellularAlt className="fill-green-600 size-6" />
                    <div className="flex justify-between w-full mr-8 ml-2 ">
                        <p className="text-gray-600">{level}</p>
                        <p className="text-gray-600">{duration}</p>
                        <p className="text-gray-600">{price}</p>
                    </div>
                </div>
                <div className="mt-7">
                    <h1 className="text-blue-900">
                        <b>{title}</b>
                    </h1>
                </div>
                <div class="mb-2 mt-4">
                    <p className="text-gray-500 text-base">Created: {createdDate}</p>
                </div>
            </div>
        </div>
    );
}

export default function CardCourses() {
    return (
        <section>
            <div className="p-2">
                <div className="flex ml-4 justify-between">
                    <h7 className="mt-2">
                        <b>Courses</b>
                    </h7>
                    <Link to="/admin/courses">
                        <div className="flex items-center cursor-pointer">
                            <p className="text-blue-900 mt-2">All Courses</p>
                            <FaArrowRightLong className="ml-2 mr-5 mt-2 text-blue-900" />
                        </div>
                    </Link>
                </div>

                {/* image content */}
                <div class="flex justify-evenly">
                    <div className="grid grid-cols-3">
                        <div className=" rounded-sm max-h-max">
                            <Image
                                image={ImageP1}
                                title="Mastering UX/UI System Design In Figma"
                                createdDate="April 14, 2024"
                                level="Expert"
                                duration="22h14m"
                                price="180$"
                            />
                        </div>
                        <div className="rounded-sm max-h-max">
                        <Image
                                image={ImageP2}
                                title="Mastering UX/UI System Design In Figma"
                                createdDate="April 14, 2024"
                                level="Expert"
                                duration="22h14m"
                                price="180$"
                            />
                        </div>
                        <div className="rounded-sm max-h-max">
                            <Image
                                image={ImageP3}
                                title="Mastering UX/UI System Design In Figma"
                                createdDate="April 14, 2024"
                                level="Expert"
                                duration="22h14m"
                                price="180$"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

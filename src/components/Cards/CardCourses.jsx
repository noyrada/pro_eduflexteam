import React from "react";
import ImageP1 from "../../assets/images/ux.jpg";
import ImageP2 from "../../assets/images/figma-ios-design-system.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
function Image({ image, title, createdDate, level, duration, price }) {
    return (
        <div class=" border rounded-xl cursor-pointer m-4" >
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
                <div className="mt-5 ">
                    <h1 className="text-blue-900"><b>{title}</b></h1>
                </div>
                <div class="mb-2">
                    <p className="text-gray-600">Created: {createdDate}</p>
                </div>
            </div>
        </div>
    );
}

export default function CardCourses() {
    return (
        <section >
            <div className="m-2">
                <div className="flex mt-2 ml-2 justify-between">
                    <h7><b>Courses</b></h7>
                    <div className="flex items-center cursor-pointer">
                        <p className="text-blue-900">All Courses</p>
                        <FaArrowRightLong className="ml-2 mr-5 mt-2 text-blue-900" />
                    </div>
                </div>
                {/* image content */}
                <div class="flex justify-evenly ">
                    <Image 
                        image={ImageP1} 
                        title="Mastering UX/UI System Design In Figma"
                        createdDate="April 14, 2024"
                        level="Expert"
                        duration="22h14m"
                        price="180$"
                    />
                    <Image 
                        image={ImageP2} 
                        title="Mastering UX/UI System Design In Figma"
                        createdDate="April 14, 2024"
                        level="Intermediate"
                        duration="15h30m"
                        price="150$"
                    />
                    <Image 
                        image={ImageP1} 
                        title="Mastering UX/UI System Design In Figma"
                        createdDate="April 14, 2024"
                        level="Expert"
                        duration="22h14m"
                        price="180$"
                    />
                </div>
            </div>
        </section>
    );
}

    	            
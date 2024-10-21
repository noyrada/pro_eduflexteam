import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PaginationCourse() {
    const [active, setActive] = useState(1);

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: active === index ? "blue" : "gray",
        onClick: () => setActive(index),
        className: `transition-all duration-200 ease-in-out
                    ${active === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}
                    w-10 h-10 flex items-center justify-center rounded-full`
    });

    const next = () => {
        if (active === 5) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    return (
        <div className="flex items-center justify-between w-full">
            {/* button previous */}
            <Button
                variant="text"
                className="flex items-center mr-2 gap-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" />
                Previous
            </Button>
            {/* number page */}
            <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                    <IconButton key={num} {...getItemProps(num)}>
                        {num}
                    </IconButton>
                ))}
            </div>
            {/* button next */}
            <Button
                variant="text"
                className="flex items-center ml-2 gap-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200"
                onClick={next}
                disabled={active === 5}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
        </div>
    );
}

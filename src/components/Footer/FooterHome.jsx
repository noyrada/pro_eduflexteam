import React from "react";

export default function FooterHome() {
    return (
        <>
            <footer
                class="flex flex-col items-center ml-3">

                {/* <!-- Copyright --> */}
                <div class="w-full p-3 text-gray-500">
                    © 2024 Copyright:
                    <a className="text-blue-800 ml-2" href="https://eduflex-team.com/">
                        EduFlex Team
                    </a>
                </div>
            </footer>
        </>
    )
}
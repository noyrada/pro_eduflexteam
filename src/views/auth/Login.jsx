import React, { useState } from "react";
import { Link } from "react-router-dom";

//images
import eduflexlogo from "../../assets/images/EduFlex-logo.png";

export default function Login() {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {

        }
    }

    const validate=()=>{
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter password');
        }
        return result;
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen  p-0 mx-0">
                <div className="w-full max-w-sm p-6 bg-white rounded ">
                    <div className="justify-items-center p-0 m-0">
                        <img className="p-0 m-0 h-40 w-48" src={eduflexlogo} alt="EduFlex Logo" />
                    </div>
                    <form onSubmit={ProceedLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username or Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                value={username} onChange={e=>usernameUpdate(e.target.value)}
                                type="username"
                                id="username"
                                className="w-full px-3 py-2 border rounded focus:outline-none border-blue-800 focus:ring focus:ring-blue-300 "
                                placeholder="Enter username or email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password <span className="text-red-600">*</span>
                            </label>
                            <input
                                value={password} onChange={e=>passwordUpdate(e.target.value)}
                                type="password"
                                id="passwords"
                                className="w-full px-3 py-2 border rounded border-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter password"
                                required
                            />

                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none w-60">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-sm text-center">
                        Forgot your password?{" "}
                        <Link to="/auth/forgot-password" className="text-blue-500 hover:underline">
                            Click here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

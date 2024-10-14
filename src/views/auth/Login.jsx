import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-6">Welcome to Login</h1>
                    {/* Login Form */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                            >
                                Login
                            </button>
                            <Link to="/auth/register" className="text-sm text-blue-500 hover:underline">
                                Sign up
                            </Link>
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

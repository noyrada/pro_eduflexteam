import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import eduflexlogo from "../../assets/images/EduFlex-logo.png";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear(); // Clear any previous session on mount
    }, []);

    // Validate inputs
    const validateInput = () => {
        if (!username) {
            toast.warning("Please enter your username.");
            return false;
        }
        if (!password) {
            toast.warning("Please enter your password.");
            return false;
        }
        return true;
    };

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateInput()) return;

        try {
            const response = await fetch(`http://localhost:3000/Users/${username}`);
            if (!response.ok) {
                throw new Error("User not found"); // Handle 404 errors
            }

            const userData = await response.json();

            if (userData.password === password) {
                toast.success("Login successful!");
                sessionStorage.setItem("username", username);
                navigate("/");
            } else {
                toast.error("Incorrect password. Please try again.");
            }
        } catch (error) {
            toast.error(`Login failed: ${error.message}`);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen p-4">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <img src={eduflexlogo} alt="EduFlex Logo" className="h-24" />
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Username or Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border border-blue-800 rounded focus:ring focus:ring-blue-300"
                            placeholder="Enter username or email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-blue-800 rounded focus:ring focus:ring-blue-300"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                        >
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
    );
}

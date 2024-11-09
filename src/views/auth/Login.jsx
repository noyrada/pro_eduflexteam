import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//images
import eduflexlogo from "../../assets/images/EduFlex-logo.png";

export default function Login() {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:3000/Users/" + username)
                .then((res) => {
                    return res.json();
                }).then((resp) => {
                    //console.log(resp)
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter valid username');
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            // sessionStorage.setItem('userrole', resp.role);
                            usenavigate('/')
                        } else {
                            toast.error('Please Enter valid credentials');
                        }
                    }
                }).catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    }

    // const ProceedLoginusingAPI = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         let inputobj={"username": username,
    //         "password": password};
    //         fetch("https://localhost:44308/Users/Authenticate",{
    //             method:'POST',
    //             headers:{'content-type':'application/json'},
    //             body:JSON.stringify(inputobj)
    //         }).then((res) => {
    //             return res.json();
    //         }).then((resp) => {
    //             console.log(resp)
    //             if (Object.keys(resp).length === 0) {
    //                 toast.error('Login failed, invalid credentials');
    //             }else{
    //                  toast.success('Success');
    //                  sessionStorage.setItem('username',username);
    //                  sessionStorage.setItem('jwttoken',resp.jwtToken);
    //                usenavigate('/')
    //             }

    //         }).catch((err) => {
    //             toast.error('Login Failed due to :' + err.message);
    //         });
    //     }
    // }

    const validate = () => {
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
                                value={username} onChange={e => usernameUpdate(e.target.value)}
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
                                value={password} onChange={e => passwordUpdate(e.target.value)}
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

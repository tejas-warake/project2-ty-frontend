import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LoginSignUpForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="w-full max-w-sm mx-auto mt-16">
            <p className='text-center'>
                <FontAwesomeIcon className="text-indigo-500 mr-1" icon={faArrowLeft} />
                <Link to="/" className='text-indigo-500 underline hover:text-indigo-600 cursor-pointer'>
                    Back to Home
                </Link>
            </p>
            {isLogin ? (
                <form className="bg-white rounded-lg p-8 shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-lg"
                            type="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="password">
                            Password
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-lg"
                            type="password"
                            id="password"
                            required
                        />
                    </div>
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                        Login
                    </button>
                    <p className="text-center mt-2">
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="text-indigo-500 underline hover:text-indigo-600 cursor-pointer"
                            onClick={handleToggle}
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            ) : (
                <form className="bg-white rounded-lg p-8 shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="name">
                            Name
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-lg"
                            type="text"
                            id="name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-lg"
                            type="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="password">
                            Password
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-lg"
                            type="password"
                            id="password"
                            required
                        />
                    </div>
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                        SignUp
                    </button>

                    <p className="text-center mt-2">
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-indigo-500 underline hover:text-indigo-600 cursor-pointer"
                            onClick={handleToggle}
                        >
                            Log In
                        </Link>
                    </p>
                </form>
            )
            }
        </div>
    )
}

export default LoginSignUpForm;
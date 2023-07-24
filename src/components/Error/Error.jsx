import React from 'react';
import { Link } from 'react-router-dom'; 

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-600 text-white">
            <h1 className="text-5xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-lg mb-8">The page you're looking for does not exist.</p>
            <img className="h-64 w-auto mb-8" src="/404-error.png" alt="404 Error Illustration" />
            <Link to="/" className="bg-white text-blue-600 py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                Go Back to Home
            </Link>
        </div>
    );
};

export default Error;

import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-red-400 tracking-widest">
          404
        </h1>

        {/* Small label */}
        <div className="bg-error text-white px-4 py-1 text-sm rounded inline-block mt-2">
          Page Not Found
        </div>

        {/* Message */}
        <p className="mt-6 text-gray-600 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Button */}
        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 px-6 py-3 btn btn-primary shadow-md hover: transition duration-300"
        >
          Go Home
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;
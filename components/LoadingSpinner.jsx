import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-400"></div>
        </div>
    );
};

export default LoadingSpinner;
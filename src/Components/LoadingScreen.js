import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100  text-white">
            <div className="text-center">
                <div className="spinner-border " role="status">
                    <span className="sr-only">Loading...</span>
                </div>

                <h1 className="mt-4">Loading DevPrabhu...</h1>
            </div>
        </div>
    );
};

export default LoadingScreen;

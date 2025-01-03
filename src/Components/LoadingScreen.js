import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">
            <div className="text-center">
            
                <div className="spinner-border text-info" role="status" style={{ width: '5rem', height: '5rem' }}>
                    <span className="sr-only">Loading...</span>
                </div>

                <h1 className="mt-4" style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif' }}>Loading DevPrabhu...</h1>
                <p className="text-muted" style={{ fontSize: '1.2rem' }}>Please wait while we prepare our portfolio.</p>
            </div>
        </div>
    );
};

export default LoadingScreen;

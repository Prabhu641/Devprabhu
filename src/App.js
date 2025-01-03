import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import About from './Components/About'; 
import { Contact } from './Components/Contact';
import { Certifcates } from './Components/Certifcates';
import Skills from './Components/Skills';
import { Project } from './Components/Project';
import LoadingScreen from './Components/LoadingScreen';  // Import LoadingScreen

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer to simulate loading (you can replace this with actual loading logic)
        const timer = setTimeout(() => {
            setIsLoading(false);  // After 2 seconds, stop the loading state
        }, 2000);

        return () => clearTimeout(timer);  // Clear the timer on component unmount
    }, []);

    return (
        <>
            <Navbar />
            {isLoading ? (
                <LoadingScreen />  // Show the loader if still loading
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/certificates" element={<Certifcates />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            )}
        </>
    );
}

export default App;

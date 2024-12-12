import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import About from './Components/About'; 
import { Contact } from './Components/Contact';
import { Certifcates } from './Components/Certifcates';
import Skills from './Components/Skills';
import { Project } from './Components/Project';
import LoadingScreen from 'react-loading-screen';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            <Navbar />
            
            <LoadingScreen
                loading={isLoading}
                bgColor='#000000'
                spinnerColor='#ffffff'
                textColor='#676767'
                text='DevPrabhu is Loading...'
            >
               
                {!isLoading && (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/certificates" element={<Certifcates />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                )}
            </LoadingScreen>
        </>
    );
}

export default App;

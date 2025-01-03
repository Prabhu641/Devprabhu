import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import About from './Components/About'; 
import { Contact } from './Components/Contact';
import { Certifcates } from './Components/Certifcates';
import Skills from './Components/Skills';
import { Project } from './Components/Project';
import LoadingScreen from './Components/LoadingScreen';  
import Footer from './Components/Footer';

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
            {/* Conditionally render the Navbar only after loading is complete */}
            {!isLoading && <Navbar />}
            
            {isLoading ? (
                <LoadingScreen />  // Show the LoadingScreen while loading
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
              <Footer />
        </>
    );
}

export default App;

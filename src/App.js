import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import About from './Components/About'; 
import { Contact } from './Components/Contact';
import { Certifcates } from './Components/Certifcates';
import Skills from './Components/Skills';
import { Project } from './Components/Project';

function App() {
    return (
        <div className='app'>
            <Navbar />
            
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/certificates" element={<Certifcates/>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
          
        </div>
    );
}

export default App;
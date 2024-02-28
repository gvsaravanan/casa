import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga";
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact/Contact';
import Properties from './components/pages/Properties/Properties';


function App() {
  useEffect(() => { 
    ReactGA.initialize("G-88LT0JCR7Z") 
    ReactGA.pageview(window.location.pathname + window.location.search) 
  }, [])

  return (
    <div className="app">
      <Navbar/>
      <Routes> 
          <Route path="/casa/" element={<Home/>} />
          <Route path='/casa/properties' element={<Properties/>} />
          <Route path='/casa/about' element={<About/>} />
          <Route path='/casa/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
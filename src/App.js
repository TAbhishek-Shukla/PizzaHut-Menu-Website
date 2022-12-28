import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}  />
      <Route  path='/menu' element={<Menu/>}  />
      <Route  path='/about' element={<About/>}  />
      <Route  path='/contact' element={<Contact/>}  />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;

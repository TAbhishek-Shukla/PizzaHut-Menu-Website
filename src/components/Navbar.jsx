import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
import  logo from "../assets/images/pizzahut.png"
import ReorderIcon from '@mui/icons-material/Reorder';
const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar=()=>{
              setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={logo} alt='pizza'></img>
            <div className='hiddenLinks'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>  
            </div>
        </div>
        <div className='rightSide'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button onClick={toggleNavbar}><ReorderIcon /></button>
        </div>
    </div>
  )
}

export default Navbar
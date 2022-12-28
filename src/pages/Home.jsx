import React from 'react'
import "../styles/Home.css"
import{NavLink} from "react-router-dom";
import BAnnnerImage from "../assets/images/spizza.jpeg"
const Home = () => {
  return (
    <div className='home'  style={{backgroundImage:`url(${BAnnnerImage})`}}>
        <div className='headerContainer'>
        <h1>Pizza Hut</h1><br/>
        <p>Papa John's Pizza Brings You Joy</p>
        <NavLink to="/menu"  >
        <button>Order Now</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import Pizza from "../assets/images/pizza.jpg"
import "../styles/About.css"
const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${Pizza})`}}></div>
        <div className='aboutBottom'>
            <h2>About Us</h2><br/>
          
<p>
    There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. Not when we can also become our best, make friends, and have fun while we’re at it. We’re the pizza company that lives life unboxed.

We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.

            </p>
        </div>
    </div>
  )
}

export default About
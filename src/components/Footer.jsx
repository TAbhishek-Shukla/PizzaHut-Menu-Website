import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
  return (
   <div className='footer' >
   <div className='socialMedia'><InstagramIcon/><YouTubeIcon/><TwitterIcon/><LinkedInIcon/></div>
   <p> &copy; 2022 PizzaHut @Abhishek</p>
   </div>
  )
}

export default Footer
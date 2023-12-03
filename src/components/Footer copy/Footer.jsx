import React from 'react'
import './footer.css'
import { SiGmail } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";





export default function Footer() {
  return (
    <footer>
        <h3 id='socials-h3'>Social Media:</h3>
        <div className="social-media">
            <div className="email-container ">
            <SiGmail className='icons'/>
            <p>Jakerahaaal@gmail.com</p>
            </div>
            <div className="copy-right">
                <p>Copyright - Wasim © - 2023</p>
            </div>
        </div>
    </footer>
  )
}

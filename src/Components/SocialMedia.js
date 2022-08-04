import React from 'react'
import {  BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { AiFillLinkedin,AiOutlineGithub } from "react-icons/ai"
const NavigationDots = () => {
    return (
        <div className="app__social">
            
            <div className="linkedin__icon">
                <a href="https://www.linkedin.com/in/osama-meaghed-58763022a/" target="_blank" rel="noopener noreferrer" ><AiFillLinkedin /></a>
            </div>
            <div className="github__icon">
                <a href="https://github.com/osama24680" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
            </div>
            <div className="instagram__icon">
                <a href="https://www.instagram.com/osamamegahed123/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            </div>
            <div className="facebook__icon">
                <a href="https://www.facebook.com/profile.php?id=100010179812706"  target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
        </div>
    )
}

export default NavigationDots

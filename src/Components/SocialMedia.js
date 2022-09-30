import React, { useEffect } from 'react'
import { BsInstagram, BsSun } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { MdOutlineNightlight } from "react-icons/md"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const NavigationDots = ({ isDark }) => {
    function handleSystem() {
        let is_copy_dark = !isDark
        if (is_copy_dark) {
            return
        } else {

            document.documentElement.style.setProperty('--backgroundColor', '#EDF2F8')
            document.documentElement.style.setProperty('--secondary-color', '#fff')
            document.documentElement.style.setProperty('--primaryColor', '#313BAC')
            document.documentElement.style.setProperty('--gray-color', '#000')
            document.documentElement.style.setProperty('--blackTech', '#fff')
            document.documentElement.style.setProperty('--whiteColor', '#000')
            document.documentElement.style.setProperty('--secondary-color-footer', '#313BAC')
            document.documentElement.style.setProperty('--backgroundTable', '#fff')
            document.documentElement.style.setProperty('--primaryColorTable', '#e4e4e4')
            document.documentElement.style.setProperty('--darkNav', '#ffffff4a')
            document.documentElement.style.setProperty('--borderDarkNav', '#a2bfce')
            document.documentElement.style.setProperty('--navLinksColorDark', '#3AA6EF')
            document.documentElement.style.setProperty('--navLinksColorDarkSocial', '#3AA6EF')
            document.documentElement.style.setProperty('--DesignerTextDark', '#3AA6EF')
            document.documentElement.style.setProperty('--tableBackgroundDark', '#3AA6EF')
            document.documentElement.style.setProperty('--itemsFilteredColor', '#fff')
            document.documentElement.style.setProperty('--itemsFilteredColorHover', '#3AA6EF')





        }
    }

    function handleSystem2() {

        if (isDark) {
            // getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
            document.documentElement.style.setProperty('--backgroundColor', '#162d53')
            document.documentElement.style.setProperty('--secondary-color', '#313bac')
            document.documentElement.style.setProperty('--primaryColor', '#7865FF')
            document.documentElement.style.setProperty('--gray-color', '#d7e6ff')
            document.documentElement.style.setProperty('--blackTech', '#000')
            document.documentElement.style.setProperty('--whiteColor', '#fefeff')
            document.documentElement.style.setProperty('--secondary-color-footer', '#313bac')
            document.documentElement.style.setProperty('--backgroundTable', '#132347')
            document.documentElement.style.setProperty('--primaryColorTable', '#7865FF')
            document.documentElement.style.setProperty('--darkNav', 'transparent')
            document.documentElement.style.setProperty('--borderDarkNav', 'rgba(255, 255, 255, 0.18)')
            document.documentElement.style.setProperty('--navLinksColorDark', '#d7e6ff')
            document.documentElement.style.setProperty('--navLinksColorDarkSocial', '#d7e6ff')
            document.documentElement.style.setProperty('--DesignerTextDark', '#7865FF')
            document.documentElement.style.setProperty('--tableBackgroundDark', '#7865FF')
            document.documentElement.style.setProperty('--itemsFilteredColor', '#313bac')
            document.documentElement.style.setProperty('--itemsFilteredColorHover', '#7865FF')
            

        }
    }
    return (
        <div className="app__social">

            <div className="system__icon system_sun" onClick={handleSystem}>
                <button href="#" target="_blank" rel="noopener noreferrer" ><BsSun /> </button>
            </div>
            <div className="system__icon system_moon" onClick={handleSystem2}>
                <button href="#" target="_blank" rel="noopener noreferrer" ><MdOutlineNightlight /></button>
            </div>
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
                <a href="https://www.facebook.com/profile.php?id=100010179812706" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
        </div>
    )
}

export default NavigationDots

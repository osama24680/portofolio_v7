import React, { useState, useEffect } from 'react'
import { BsInstagram, BsSun } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { MdOutlineNightlight } from "react-icons/md"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const darkMode = [
    { name: "--backgroundColor", code: "#162d53" },
    { name: "--secondary-color", code: "#313bac" },
    { name: "--primaryColor", code: "#7865FF" },
    { name: "--gray-color", code: "#d7e6ff" },
    { name: "--blackTech", code: "#000" },
    { name: "--whiteColor", code: "#fefeff" },
    { name: "--secondary-color-footer", code: "#313bac" },
    { name: "--backgroundTable", code: "#132347" },
    { name: "--darkNav", code: "transparent" },
    { name: "--borderDarkNav", code: "rgba(255, 255, 255, 0.18)" },
    { name: "--navLinksColorDark", code: "#d7e6ff" },
    { name: "--navLinksColorDarkSocial", code: "#d7e6ff" },
    { name: "--DesignerTextDark", code: "#7865FF" },
    { name: "--tableBackgroundDark", code: "#7865FF" },
    { name: "--itemsFilteredColor", code: "#313bac" },
    { name: "--itemsFilteredColorHover", code: "#7865FF" },
]
const lightMode = [
    { name: "--backgroundColor", code: "#EDF2F8" },
    { name: "--secondary-color", code: "#fff" },
    { name: "--primaryColor", code: "#313BAC" },
    { name: "--gray-color", code: "#000" },
    { name: "--blackTech", code: "#fff" },
    { name: "--whiteColor", code: "#000" },
    { name: "--secondary-color-footer", code: "#313BAC" },
    { name: "--backgroundTable", code: "#fff" },
    { name: "--primaryColorTable", code: "#e4e4e4" },
    { name: "--darkNav", code: "#ffffff4a" },
    { name: "--borderDarkNav", code: "#a2bfce" },
    { name: "--navLinksColorDark", code: "#3AA6EF" },
    { name: "--navLinksColorDarkSocial", code: "#3AA6EF" },
    { name: "--DesignerTextDark", code: "#3AA6EF" },
    { name: "--tableBackgroundDark", code: "#3AA6EF" },
    { name: "--itemsFilteredColor", code: "#fff" },
    { name: "--itemsFilteredColorHover", code: "#3AA6EF" },
]

const NavigationDots = () => {
    const [Dark, setDark] = useState(true)
    function handleDarkModeButton() {
        let darkCopy = !Dark;
        setDark(darkCopy)
    }
    function handleDrakMode() {
        if (Dark) {
            for (let i of darkMode) {
                document.documentElement.style.setProperty(i.name, i.code)
            }
        } else {
            for (let i of lightMode) {
                document.documentElement.style.setProperty(i.name, i.code)
            }
        }
    }
    useEffect(() => {
        handleDrakMode()
    }, [Dark])

    return (
        <div className="app__social">

            <div className="system__icon system_sun" onClick={handleDarkModeButton}>
                <button href="#" target="_blank" rel="noopener noreferrer" >{Dark ? <BsSun /> : <MdOutlineNightlight />}  </button>
            </div>
            <div className="linkedin__icon">
                <a href="https://www.linkedin.com/in/osama-megahed-887b76201/" target="_blank" rel="noopener noreferrer" ><AiFillLinkedin /></a>
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

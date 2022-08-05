import React, { useState } from 'react'
import { images } from "../../Data"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from "framer-motion"
import "./Navbar.scss"
const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const navElements = ["home",  "about", "work","gallery", "skills","contact",]
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="" />
            </div>
            <ul className="app__navbar-links">
                {navElements.map((item, index) => (
                    <li className="app__flex p-text" key={index}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => { setToggle(true) }} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: .8, ease: "easeOut" }}
                    >
                        <HiX onClick={() => { setToggle(false) }} />
                        <ul >
                            {navElements.map((item, index) => (
                                <li key={index} onClick={() => { setToggle(false) }}>
                                    <a href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

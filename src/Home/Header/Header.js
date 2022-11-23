import React, { useState, useEffect } from 'react'
import "./Header.scss"
import { motion } from "framer-motion"
import { images } from "../../Data"
import AppWrap from "../../Wrapper/AppWrap"
import ReactTooltip from "react-tooltip"

let scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut"
        }

    }
}

const professionalInfo = `Hello, it's Osama, a Front-end developer for over than a year, I have 
developed many websites and web Apps, would be an excellent choice for your organization or project, 
I can make all your ideas come to the real world, In addition to my knowledge bases, I actively seek 
out new technologies and stay up-to-date on the industry trends and advancements. I can be reached 
anytime.`

let personalInfo = `I'm a student at AAST, I study Engineering, Electronics and communication 
department , it's the second year to me at the college. I was so interested about web development 
specially the front-end career so I started to learn it for over than a year and I have accomplished 
many websites which are real and virtual and I am so excited to start work with you`

// let experienceLeftSide = [images.typescript, images.firebase, images.sass]
let experienceLeftSide = [ images.sass]

let experience = [images.nextjs,images.react, images.graphql,  images.redux]

const Header = ({ isDark }) => {
    const [toolTip, setToolTip] = useState(true);

    const handleLeave = () => {
        setToolTip(false);
        setTimeout(() => setToolTip(true), 50);
    }
    useEffect(() => {
        console.log(isDark)
    }, [isDark])

    return (

        <div className="app__header app__flex" >


            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex" data-tip={personalInfo} onMouseLeave={handleLeave} data-for="test">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }} >
                            <h2 className="p-text">Hi, I am</h2>
                            <h1 className="head-text">Osama</h1>
                        </div>
                    </div>
                    {toolTip &&
                        <ReactTooltip
                            effect="solid"
                            arrowColor="#fff"
                            className="skills-tooltip"
                            id="test" />}


                    <div className="tag-cmp app-flex">
                        <p className="" style={{ fontWeight: "bold" }}>Web Developer</p>
                        <p className="" style={{ fontWeight: "bold" }}>Graphic Designer</p>
                    </div>
                </div>


                <motion.div
                    variant={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className="app__header-circles-level2"
                >
                    {experienceLeftSide.map((item, index) => (
                        <div className="circle-cmp app__flex" key={index} >
                            <img src={item} alt="cc" />
                        </div>
                    ))}
                </motion.div>


            </motion.div>


            <motion.div
                onMouseLeave={handleLeave}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: .5, delayChildren: .5 }}
                className="app__header-img app__flex"
                data-tip={professionalInfo}
            >


                <img src={images.osama2} alt="" className="app__header-img-class" />

                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                    className="overlay_circle"
                />
                {toolTip &&
                    <ReactTooltip
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                    >
                        {professionalInfo}
                    </ReactTooltip>}

            </motion.div>


            {/* **************************************************************** */}
            {/* **************************************************************** */}
            {/* **************************************************************** */}

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {experience.map((item, index) => (
                    <div className="circle-cmp app__flex" key={index} >
                        <img src={item} alt="cc" />
                    </div>
                ))}


            </motion.div>
        </div>


    )
}

export default AppWrap(Header, "home") 

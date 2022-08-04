import React from 'react'
import "./Header.scss"
import { motion } from "framer-motion"
import { images } from "../../Constants"
import AppWrap from "../../Wrapper/AppWrap"

let scaleVariants={
    whileInView:{
        scale:[0, 1],
        opacity:[0, 1],
        transition: {
            duration:1,
            ease: "easeInOut"
        }

    }
}
let experience=[images.redux,images.react,images.sass]
const Header = () => {
    return (
        <div  className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Osama</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app-flex">
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Graphic Designer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: .5, delayChildren: .5 }}
                className="app__header-img app__flex"
            >
                <img src={images.profile1} alt="" className="app__header-img-class" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                    src={images.circle}
                    alt="cx"
                    className="overlay_circle"
                />

            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {experience.map((item,index)=>(
                    <div className="circle-cmp app__flex" key={index} >
                        <img src={item} alt="cc" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header,"home") 

import React, { useEffect, useState } from 'react'
import "./About.scss"
import { motion } from "framer-motion"
import { images } from "../../Data"
import { urlFor, client } from "../../client"
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
const About = () => {
    const [abouts, setAbouts] = useState([])
    useEffect(() => {
        const query = "*[_type == 'abouts']"
        client.fetch(query).then((data) => {
            setAbouts(data)
        })
    }, [])
    return (
        <>
            <h3 className="head-text-good" style={{ marginTop: 40 }}>I Know That <span>Good Designes</span> means <span>Good Projects</span> means <span>Good Business</span></h3>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: .5, type: "tween" }}
                        className="app__profile-item"
                        key={index}
                    >
                        <img src={urlFor(about.imgUrl)} alt="" />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <h2 className="p-text" style={{ marginTop: 10 }}>{about.description}</h2>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg") 

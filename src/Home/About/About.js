import React, { useEffect, useState } from 'react'
import "./About.scss"
import { motion } from "framer-motion"
import { Row, Col } from "reactstrap"
import SubAbout from './SubAbout'
import Hello from './Hello'
import Education from './Education'

import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
const About = () => {
    const [aboutFilter, setAboutFilter] = useState("hello")
    return (
        <>
            <motion.div
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5, type: "tween" }}
                className="app__profile-item"
            >
                <Row >
                    <h3 className="head-text" style={{ marginBottom: "70px" }}>About Me</h3>
                    <Col lg="4" md="3" className='mb-5'>
                        <div className='about_btns d-flex align-items-center flex-column'>
                            <button onClick={() => setAboutFilter("hello")} className={`about_btn ${aboutFilter === "hello" && "about_btn_active "}`}>Hello</button>
                            <button onClick={() => setAboutFilter("about")} className={`about_btn ${aboutFilter === "about" && "about_btn_active "}`}>About Me</button>
                            <button onClick={() => setAboutFilter("education")} className={`about_btn ${aboutFilter === "education" && "about_btn_active "}`}>Educatio</button>
                        </div>
                    </Col>
                    <Col lg="8" md="9" className='about_content_wrapper d-flex gap-5 '>
                        {aboutFilter === "about" && <SubAbout />}
                        {aboutFilter === "education" && <Education />}
                        {aboutFilter === "hello" && <Hello />}
                    </Col>
                </Row>
            </motion.div>
        </>
    )
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg") 

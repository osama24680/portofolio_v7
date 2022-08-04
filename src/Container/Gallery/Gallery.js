
import React, { useState } from 'react'
import "./Gallery.scss"
import DesignesData from "../../Constants/DesignesData"
import { motion } from 'framer-motion'
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
const Gallery = () => {

    const [isShow, setIsShow] = useState(false)
    const [word, setWord] = useState("show")

    const showHideSites = () => {

        if (word === "show") {
            setIsShow(true)
            setWord("hide")
        } else if (word === "hide") {
            setIsShow(false)
            setWord("show")
        }
    }



    return (

        <>

            <h2 className="head-text" >My <span> Gallery</span> </h2>
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delayChildren: .5 }}
                className="app__work-portfolio"
            >
                <div className='allImages' style={{ margin: "4rem 0 2rem"}}>
                    {DesignesData.map((item, index) => (
                        <div key={index} className={`${item.name} app__work-filter-item`}>
                            <img src={item.img} className={`${isShow ? "show app__work-item-gallery" : item.class  } `} alt={item.name} />
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="app__work-filter">
                <div onClick={showHideSites} className="app__work-filter-item app__flex p-text item-active-button" t>show</div>
            </div>




        </>

    )
}

export default AppWrap(MotionWrap(Gallery, "app__works"), "gallery", "app__whitebg")
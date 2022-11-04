
import React, { useState } from 'react'
import "./Gallery.scss"
import DesignesData from "../../Data/DesignesData"
import { motion } from 'framer-motion'
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai"

const Gallery = () => {

    const [isShow, setIsShow] = useState(false)
    const [showPlus, seShowPlus] = useState(true)
    const [word, setWord] = useState("More Images...")


    const showHideSites = (e) => {
        if (word === "More Images...") {
            setIsShow(true)
            setWord("Hide Images")
        } else if (word === "Hide Images") {
            setIsShow(false)
            setWord("More Images...")
        }
    }

    function handlePlus(){
        let oppoiste=!showPlus
        seShowPlus(oppoiste)
    }

    return (
        <>
            <h2 id="headGallery" className="head-text" >My <span> Gallery</span> </h2>
            <div  className="app__flex plusIcon" onClick={handlePlus}>{showPlus? <AiOutlinePlusCircle /> :<AiOutlineMinusCircle /> }</div>
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delayChildren: .5 }}
                // className="app__work-portfolio" 
                className={`${showPlus? "hide":"app__work-portfolio show"}`}
            >
                <div className='allImages' style={{ margin: "4rem 0 2rem" }}>
                    {DesignesData.map((item, index) => (
                        <div key={index} className={`${item.name} app__gallery-filter-item`}>
                            {/* <img src={item.img} className={`${isShow ? "hide app__work-item-gallery" : ` show ${item.class}`  } `} alt={item.name} /> */}
                            <img src={item.img} className={`${isShow ? "show" : item.class} `} alt={item.name} />
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className={`${showPlus? "hide":"app__work-filter show"}`} style={{ margin: "0rem 0 2rem" }}>
                <div onClick={showHideSites} className="app__work-filter-item app__flex p-text item-active-button" >{word}</div>
            </div>




        </>

    )
}

export default AppWrap(MotionWrap(Gallery, "app__works"), "gallery", "app__whitebg")
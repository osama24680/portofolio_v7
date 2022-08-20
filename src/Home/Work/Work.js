import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { urlFor, client } from "../../client"
import "./Work.scss"
let categories = ["UI/UX", "JavaScript", "OOP", "jQuery", "React.JS", "TypeScript", "All"]
const Work = () => {

    const [works, setWorks] = useState([]);
    const [activeFilter, setActiveFilter] = useState("React.JS");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [filterWork, setFilterWork] = useState([]);
    const [show, setShow] = useState(false);

    function handleShow() {
        let newShow = !show
        setShow(newShow)
    }
    function handleWorkFilter(item) {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }])
            if (item === "All") {
                setFilterWork(works)
            }

            else {
                setFilterWork(works.filter(work => work.tags[0].includes(item)))
            }
        }, 10)
    }



    useEffect(() => {
        let query = "*[_type=='works']"
        client.fetch(query).then(data => {
            // console.log((data))
            setWorks(data)
            setFilterWork(data.filter(work => work.tags[0].includes("React.JS")))
        })

    }, [])
    return (
        <>
            <h2 className="head-text" >My <span> Portofolio</span> </h2>
            <div className="app__work-filter">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ""} }`}
                    >{item}</div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: .5, delayChildren: .5 }}
                className="app__work-portfolio">
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index} >
                        <div className="app__work-img app__flex">
                            <img src={urlFor(work.imgUrl)} alt="" />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: .25, ease: "easeInOut", staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={work.projectLink} target="_blank" rel="no noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, .8] }}
                                        transition={{ duration: .25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={work.codeLink} target="_blank" rel="no noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, .8] }}
                                        transition={{ duration: .25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text" >{work.tags[0]}</p>
                            </div>
                        </div>
                        <div className="app__work-button app__flex p-text" onClick={handleShow}>
                            <p>Technologies</p>
                        </div>
                        {/* <div className={show ? "showTech" : "app__work-technologies  "}> */}
                        <div className="app__work-technologies  showTech app__flex">
                            {work.technologies.map(item => (
                                <img src={urlFor(item)} alt="" />
                            ))}
                        </div>
                    </div>

                ))}

            </motion.div>

        </>
    )
}


export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg")

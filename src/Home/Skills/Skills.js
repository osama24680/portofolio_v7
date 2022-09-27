import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { urlFor, client } from "../../client"
import ReactTooltip from "react-tooltip"
import "./Skills.scss"


const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const [toolTip, setToolTip] = useState(true);

    const handleLeave = () => {
        setToolTip(false);
        setTimeout(() => setToolTip(true), 50);
    }


    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={index}
                        >
                            <motion.div
                                whileHover={{ boxShadow: `0 0 25px ${skill.bgColor}` }}
                                transition={{ duration: 0.2 }}
                                className="app__flex"
                                style={{}}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </motion.div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="app__skills-exp">
                    {experiences.map((experience, index) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={index}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work, index) => (
                                    <div key={index}>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}

                                        >
                                            <div onMouseLeave={handleLeave} >
                                                <h4 className="bold-text">{work.name}</h4>
                                                <p className="p-text">{work.company}</p>
                                            </div>
                                        </motion.div>
                                        {toolTip &&
                                            <ReactTooltip
                                                id={work.name}
                                                effect="solid"
                                                arrowColor="#fff"
                                                className="skills-tooltip"

                                            >
                                                {work.desc}
                                            </ReactTooltip>}

                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default AppWrap(MotionWrap(Skills, "app__works"), "skills", "app__primarybg") 

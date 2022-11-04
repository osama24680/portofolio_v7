import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { urlFor, client } from "../../client"
import "./Testimonial.scss"

let clients = [{ id: 1, client: "Yasmine Mokhtar", platform: "Upwork" }]
const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClick(index) {
        setCurrentIndex(index)
    }
    useEffect(() => {
        const queryTestimonials = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(queryTestimonials).then((data) => {
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });
    }, []);
    let element = testimonials[currentIndex]
    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(element.imgurl)} alt="" />
                        <div className="app__testimonial-content">
                            <p className="p-text"><i>"{element.feedback}"</i></p>
                            <div>
                                <h4 className="bold-text">{element.name}</h4>
                                <h5 className=""><a href={element.review_link}>{element.platform}</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className='app__testimonial-btns app__flex'>
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
            <div className="app__testimonial-brands app__flex" >
                {brands.map((brand, index) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: .5.toExponential, type: "tween" }}
                        key={index}
                    >
                        <a href={brand.link} target="_blank" rel="noreferrer"> <img src={urlFor(brand.imgUrl)} alt="" /></a>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonial", "app__whitebg") 

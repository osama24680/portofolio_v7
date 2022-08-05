import React, { useState } from 'react'
import "./Footer.scss"
import { images } from "../../Data"
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { client } from "../../client"
const Footer = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData

    function handleChangeInput(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    function handleSubmit(e) {
        setLoading(true)
        const contact = {
            _type: "contact",
            name,
            email,
            message
        }
        client.create(contact).then((info) => {
            setLoading(false)
            setIsFormSubmitted(true)
        })

    }




    return (
        <>
            <h2 className="head-text">Take a coffe & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="" />
                    <a href="mailto:osamamegahed2468@gmail.com" className="p-text">osamamegahed2468@gmail.com</a>
                </div>


                <div className="app__footer-card">
                    <img src={images.mobile} alt="" />
                    <a href="tel:+201127796848" className="p-text">+201127796848</a>
                </div>
            </div>
            {!isFormSubmitted ? <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" placeholder="Your Name" value={name} onChange={handleChangeInput} name="name" />
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" placeholder="Your Email" value={email} onChange={handleChangeInput} name="email" />
                </div>
                <div >
                    <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
            </div> :
                <div>
                    <h3 className="head-text">Thanks for getting in touch</h3>
                </div>
            }
        </>
    )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__primarybg") 

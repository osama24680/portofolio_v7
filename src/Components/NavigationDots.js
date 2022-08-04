import React from 'react'


const navElements = ["home", "about", "work", "skills","testimonial", "contact",]

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {navElements.map((item, index) => (
                <a className="app__navigation-dot" key={index} href={`#${item}`} style={active === item ? { backgroundColor: "#313bac" } : {}} />
            ))}
        </div>
    )
}

export default NavigationDots

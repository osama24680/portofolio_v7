import React from 'react'
import "./Technologies.scss"
import redux from '../../assets/redux.png';
const Technologies = () => {
    return (
        <div className="Technologies">
            <div className="Technologies__header">
                <h2>welcome to project</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                </p>
                <img src={redux} alt=""  />
            </div>
        </div>
    )
}

export default Technologies
import React from 'react'
import "./Education.css"
const Education = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>College</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>B.Eng</td>
                    <td>EC</td>
                    <td>AAST</td>
                    <td>2019 - 2024</td>
                </tr>
                <tr>
                    <td>Web Developer</td>
                    <td>Frront-end</td>
                    <td>Online</td>
                    <td>2021 - 2022</td>
                </tr>
            

            </tbody>
        </table>
    )
}

export default Education

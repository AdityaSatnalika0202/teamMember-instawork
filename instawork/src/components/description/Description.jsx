import React from 'react'
import './description.css'

const Description = (props) => {
    const mainHeading = props.mainHeading
    const subHeading = props.subHeading
    return (
        <div>
            <div> <h2> <b> {mainHeading} </b></h2></div>
            <p className='subHeading'>{subHeading}</p>
            <hr></hr>
        </div>
    )
}

export default Description

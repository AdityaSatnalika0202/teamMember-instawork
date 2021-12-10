import React from 'react'
import './header.css'
const header = (props) => {
    const headerName = props.headerName
    return (
        <div className='pageHeading'>
            <h1> {headerName} </h1>
        </div>
    )
}

export default header

import React from 'react'
import './listpage.css'
import { Plus } from 'react-bootstrap-icons';
import SingleUserDiplay from '../../components/singleUserDisplay/SingleUserDiplay'

const ListPage = () => {
    let count = 3
    let persons = [{},{},{}]
    return (
        <div className='container-placeholder'>
            <div className='pageHeading'>
                <h1> LIST PAGE </h1>
            </div>
            <div className='main-container'>
                <div className='sub-container'>
                    <div className='icon'><Plus size={40}/></div>
                    <div> <h2> <b> Team Members </b></h2></div>
                    <p className='subHeading'>You have {count} team members.</p>
                    <hr></hr>
                    { persons.map(e=><SingleUserDiplay/>)}
                </div>
            </div>
            
        </div>
    )
}

export default ListPage
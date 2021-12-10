import React from 'react'
import './listpage.css'
import { Plus } from 'react-bootstrap-icons';
import SingleUserDiplay from '../../components/singleUserDisplay/SingleUserDiplay'
import Header from '../../components/header/Header';
import Description  from '../../components/description/Description'

const ListPage = () => {
    let count = 3
    let persons = [{},{},{},{},{},{}]
    return (
        <div className='container-placeholder'>
            <Header headerName = "List Pages" />
            <div className='main-container'>
                <div className='sub-container'>
                    <div className='icon'><Plus size={40}/></div>
                    <Description mainHeading = {"Team Members"} subHeading = {"You have " + count + " team members."}/>
                    <div className='user-list'>
                        { persons.map(e=><SingleUserDiplay/>)}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ListPage
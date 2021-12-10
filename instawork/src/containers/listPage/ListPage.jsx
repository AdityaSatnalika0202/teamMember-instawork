import React, {useEffect} from 'react'
import './listpage.css'
import {Plus} from 'react-bootstrap-icons';
import SingleUserDiplay from '../../components/singleUserDisplay/SingleUserDiplay'
import Header from '../../components/header/Header';
import Description from '../../components/description/Description'
import {useDispatch, useSelector} from "react-redux";
import {baseurl,list} from '../../constants'


const data = require('../../test.json');


const ListPage = () => {
    //let persons = data
    const dispatch = useDispatch();
    let persons = useSelector(state => state.user_list);
    useEffect(() => {
        fetch(baseurl + list)
            .then(data => data.json())
            .then(data=>{
                persons = data
                dispatch({
                    type: "USER_LIST",
                    user_list: data
                })
            })

    }, []);
    const handleClick = () => {
        dispatch({
            type: "SCREEN",
            screen: "add"
        })
    }

    return (
        <div className='container-placeholder'>
            <Header headerName="List Pages"/>
            <div className='main-container'>
                <div className='sub-container'>
                    <div className='icon'><Plus size={40} onClick={handleClick}/></div>
                    <Description mainHeading={"Team Members"}
                                 subHeading={"You have " + persons.length + " team members."}/>

                    <div className='user-list'>
                        {
                            persons.length > 0 ? persons.map(e => <SingleUserDiplay user={e}/>) :
                                <div> Please Add Users To View them</div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListPage
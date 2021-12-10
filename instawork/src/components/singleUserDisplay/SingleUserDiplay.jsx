import React from 'react'
import './singleuserdisplay.css'
import { PersonCircle } from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";


const SingleUserDiplay = (props) => {
    const user = props.user

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: "EDIT",
            screen: "edit",
            user : user
          })
    }

    return (
        <div>
            <div class="flex-container" onClick={handleClick}>  
                    <div class="flex-item-profile-picture">
                        <PersonCircle size={75} />
                    </div>  
                    <div class="flex-item-user-details">
                        <div className='userName'> {user.firstName + " " + user.lastName} </div>
                        <div className='phoneNumber'> {user.contact} </div>
                        <div className='email'> {user.email} </div>                        
                    </div>  
                    <hr/>
            </div> 
            <hr></hr> 
       </div>
    )
}

export default SingleUserDiplay

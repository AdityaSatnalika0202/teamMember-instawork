import React from 'react'
import './singleuserdisplay.css'
import { PersonCircle } from 'react-bootstrap-icons';


const SingleUserDiplay = () => {
    return (
        <div>
            <div class="flex-container">  
                    <div class="flex-item-profile-picture">
                        <PersonCircle size={75} />
                    </div>  
                    <div class="flex-item-user-details">
                        <div className='userName'> Test User Name </div>
                        <div className='phoneNumber'> 456-725-5067 </div>
                        <div className='email'> test@instaworks.com </div>                        
                    </div>  
                    <hr/>
            </div> 
            <hr></hr> 
       </div>
    )
}

export default SingleUserDiplay

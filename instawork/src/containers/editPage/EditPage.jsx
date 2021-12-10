import React from 'react'
import './editpage.css'
import Header from '../../components/header/Header';
import Description  from '../../components/description/Description'
import UserInfoForm from '../../components/userInfoForm/UserInfoForm';
import { useDispatch } from "react-redux";



const EditPage = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: "SCREEN",
            screen: "list"
          })
    }

    return (
        <div>
        <div className='container-placeholder'>
                    <Header headerName = "Edit Page" />
                    <div className='main-container'>
                        <div className='sub-container'>
                            <Description mainHeading = {"Edit team member"} subHeading = {"Set email, location and role"}/>
                            <UserInfoForm />
                            <div className='delete-button'><button type="button" class="btn btn-primary"  onClick={handleClick}>Delete</button></div>
                        </div>
                    </div>
                    
                </div>       
     </div>
    )
}

export default EditPage

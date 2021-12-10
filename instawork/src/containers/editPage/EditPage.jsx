import React from 'react'
import './editpage.css'
import Header from '../../components/header/Header';
import Description  from '../../components/description/Description'
import UserInfoForm from '../../components/userInfoForm/UserInfoForm';
const EditPage = () => {
    return (
        <div>
        <div className='container-placeholder'>
                    <Header headerName = "Edit Page" />
                    <div className='main-container'>
                        <div className='sub-container'>
                            <Description mainHeading = {"Edit team member"} subHeading = {"Set email, location and role"}/>
                            <UserInfoForm />

                            <div className='save-button'><button type="button" class="btn btn-primary">Save</button></div>
                            <div className='delete-button'><button type="button" class="btn btn-primary">Delete</button></div>
                        </div>
                    </div>
                    
                </div>       
     </div>
    )
}

export default EditPage

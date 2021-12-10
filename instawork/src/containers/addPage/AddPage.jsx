import React from 'react'
import './addpage.css'
import Header from '../../components/header/Header';
import Description  from '../../components/description/Description'
import UserInfoForm from '../../components/userInfoForm/UserInfoForm';

const AddPage = () => {
    return (
        <div className='container-placeholder'>
            <Header headerName = "Add Page" />
            <div className='main-container'>
                <div className='sub-container'>
                    <Description mainHeading = {"Add a team member"} subHeading = {"Set email, location and role"}/>
                    <UserInfoForm />

                    <div className='save-button'><button type="button" class="btn btn-primary">Save</button></div>
                </div>
            </div>
            
        </div>
    )
}

export default AddPage

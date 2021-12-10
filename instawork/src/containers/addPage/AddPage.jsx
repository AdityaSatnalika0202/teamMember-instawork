import React from 'react'
import './addpage.css'
import Header from '../../components/header/Header';
import Description  from '../../components/description/Description'
import UserInfoForm from '../../components/userInfoForm/UserInfoForm';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";

const AddPage = () => {
    const user = {
        "firstName" : "",
        "lastName" : "",
        "email" : "",
        "contact" : ""
      }
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: "SCREEN",
            screen: "list"
        })
    }
    return (
        <div className='container-placeholder'>
            <Header headerName = "Add Page" />
            <div className='main-container'>
                <div className='sub-container'>
                    <div className='icon-edit-page'><ArrowLeftCircle size={25} onClick={handleClick}/></div>
                    <Description mainHeading = {"Add a team member"} subHeading = {"Set email, location and role"}/>
                    <UserInfoForm  user = {user}/>
                </div>
            </div>
            
        </div>
    )
}

export default AddPage

import React from 'react'
import './editpage.css'
import Header from '../../components/header/Header';
import Description  from '../../components/description/Description'
import UserInfoForm from '../../components/userInfoForm/UserInfoForm';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import {baseurl} from '../../constants'


const EditPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const handleClick = () => {
        dispatch({
            type: "SCREEN",
            screen: "list"
          })
    }
    const deleteUser = () => {
        console.log(baseurl)
        console.log(user.email)
        fetch(baseurl + "delete?email=" + user.email)
            .then(data => data.json())
            .then(data=>{
                alert("Delete Success")
                dispatch({
                    type: "SCREEN",
                    screen: "list"
                })
            })
    }

    return (
        <div>
        <div className='container-placeholder'>
                    <Header headerName = "Edit Page" />
                    <div className='main-container'>
                        <div className='sub-container'>
                                <div className='icon-edit-page'><ArrowLeftCircle size={25} onClick={handleClick}/></div>
                                <Description mainHeading = {"Edit team member"} subHeading = {"Set email, location and role"}/>
                            <UserInfoForm user = {user}/>
                            <div className='delete-button'><button type="button" class="btn btn-primary"  onClick={deleteUser}>Delete</button></div>
                        </div>
                    </div>
                    
                </div>       
     </div>
    )
}

export default EditPage

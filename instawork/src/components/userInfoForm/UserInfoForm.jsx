import React from 'react'
import {Form} from 'react-bootstrap'
import './userinfoform.css'


const UserInfoForm = () => {
    return (
        <div>
            <h5 className='mb-3'>Info</h5> 
            <form onSubmit={()=>{}} >            
                <input className="form-control input-form-text" type="text" value={""} placeholder='Enter First Name' onChange={()=>{}} />
                <input className="form-control input-form-text" type="text" value={""} placeholder='Enter Last Name' onChange={()=>{}} />
                <input className="form-control input-form-text" type="text" value={""} placeholder='Enter Email' onChange={()=>{}} />
                <input className="form-control input-form-text" type="text" value={""} placeholder='Enter Contact Number' onChange={()=>{}} />
            </form>
            <br/>
            <h5 className='mb-3'>Role</h5> 
            <form className=''>
             <input type="radio" value="regular" id="male" onChange={()=>{}} name="role" defaultChecked />
                <label for="regular">Regular - Can't delete members</label> <br/>
             <hr/>
            <input type="radio" value="admin" id="female" onChange={()=>{}} name="role"/>
            <label for="admin">Admin - Can delete members</label>
         </form>
        </div>
    )
}

export default UserInfoForm

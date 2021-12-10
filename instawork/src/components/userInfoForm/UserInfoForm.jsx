import React , {useState} from 'react'
import './userinfoform.css'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {baseurl,add} from '../../constants'


const UserInfoForm = (props) => {
    const dispatch = useDispatch();

    const [formValue,setFormValues] = useState({
        firstName: props.user.firstName ? props.user.firstName : "" ,
        lastName: props.user.lastName ?  props.user.lastName : "",
        email: props.user.email ? props.user.email : "",
        contact: props.user.contact ? props.user.contact : "",
        role: 'regular'
    })
    const { register, handleSubmit } = useForm({
        defaultValues: formValue
      });

    const onSubmit = (data)=>{
        setFormValues(data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(baseurl + add, requestOptions)
            .then(response => {
                dispatch({
                    type: "SCREEN",
                    screen: "list"
                })
            })
    }

    return (
        <div>
            <h5 className='mb-2'>Info</h5> 
            <form className='mb-4'  onSubmit={handleSubmit(onSubmit)} >            
                <input className="form-control input-form-text" type="text" placeholder='Enter First Name' {...register("firstName")} required/>
                <input className="form-control input-form-text" type="text" placeholder='Enter Last Name' {...register("lastName")} required/>
                <input className="form-control input-form-text" type="email" placeholder='Enter Email' {...register("email")} required/>
                <input className="form-control input-form-text" type="text" placeholder='Enter Contact Number' {...register("contact")} required/>
                <div className='save-button'><input type="submit" class="btn btn-primary" value={"Save"} /></div>
            </form>
            <h5 className='mb-2'>Role</h5> 
            <form >
                <input type="radio" value="regular" id="regular" name="role" {...register("role")}/>
                <label for="regular" >Regular - Can't delete members</label> <br/>
                <hr/>
                <input type="radio" value="admin" id="admin" name="role" {...register("role")}/>
                <label for="admin" >Admin - Can delete members</label>
                <hr/>
            </form>
        </div>
    )
}

export default UserInfoForm

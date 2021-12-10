import React , {useState} from 'react'
import './userinfoform.css'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


const UserInfoForm = () => {
    const dispatch = useDispatch();

    const [formValue,setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        role: 'regular'
    })
    const { register, handleSubmit } = useForm({
        defaultValues: formValue
      });

    const onSubmit = (data)=>{
        setFormValues(data)
        dispatch({
            type: "SCREEN",
            screen: "list"
          })
    } 


    return (
        <div>
            <h5 className='mb-3'>Info</h5> 
            <form className='mb-4'  onSubmit={handleSubmit(onSubmit)} >            
                <input className="form-control input-form-text" type="text" placeholder='Enter First Name' {...register("firstName")} required/>
                <input className="form-control input-form-text" type="text" placeholder='Enter Last Name' {...register("lastName")} required/>
                <input className="form-control input-form-text" type="email" placeholder='Enter Email' {...register("email")} required/>
                <input className="form-control input-form-text" type="text" placeholder='Enter Contact Number' {...register("number")} required/>
                <div className='save-button'><input type="submit" class="btn btn-primary" value={"Save"} /></div>
            </form>
            <h5 className='mb-3'>Role</h5> 
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

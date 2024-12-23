import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Signup.css"


const SignupPage = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate = useNavigate();

    const checkLogin = (data)=>{
        console.log("Form data",data)
        axios.post('https://productinquary-be.onrender.com/users/signup',data)
        .then(response=>{
            console.log(response.data)
            alert("Login successful")
            navigate("/login")
        })
        .catch(error=>console.log(error))
        alert("cant login")
    }
    return (
        <div className='box'>
        <h2>Signup Here</h2>
        <form onSubmit={handleSubmit(checkLogin)}>
            <div>
                <input
                    {...register("name")}
                    type="text" placeholder='Enter name' />
            </div>
            <div>
                <input
                    {...register("userName")}
                    type="text" placeholder='Enter user ID' />
            </div>
            <div>
                <input
                    {...register("email")}
                    type="email" placeholder='Enter email' />
            </div>
            <div>
                <input
                    {...register("password")}
                    type="password" placeholder='Enter password' />
            </div>
            <button type='submit'>Signup</button>
            <Link to={"/login"}>Already have an account?...</Link>
        </form>
    </div>
    )
}

export default SignupPage
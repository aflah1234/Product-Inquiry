import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/loginpage.css"
import { toast } from 'react-toastify';
function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate = useNavigate();

    const checkLogin = (data)=>{
        // console.log("Form data",data)
        axios.post('https://productinquary-be.onrender.com/users/login',data)
        .then(response=>{
            const token = response.data.token;
            console.log(token, "token")
            localStorage.setItem('token', token)
            toast.success("Login successful")
            navigate("/product")
        })
        .catch(error=>console.log(error))
        toast.error("Try Again")
    }

  return (
    <div className="login-container">
            <h2>Login Here</h2>
            <form onSubmit={handleSubmit(checkLogin)}>
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
                <button type='submit'>Login</button>
                <Link to={"/signup"}>Don't have an account?...</Link>
            </form>
        </div>
  )
}

export default Login
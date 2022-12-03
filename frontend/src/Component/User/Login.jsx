import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import './userStyle.css';

function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const { userLogin } = useContext(UserContext);
    const handleLogin =(e)=>{
        e.preventDefault();
        if(!login.username || !login.password){
            window.alert("Please provide all the required fields");
            return;
        }
        else{
            userLogin(login);
        }
    }
  return (
    <div className='container'>
        <div className='loginCard'>
        <img src="download.jfif" alt=""  className='avtar'/>
            <h1>LOGIN..</h1>
            <form onSubmit={handleLogin} className='login-form'>
                <div className='field'>
                    <input type="text" required={true} onChange={(e) => { setLogin({ ...login, username: e.target.value }) }}  placeholder='User Name'/>
                </div>
                <div className='field'>
                    <input type="password" required={true}  placeholder='Password' onChange={(e) => { setLogin({ ...login, password: e.target.value }) }}/>
                </div>
                <div className='field'>
                    <button type="submit" className='logBtn'>Login</button>
                </div>
                <div className='regisLink'>
                    <Link to='/register'>Register?</Link>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login

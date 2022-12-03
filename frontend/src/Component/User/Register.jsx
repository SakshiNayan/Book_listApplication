import React from 'react'
import { useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import './userStyle.css';

function Register() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const [confirmpass, setconfirmPass]= useState({confirmPassword: ""});
    const { userRegister } = useContext(UserContext);

    const handleRegister =(e)=>{
        e.preventDefault();
        if(!data.username || !data.password || !confirmpass.confirmPassword){
            window.alert("Please provide All details !");
            return;
        }
        if(confirmpass.confirmPassword !== data.password){
            window.alert("Passdword does not Matched");
            return;
        }
        else{
            userRegister(data);
        }
    }
  return (
    <div className='container1'>
        <div className='regisCard'>
            <img src="download.jfif" alt=""  className='avtar'/>
            <h1>REGISTER</h1>
            <form onSubmit={handleRegister} className='form-r'>
                <div className='field'>
                    <input type="text" required={true} placeholder='User Name'  onChange={(e)=>{setData({...data, username: e.target.value})}}/>
                </div>
                <div className='field'>
                    <input type="password" required={true} placeholder='Password'  onChange={(e)=>{setData({...data, password: e.target.value})}}/>
                </div>
                <div className='field'>
                    <input type="password" required={true}  placeholder='Confirm-Pass' onChange={(e)=>{setconfirmPass({...confirmpass, confirmPassword: e.target.value})}}/>
                </div >
                <div className='field'>
                    <button type="submit" className='regBtn'>Register</button>
                </div>
                <Link to='/login' className='linksource'>Member LogIn?</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Register

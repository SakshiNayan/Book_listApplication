import React from 'react'
import './Styling/style.css';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <h1 className="heading">Books List</h1>
        <Link to='login'><button className='logoutBtn'>logout</button></Link>
    </div>
  )
}

export default Header
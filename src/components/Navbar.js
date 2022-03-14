import React from 'react'
import {useNavigate,Link} from 'react-router-dom';
import './Navbar.css';
import  Logo from '../assets/scholarship.png';
import Button from '@mui/material/Button';
export default function Navbar() {
    let navigate=useNavigate()();
    function handleRegister()
    {
        
      navigate.push('/register');
      
    }

  return (
   
        <div>
           
           <img src={Logo} className="AppLogo" alt="Logo"/>
            <p className='Endeavour'>Endeavour</p>
            <div className="NavbarInfo">
                About Us 
                </div>
            <div className="grants" >
                About grants
            </div>
            <Link to='/register' style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className='ButtonReg' color='warning' onClick={<Link to='/register'></Link>}>Register</Button>
            </Link>
            <Link to='/signin' style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className='ButtonSign' color='warning'>Sign In</Button>
            </Link>
        </div>

   
  )
}

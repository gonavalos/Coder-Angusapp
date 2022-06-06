import React, { useState } from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
//navbar-dark bg-dark
//<nav className="">

function Navbar(){
    const [ navbar,setNavbar] = useState(false)


    const changeBackground = () => {
        if(window.scrollY >= 29){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    // <div className='div1'>
         <nav className={navbar  ? 'navbar navbar-light bg-light ' : 'navbar navbar-dark bg-transparent  sticky-bottom'}>
    {/* // <nav className="navbar sticky-top ">  */}
        <div className="navbar-expand-lg container-fluid">
            {/* <img src="../../public/img/img-logo/727D0726-44F0-4F02-9402-64E7BEA94612.jpeg" alt="logo"> </img> */}

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
            <div className='logo'>
                <span src='./logo192.png'> <img src={navbar ? '/img/img-logo/logo.png' : '/img/img-logo/logo2.png'}></img> </span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <NavLink to='/'className="nav-link active" aria-current="page" >Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                    <Link to='/' className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><NavLink to='/' className="dropdown-item">All</NavLink></li>
                    <li><NavLink to='/category/Signature' className="dropdown-item">Signature</NavLink></li>
                    <li><NavLink to='/category/Random' className="dropdown-item" >Random</NavLink></li>
                    
                   
                </ul>

                    </li>
                <li className="nav-item">
                    <CardWidget />
                </li>    
                    
                </ul>
                
            </div>
            
        </div>
    </nav>
    // </div>
    

  )
}

export default Navbar

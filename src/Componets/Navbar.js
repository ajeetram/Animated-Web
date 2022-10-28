import React from 'react'
import {Link} from 'react-router-dom'
import "./nav.css"
function Navbar() {
  return (
    <>
    <div className='container-fluid nav_bg'>
      <div className='row'>
      <div className=' col'> 
    <nav className='navbar navbar-expand-md navbar-light bg-light py-4 px-2'>
       <img src=" " alt='_A'></img>
        <h1 className='navbar-brand '>Ajeet Verma</h1>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
         <div className=' collapse navbar-collapse ' id="mynavbar">
         <ul class="navbar-nav ms-auto ">
            <li className='nav-item'>
              <Link activeClassName="menu_active" exact to ='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item dropdown'>
              <Link activeClassName="menu_active" exact to ='/about' className='nav-link dropdown-toggle' data-bs-toggle="dropdown">About Us</Link>
              <div className='dropdown-menu'>
              <Link activeClassName="menu_active" exact to ='_ajeet' className='dropdown-item'>Education</Link>
              <Link activeClassName="menu_active" exact to ='_ajeet' className='dropdown-item'>Career</Link>
              <Link activeClassName="menu_active" exact to ='_ajeet' className='dropdown-item'>Interest</Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link activeClassName="menu_active" exact to ='/contact' className='nav-link'>Contact</Link>
            </li>
            <li className='nav-item'>
              <Link activeClassName="menu_active" exact to ='/service' className='nav-link'>Services</Link>
            </li>
            </ul> 
         </div>
    </nav>

      </div>

      </div>
    </div>

 
    </>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
   
   <nav className="  navbar navbar-expand-lg bg-body-tertiary">
  <div className=" container-fluid pt-7 pb-3 position-fixed nav-bg nav">
    <Link className="navbar-brand ms-5 text-white fw-bold" to={'/'}> <h2>START FRAMEWORK</h2> </Link>
   
    <div className='me-5 w-25'>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0 gap-3 ">
        
        <li className="nav-item">
          <Link className="nav-link active text-white wbold fw-bold" to={'about'} >ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white fw-bold" to={'portfolio'} >PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white fw-bold"  to={'contact'} >CONTACT</Link>
        </li>
       
      </ul>
      
    </div>

    </div>
  </div>
</nav>



  </>
}

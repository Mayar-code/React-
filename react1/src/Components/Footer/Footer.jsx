
import React from 'react'

export default function Footer() {
  return <>
  
<div className="row pt-5 pb-5 mt-0 d-flex justify-content-around nav-bg">
    
  <div className="col-sm-3 mb-3 mb-sm-0">
    <div className="card  border-0">
      <div className="card-body text-center nav-bg text-white ">
        <h3 className="card-title">LOCATION</h3>
        <p className="card-text">2215 John Daniel Drive</p>
        <p className="card-text">Clark, MO 65243</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card  border-0">
      <div className="card-body text-center nav-bg text-white">
        <h3 className="card-title">AROUND THE WEB</h3>
       <div className='d-flex justify-content-center gap-3 mt-3 '>
               <i class="fa-brands fa-facebook" ></i>
               <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-linkedin-in"></i>
               <i class="fa-solid fa-globe"></i>
       </div>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card  border-0">
      <div className="card-body text-center nav-bg text-white">
        <h3 className="card-title">ABOUT FREELANCER</h3>
        <p className="card-text ">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        
      </div>
    </div>
  </div>
</div>

<div className='text-center footer-bg py-3'>
 <p className='text-white'>Copyright © Your Website 2021</p>
</div>


 

  </>
}

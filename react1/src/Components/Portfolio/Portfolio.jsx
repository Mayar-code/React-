
import React, { useState } from 'react'
import home from '../../assets/poert1.png'
import cake from '../../assets/port2.png'
import tent from '../../assets/port3.png'


export default function Portfolio() {



  return <>

    <div className='text-center mt-5 p-5'>
     
     <h1 className='t-blue fw-bold p t'> PORTFOLIO COMPONENT</h1>
     <i class="fa fa-star t-blue" aria-hidden="true"></i>

     <div className="row justify-content-center mt-4">
          <div className="col-md-4 mb-3">
            <div className="card border-0 ">
              <div className="card-body  ">
                <img src={home} alt="" className="img-fluid rounded-3  " />
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card border-0">
              <div className="card-body">
                <img src={cake} alt="" className="img-fluid rounded-3" />
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card border-0">
              <div className="card-body">
                <img src={tent} alt="" className="img-fluid rounded-3" />
              </div>
            </div>
          </div>
        </div>

 
     <div className="row justify-content-center mt-4">
          <div className="col-md-4 mb-3">
            <div className="card border-0">
              <div className="card-body">
                <img src={home} alt="" className="img-fluid rounded-3" />
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card border-0">
              <div className="card-body">
                <img src={cake} alt="" className="img-fluid rounded-3" />
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card border-0">
              <div className="card-body">
                <img src={tent} alt="" className="img-fluid rounded-3" />
              </div>
            </div>
          </div>
        </div>

    </div>

   
  
  </>
}

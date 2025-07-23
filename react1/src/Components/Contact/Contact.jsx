
import React, { useState } from 'react'

export default function Contact() {

  const [username, setUsername] = useState("");
    
    

  return <>

    <div className='text-center mt-5 p-5'>
     
     <h1 className='t-blue fw-bold p t'>CONTACT SECTION</h1>
     <i class="fa fa-star t-blue" aria-hidden="true"></i>

    <div className=' p-5'>

      <ul className='list-unstyled'>
      <li> <input type="text" placeholder='userName' className='w-50 mb-5 py-3 border-0 border-bottom no-outline rounded-bottom'   /> </li> 
      <li> <input type="number" placeholder='userAge' className='w-50 mb-5 py-3 border-0 border-bottom no-outline rounded-bottom' /> </li> 
      <li> <input type="email" placeholder='userEmail' className='w-50 mb-5 py-3 border-0 border-bottom no-outline rounded-bottom ' /> </li> 
      <li> <input type="password" placeholder='userPassword' className='w-50 py-3 border-0 border-bottom no-outline rounded-bottom' /> </li> 
     </ul>
      
     <div className='w-65  '>
       <button className='border-0 p-2  rounded-3 about-bg text-white '> Send Message </button>
     </div>
    
    </div>
        

    </div>
  
  </>
}

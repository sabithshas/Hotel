import React from 'react'
import "./Footer.css"
function Footer() {
  
  return (
    <>
      <div className='container-fluid footer '>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6  '>
            <div className='sect'>
              <h2 className='text-center text-white'>CONTACT US</h2>
              <a className='icons'><i class="fa-brands fa-facebook"></i>Facebook</a>
              <a className='icons'><i class="fa-brands fa-whatsapp"></i>Whatsapp</a>
              <a className='icons'><i class="fa-brands fa-google"></i>Gmail</a>
              <a className='icons'><i class="fa-brands fa-twitter"></i>Twitter</a>
            </div>
            
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 column2'>
            {/* <div className='fut'> */}
            <h2 className='text-center text-white'>DETAILS ABOUT</h2>
            <ul className='ffff'>
              <li>Kozhikode</li>
              <li>Ernakulam</li>
              <li>Resort</li>
              <li>989889898</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Footer
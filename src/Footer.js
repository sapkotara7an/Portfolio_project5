import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    
    <div className='footer bg-dark text-white'>
    <div className='row'>
      <div className='col-lg-6 col-md-7 col-sm-12'><img src={require('../src/img/contact-banner.png')} height='450px' width='45%'/></div>
      <div className='col-lg-4 col-md-4 col-sm-12'>
        <div className='pb-3'><h5>Let’s Discuss Your Project</h5></div>
        <div className='footer_text2 flex py-4'>
          <div className='icon mx-4'><i class="fa-solid fa-envelope"></i></div>
         <div> <p>Email</p>
        <p>info@domainname.com</p></div>
        </div>

        <div className='footer_text2 flex'>
          <div className='icon mx-4 '><i class="fa-sharp fa-solid fa-map-location-dot"></i></div>
         <div> <p>Location</p>
        <p>Warnwe Park Streetperrine,FL 33157 New York City</p></div>
        </div>
        
      </div>
    </div>
   </div>

    <div className='copyright_text copyright bg-dark py-2 flex px-5 footer_icon'>
    <p className=' text-white pt-2' >Lets get connected..</p>
        <div>
          <Nav>
            <Nav.Link ><i className='fa fa-facebook'/></Nav.Link>
            <Nav.Link href="#deets"><i className="fa fa-twitter"/></Nav.Link>
         
            <Nav.Link href="#deets"><i className="fa fa-youtube"/></Nav.Link>
       
            <Nav.Link href="#deets"><i className="fa fa-google-plus"/></Nav.Link>
            
            <Nav.Link href="#deets"><i className="fa fa-instagram"/></Nav.Link>
            
          </Nav></div>
     <div className='text-white ms-auto copyright_text pt-2 '><p >© 2023 copyright all right reserved</p></div> 
    </div>
    
    </>
  )
}

export default Footer
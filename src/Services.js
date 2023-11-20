import React from 'react'
import { Link } from 'react-router-dom'
import servicesData from './Datas/ServicesData'



function Services() {
  return (
    <>
   
   <div className='container-fluid py-5 px-5'>
      <div className='row'>
        
        <div className='col-lg-6 col-md-12 col-sm-12'>
     
          {servicesData.map((service, index) => (
            
            <div key={index} className='banner2_text flex'>
             
              <div className='web'>

              <Link to={`/service_details/${service.id}`}>  <h6>{service.title}</h6></Link>
                <p>{service.description}</p>
              </div>
              <Link to={`/service_details/${service.id}`}>
              <div className='learn text-black '>
                <i className="fa-sharp fa-solid fa-square-arrow-up-right pb-5" /> <p>Learn More</p>
              </div>
              </Link>
            </div>
           
          ))}
       
        </div>

            <div className='col-lg-5 col-md-12 col-sm-12 ps-5 text-center our_services'>
              <p className='service_title'>Our Services</p>
              <h3 className='pb-3'>COME ON, WE WILL HELP YOU BUILD YOUR DREAM PROJECT.</h3>
             
              <img className='responsive w-100' src={require('../src/img/skills.png')} alt='img'/>
                <div className='flex '>
                  <div className='project pb-2' ><h3>9+</h3>
                    <h6>Years of experience</h6>
                  </div>
                  <div div className='project pb-3'><h3>200+</h3>
                    <h6>Happy Clients</h6>
                  </div>
                  <div div className='project pb-3'><h3>400+</h3>
                    <h6>Projects Completed</h6>
                  </div>
                </div>
            
            </div>

          </div>
        </div>

    </>
  )
}

export default Services
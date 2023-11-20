import React from 'react'

import { FaHandPaper } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import servicesData from './Datas/ServicesData';
import { Link } from 'react-router-dom';
import WorkDatas from './Datas/RecentWorkDatas';

function Banner() {
  return (
    <>


      <div className='banner text-white'>
        <div className='row   flex'>
          <div className='col-lg-6 col-md-12 col-sm-12 banner_text'>
            <div className='text pt-5 '>
              <p className='py-3'><div className='wave'><span><FaHandPaper />
              </span></div> HI THERE!! I'M <span>RAJAN</span>
              <br />WELCOME TO MY PORTFOLIO PAGE</p>
              <h1> <Typewriter

                onInit={(typewriter) => {

                  typewriter

                    .typeString("I AM A DESIGNER")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I AM A DEVELOPER")

                    .start();
                }}
              /></h1>



              <p className='py-3'>We work with professionals and leaders who want to  build careersthat fulfil them intellectually, financially</p>

              <Link to={'/contact'}><button className='bg-success px-btn' > Get in touch</button></Link>
              <div className='rating'>
                <h6 className=' px-4 py-3'> <i className="fa-solid fa-star text-warning px-1"></i>4.8 Average Session Rating</h6>
                <div className='images'>
                  <ul>
                    <li> <img className='' src={require('../src/img/figma.png')} width='50px' /></li>
                    <li><img className='' src={require('../src/img/sketch.png')} width='50px' /></li>
                    <li><img className='' src={require('../src/img/html_5.png')} width='50px' /></li>
                    <li><img className='' src={require('../src/img/adobe_photoshop.png')} width='50px' /></li>
                  </ul>

                </div>
              </div>
            </div>


          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <img className=' banner-image w-100' src={require('./img/home-banner.jpg')} alt='img' />
          </div>
        </div>

      </div>

     
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
      


      <div className='banner4  text-center bg-dark container-fluid'>
        <h1 className='text-white'>TESTIMONIALS</h1>
        <p className='text-white py-3 mb-5'>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='row testimonials '>
          <div className='col-lg-6 col-md-8 col-sm-12'>
            <div className='flex ban4_content'>
              <div className='px-3'> <img src={require('../src/img/avatar-1.jpg')} width='170px' /></div>
              <div><p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><strong>jeniferluthiran</strong></p>
                <p>CEO at pxdraft</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-8 col-sm-12'>
            <div className='flex ban4_content'>
              <div className='px-3'> <img src={require('../src/img/avatar-2.jpg')} width='170px' /></div>
              <div><p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><strong>jeniferluthiran</strong></p>
                <p>CEO at pxdraft</p>
              </div>
            </div>
          </div>



        </div>

      </div>
      <div className='flex bg-dark'>
        <div className=''><img src='https://uiocean.com/themeforest/react/morphy/img/effect/ef-1.svg' /></div>
        <div className='ms-auto'><img src='https://uiocean.com/themeforest/react/morphy/img/effect/ef-2.svg' /></div>
      </div>


      <div className='banner3 container-fluid px-5'>
      <div className='py-3 title text-center'>
        <h1>Our Recent Work</h1>
        <p>
          -Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='row recent_work gap-5'>
        {WorkDatas.map((work) => (
          <div className='col-lg-3 col-md-8 col-sm-12' key={work.id}>
            <Link  className = 'text-black mouse-over-success' to={`/recent_work/${work.id}`}>
            <div className='col_box'>
              <div>
                <h4>{work.title}</h4>
                <p>Responsive Page Designs</p>
              </div>
              <div className='project_img'>
                <img src={work.image} width='300px' alt={work.title} />
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>










    </>
  )
}

export default Banner
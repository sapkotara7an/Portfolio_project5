import React from 'react'
import { Link, NavLink, } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaArrowCircleDown } from 'react-icons/fa';

function Header() {
  return (
    <>

{['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="px-5 " >
   <div className='navbar container-fluid flex'>
    <div className='logo'>
   <Navbar.Brand><Link to= '/'><img className='' src='https://uiocean.com/themeforest/react/morphy/img/logo-light.svg'/></Link></Navbar.Brand>  
    </div>
    <Navbar.Toggle className=' bg-white' aria-controls={`offcanvasNavbar-expand-${expand}`} />
    <Navbar.Offcanvas className=' bg-dark '
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
                 <Offcanvas.Header closeButton className='bg-secondary'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                <img src='https://uiocean.com/themeforest/react/morphy/img/logo-light.svg'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 nav_items gap-5">
    
      
      <NavLink to='/' >HOME</NavLink>
        <NavLink to='/services'  >SERVICES</NavLink>
        <NavLink to='/experience'>EXPERIENCE</NavLink>
        <NavLink to='/portfolio'>PORTFOLIO</NavLink>
        <NavLink to='/contact'>CONTACT</NavLink>
      
   
        <button className='bg-success px-btn ms-auto' type='download' > Download Resume <FaArrowCircleDown/></button>
      </Nav>
      </Offcanvas.Body>
      </Navbar.Offcanvas>
   </div>
   
   </Navbar>
      ))}

    </>
  )
}

export default Header
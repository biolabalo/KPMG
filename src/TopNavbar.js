import React, { useState } from 'react';
import { Navbar }  from  'react-bootstrap'

const TopNavBar = () => {

return ( 
<Navbar className='hugo'>
  <Navbar.Brand href="#home"> <small className='link-1 '>ENGLISH</small></Navbar.Brand>
  <Navbar.Toggle />


  <Navbar.Collapse className="justify-content-center" style={{marginLeft: '20%' }}>
    <Navbar.Text>
    <p className="slogan mb-0">The awards of design, creativity and innovation on the internet</p>
    </Navbar.Text>
  </Navbar.Collapse>

  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
        
        <i className="fab fa-instagram mr-3"></i>
        <i className="fab fa-twitter mr-3"></i>
        <i className="fab fa-facebook mr-3"></i>

    </Navbar.Text>
  </Navbar.Collapse>



</Navbar>
    );
};
export default TopNavBar;
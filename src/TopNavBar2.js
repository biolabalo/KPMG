import React, { useState } from 'react';
import { Navbar , Nav , NavDropdown, Container }  from  'react-bootstrap'

const TopNavBar2 = () => {

const [sidebarOpen , updateSidebarOpen] = useState(false)

return ( 
<Navbar collapseOnSelect expand="lg"  variant="light" className='p-0 second_nav_bar'>

<Navbar.Brand href="#home"
>
React-Bootstrap
</Navbar.Brand>


  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" style={{height: '100%'}}>
    <Nav className="mr-auto ml-auto">
     <h2>awwwards.</h2> 
   
    </Nav>
    <Nav className='' style={{height: '100%'}}>
      <Nav.Link href="#deets" style={{paddingTop: '20px', 
      paddingBottom:'20px',
      backgroundColor: 'white',
      color: '#202121',
      fontSize: '14px',
      fontWeight: 'bold'}}>REGISTER/LOG IN</Nav.Link>



      <Nav.Link eventKey={2} href="#memes" className='sub' style={{
      paddingTop: '20px', 
      paddingBottom:'20px',
      backgroundColor: '#49c5b6',
      color: '#fff',
      fontSize: '14px'}}>
       SUBMIT YOUR SITE
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>      
</Navbar>
    );
};
export default TopNavBar2;
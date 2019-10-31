import React from 'react';

const SideNav = ({ widthLength, toggle }) => {

return ( 
<div id="mySidenav" class="sidenav"  style={ widthLength ? { width:'0px'} : {width:'250px'} } >
  <a class="closebtn" 
  style={{cursor:'pointer'}}
  onClick={toggle}>&times;</a>
  <a href="#">Register/Log in</a>
  <a href="#">Home</a>
  <a href="#">Winners</a>
  <a href="#">Collection</a>
</div>
    );
};
export default SideNav;
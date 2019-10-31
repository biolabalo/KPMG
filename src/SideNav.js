import React from 'react';

const SideNav = ({ widthLength, update }) => {

return ( 
<div id="mySidenav" class="sidenav"  style={ widthLength ? { width:'0px'} : {width:'150px'} } >
  <a class="closebtn" onClick={update}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
    );
};
export default SideNav;
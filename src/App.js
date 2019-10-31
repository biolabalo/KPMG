import React, { useState } from 'react';
import { Navbar }  from  'react-bootstrap'
import  TopNavBar from './TopNavbar'
import TopNavBar2 from './TopNavBar2';
import ImageSection from './ImageSection';
import CardSection from './CardSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <TopNavBar/>
    <TopNavBar2/>
    <ImageSection/>
    <CardSection/>
    <Footer/>
    </div>
  );
}

export default App;

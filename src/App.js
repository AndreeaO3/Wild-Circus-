import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Performances from './components/Performances'
import AboutUs from './components/AboutUs'
import Prices from './components/Prices'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

{/* <div class="curtain -left"></div>
<div class="curtain -right"></div>

<div class="open">Toggle curtains</div> */}
      <NavBar/>
      <Performances/>
      <AboutUs/>
      <Prices/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;

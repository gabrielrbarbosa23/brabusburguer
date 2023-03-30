import React from 'react';

import { AboutUs, Header, } from './container';
import { Navbar } from './components';
import './App.css';
import ProductSlider from './ProductSlider';
import Cartmenu from './Cartmenu';
import Footer from './Footer';




function App () {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <ProductSlider />
      <Cartmenu />
      <Footer />
    </div>
  );
}

export default App;

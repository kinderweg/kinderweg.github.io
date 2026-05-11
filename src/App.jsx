import React, { useState } from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'

import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Programs from './components/Programs'
import Servies from './components/Servies'

function App() {
 
  return (
    <div>
     <Header  />
        <HomeSection/>
        <Programs/>
        <Servies/>
        <GallerySection/>
        <ContactUs/>

        <Footer/>
      
    </div>
  )
}

export default App
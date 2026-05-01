import React, { useState } from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import Preloader from './components/Preloader'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

function App() {
  const [isLoading,setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);
  return (
    <div>
      { isLoading? <Preloader/>
      :
      <div>
        <Header />
        <HomeSection/>
        <GallerySection/>
        <ContactUs/>
        <Footer/>
      </div>}
    </div>
  )
}

export default App
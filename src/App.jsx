import React from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'

import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Programs from './components/Programs'
import Servies from './components/Servies'

function App() {
 
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 md:pt-24">
        <HomeSection />
        <Programs />
        <Servies />
        <GallerySection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
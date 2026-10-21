import React from 'react'
import {  FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'


function Footer() {
  return (
    <>
     <div className="left-0 w-full mb-0 mt-0 overflow-hidden leading-none">
    <svg
      viewBox="0 0 500 80"
      preserveAspectRatio="none"
      className="w-full h-20"
    >
      <path
        d="M0,30 C100,80 200,0 300,30 C400,60 450,10 500,30 L500,80 L0,80 Z"
        className="fill-[#c45d26]"
      ></path>
    </svg>
    </div>
    
<div className='bg-[#c45d26] px-6 md:grid grid-cols-3 md:gap-10 py-6 text-white items-start'>

  {/* About */}
  <div>
    <img src="/PNGLOGO.png" width="150px" alt="logo" className="mb-3" />
    <h4 className='font-bold mb-2'>ABOUT US</h4>
    <p className='text-justify text-sm leading-relaxed opacity-90'>
      Kinderweg Montessori is a joyful learning space where children grow through
      creativity, care, and playful exploration in a safe and nurturing environment.
    </p>
  </div>

  {/* Quick Links */}
  <div>
    <h4 className='font-bold mb-2 mt-3 '>QUICK LINKS</h4>
    <ul className='flex flex-col gap-2'>
      <li><a href='#home' className='text-sm hover:underline opacity-90 hover:opacity-100'>Home</a></li>
      <li><a href='#programs' className='text-sm hover:underline opacity-90 hover:opacity-100'>Programs</a></li>
      <li><a href='#gallery' className='text-sm hover:underline opacity-90 hover:opacity-100'>Gallery</a></li>
      <li><a href='#facilty' className='text-sm hover:underline opacity-90 hover:opacity-100'>Services</a></li>
      <li><a href='#contact' className='text-sm hover:underline opacity-90 hover:opacity-100'>Connect Us</a></li>
    </ul>
  </div>

  {/* Follow Us */}
  <div>
    <h4 className='font-bold mb-2 mt-3'>FOLLOW US</h4>
    <p className='text-sm mb-4 opacity-85'>Let us be social</p>
    <div className='flex flex-col gap-3'>
      <a href='#' className='flex items-center gap-2 text-sm hover:underline opacity-90 hover:opacity-100'>
        <FaFacebook size={18} /> Facebook
      </a>
      <a href='#' className='flex items-center gap-2 text-sm hover:underline opacity-90 hover:opacity-100'>
        <FaInstagram size={18} /> Instagram
      </a>
      <a href='#' className='flex items-center gap-2 text-sm hover:underline opacity-90 hover:opacity-100'>
        <FaWhatsapp size={18} /> WhatsApp
      </a>
    </div>
  </div>

</div>
    </>
  )
}

export default Footer
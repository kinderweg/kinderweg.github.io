import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa'
function ContactUs() {
  return (
    <div className='contact'>
      <div className='bg-yellow-50 p-5 '>
        <h1 className='text-3xl md:text-4xl font-black text-blue-950 text-center'>Connect with Us</h1>
        <p className='text-sm md:text-lg text-center'>Get in Touch</p>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start p-4'>

  {/* Left: phones + social */}
  <div className='flex flex-col gap-4'>

    {/* Phone numbers */}
    
      <a href='tel:+918848740077'
        className='flex items-center gap-2   px-4 py-2.5 text-sm font-bold '>
        <FaPhone className='shrink-0' /> +91 88487 40077
      </a>
      <a href='tel:+917907976484'
        className='flex items-center gap-2  px-4 py-2.5 text-sm font-bold '>
        <FaPhone className='shrink-0' /> +91 79079 76484
      </a>
    

    {/* Social bubbles */}
    <div className='flex items-center gap-4'>
      {[
        { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', href: 'https://wa.me/918848740077' },
        { icon: <FaInstagram size={22} />, label: 'Instagram', href: '#' },
        { icon: <FaFacebook size={22} />, label: 'Facebook', href: '#' },
      ].map(({ icon, label, href }) => (
        <a key={label} href={href}
          className='flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-full bg-orange-200 border border-orange-400 text-orange-900 text-[10px] font-bold hover:bg-orange-400 hover:scale-110 transition-all duration-200'>
          {icon}
          {label}
        </a>
      ))}
    </div>

  </div>

  {/* Map */}
  <div className=' overflow-hidden   h-64 w-full'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21584.433003112703!2d76.19971269683154!3d10.509160223544681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef0000a2cdf5%3A0x283c1d5a3c89ffce!2sKinderweg%20Montessori%20Preschool%20%26%20Daycare!5e0!3m2!1sen!2sin!4v1778522385338!5m2!1sen!2sin"
      width="100%" height="100%"
      style={{ border: 0 }}
      allowFullScreen loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

</div>
      </div>

    </div>
  )
}

export default ContactUs
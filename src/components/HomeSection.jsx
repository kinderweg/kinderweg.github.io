import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";





function HomeSection() {
  return (
    <div id='home'>
      {/* hero section */}
      <div style={{ height: '500px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-fixed bg-cover bg-center text-white'>

        <div className='flex  justify-center items-center rounded-2xl ' style={{ backgroundColor: 'rgba(24,29,25,0.4)' }}>

          <div className='p-3 text-xl italic text-center'>
            <p >"The greatest gifts we can give </p>
            <p  >our children are the roots of </p>
            <p  >responsibility and the wings of independence"</p>
            <p className='text-end'>-Maria Montessori</p>
          </div>
        </div>
      </div>
      {/* home */}
      <section className="grid md:grid-cols-2 gap-8 px-6 py-10 items-center">

        {/* Text Section */}
        <div className="flex flex-col justify-center">

          <h1 className="text-3xl text-center md:text-start md:text-5xl font-bold leading-tight">
            A Place to <span className="text-pink-600">Learn</span>,
            <span className="text-violet-950"> Play</span>  & <span className="text-teal-600">Grow</span>
          </h1>



          <p className="mt-5 text-gray-700 text-sm md:text-lg leading-relaxed text-center md:text-start">
            We create a joyful and nurturing environment where children
            explore, discover, and grow with confidence through fun,
            creativity, and meaningful learning experiences.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap mt-6">

            <a href='tel:+918848740077' className="flex items-center gap-2 border border-[#c45d26] px-5 py-3 rounded-full text-white font-black  bg-[#c45d26] hover:bg-white hover:text-[#073d5c]  transition">
              <FaPhone />
              Schedule A Visit
            </a>

            <a href='tel:+918848740077'  className="flex items-center gap-2 border border-[#c45d26] px-5 py-3 rounded-full bg-white font-black text-[#073d5c] hover:bg-[#c45d26] hover:text-white transition">
              <CiHeart />
              Join Our Family
            </a>

          </div>

        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="w-72 md:w-96 p-4"
            src="/montesLogo.png"
            alt="school logo"
          />
        </div>

      </section>
      <div className='bg-yellow-50 items-center'>
        <h1 className='text-3xl md:text-4xl font-black text-center text-blue-950 pt-8 pb-2'>About Us</h1>
        <div className="grid md:grid-cols-2 gap-8 bg-yellow-50 px-6  items-center">
          <p className='text-sm md:text-lg text-center'>Kinderweg Montessori provides a joyful and child-friendly learning environment where every child is encouraged to explore, learn, and grow with confidence. Our integrated curriculum combines Montessori methods with traditional teaching techniques to create meaningful learning experiences. Through child-centric activities, thematic learning, and the British Play Way approach, we help children develop creativity, communication, independence, and a love for learning in a safe and caring atmosphere.</p>
         <div className='p-4'>
          <img src="/landing2.jpeg" className='rounded ' alt="photo" />
        </div>
         
        </div>
        
      </div>
      <div>
        
      </div>


<section>

</section>




      </div>
      )
}

      export default HomeSection
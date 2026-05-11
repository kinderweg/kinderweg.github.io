import React from 'react'
import child1 from "../assets/child1.jpg";
import summercamp from "../assets/summercamp.jpg";
import afterschool from "../assets/afterschool.png";
import senior from "../assets/senior.png";
import child2 from "../assets/child2.png";

function Programs() {
  return (
      <section id='programs'>
            <div className='grid text-center my-5 items-center justify center'>
              <h1 className='text-3xl md:text-4xl font-bold text-blue-950'>Pre School Programs</h1>
              <p className='text-sm md:text-lg mt-3'>Engaging and age-appropriate programs designed to inspire curiosity, creativity, confidence, and joyful learning in every child.</p>
      
            </div>
            <div className='grid grid-cols-1  md:grid-rows-2 gap-2  place-items-center '>
              <div className='md:grid grid-cols-3 gap-2'>
                <div className="bg-white m-2 rounded-3xl  p-5 w-72 shadow-lg hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] transition">
        
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={child1}
                      alt="program"
                      className="w-40 h-40 rounded-full object-cover border-4 border-pink-200"
                    />
                  </div>
        
                  {/* Heading */}
                  <h1 className="text-2xl font-bold text-center mt-5 ">
                    Play Group Nursery
                  </h1>
                  <p className='text-red-600  font-semibold text-center'>Child Centric</p>
                  <p className='text-sm text-green-900 font-semibold text-center '>Time: <span className='text-orange-500'>9AM to 1.30PM </span></p>
        
        
                  {/* Age */}
                  <p className="text-center text-blue-600 mt-2 text-lg">
                    Age: 3-4 Years
                  </p>
        
                </div>
        
                <div className="bg-white m-2 rounded-3xl shadow-lg hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] p-5 w-72  transition">
        
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={child2}
                      alt="program"
                      className="w-40 h-40 rounded-full object-cover border-4 border-pink-200"
                    />
                  </div>
        
                  {/* Heading */}
                  <h1 className="text-2xl font-bold text-center mt-5 ">
                    Junior KG
                  </h1>
                  <p className='text-red-600  font-semibold text-center'>Integrated Curriculum</p>
                  <p className='text-sm text-green-900 font-semibold text-center '>Time: <span className='text-orange-500'>9AM to 1.30PM </span></p>
                  {/* Age */}
                  <p className="text-center text-blue-600 mt-2 text-lg">
                    Age: 4-5 Years
                  </p>
        
                </div>
                <div className="bg-white m-2 rounded-3xl  p-5 w-72 shadow-lg hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] transition">
        
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={senior}
                      alt="program"
                      className="w-40 h-40 rounded-full object-cover border-4 border-pink-200"
                    />
                  </div>
        
                  {/* Heading */}
                  <h1 className="text-2xl font-bold text-center mt-5 ">
                    Senior KG
                  </h1>
                  <p className='text-red-600  font-semibold text-center'>Integrated Curriculum</p>
                  <p className='text-sm text-green-900 font-semibold text-center '>Time: <span className='text-orange-500'>9AM to 1.30PM </span></p>
                  {/* Age */}
        
                  
                  <p className="text-center text-blue-600 mt-2 text-lg">
                    Age: 5-6 Years
                  </p>
        
                </div>
              </div>
             
             
             <div className='md:grid grid-cols-2 gap-2'>
                <div className="bg-white m-2 rounded-3xl p-5 w-72  shadow-lg hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] transition">
        
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={afterschool}
                      alt="program"
                      className="w-40 h-40 rounded-full object-cover border-4 border-pink-200"
                    />
                  </div>
        
                  {/* Heading */}
                  <h1 className="text-2xl font-bold text-center mt-5 ">
                    After School Care
                  </h1>
        
                  <p className='text-red-600  font-semibold text-center'>British Play way</p>
                  <p className='text-sm text-green-900 font-semibold text-center '>Time: <span className='text-orange-500'>9AM to 1.30PM </span></p>
             
        
                  {/* Age */}
                  <p className="text-center text-blue-600 mt-2 text-lg">
                    Age: 3-6 years
                  </p>
        
                </div>
                <div className="bg-white m-2 rounded-3xl  p-5 w-72 shadow-lg hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] transition">
        
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={summercamp}
                      alt="program"
                      className="w-40 h-40 rounded-full object-cover border-4 border-pink-200"
                    />
                  </div>
        
                  {/* Heading */}
                  <h1 className="text-2xl font-bold text-center mt-5 ">
                    Summer Camp
                  </h1>
                  <p className='text-pink-600  font-semibold text-center'>April and May</p>
                  <p className='text-sm text-green-900 font-semibold text-center'>Monday to Friday</p>
        
                  {/* Age */}
                  <p className="text-center text-blue-600 mt-2 text-lg">
                    Age: 3-12 Years
                  </p>
        
                </div>
             </div>
            </div>
          </section>
  )
}

export default Programs
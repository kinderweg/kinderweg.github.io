import React from 'react'
import { FaSchool } from "react-icons/fa";
import { TbHorseToy } from "react-icons/tb";
import { LuCctv } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
function Servies() {
    return (
        <section id='facility'>
            <div className='bg-yellow-50 mt-6'>
                <h1 className='text-3xl md:text-4xl font-bold text-blue-950 text-center pt-8'>Our Facilties And Services</h1>
                <p className='text-sm md:text-lg text-center p-3'>Safe, comfortable, and child-friendly spaces designed to support joyful learning and everyday growth.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-2 '>
                    <div className="flex justify-center items-center p-8">
                        <div className="
    w-40 h-40 rounded-full
    bg-blue-100 border-2 border-blue-300
    flex flex-col items-center justify-center gap-1.5
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:bg-blue-900 hover:border-blue-900 hover:scale-110
    group
  ">
                            <FaSchool className="text-3xl text-blue-800 group-hover:text-blue-300 transition-colors duration-300" />
                            <h1 className="text-sm font-extrabold text-center text-blue-900 group-hover:text-white transition-colors duration-300 px-3 leading-tight">
                                Montessori Lab
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-8">
                        <div className="
    w-40 h-40 rounded-full
    bg-pink-100 border-2 border-pink-300
    flex flex-col items-center justify-center gap-1.5
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:bg-pink-900 hover:border-pink-900 hover:scale-110
    group
  ">
                            <TbHorseToy className="text-3xl text-pink-800 group-hover:text-pink-300 transition-colors duration-300" />
                            <h1 className="text-sm font-extrabold text-center text-pink-900 group-hover:text-white transition-colors duration-300 px-3 leading-tight">
                                Indoor and Outdoor Play area
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-8">
                        <div className="
    w-40 h-40 rounded-full
    bg-teal-100 border-2 border-teal-300
    flex flex-col items-center justify-center gap-1.5
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:bg-teal-900 hover:border-teal-900 hover:scale-110
    group
  ">
                            <LuCctv className="text-3xl text-teal-800 group-hover:text-teal-300 transition-colors duration-300" />
                            <h1 className="text-sm font-extrabold text-center text-teal-900 group-hover:text-white transition-colors duration-300 px-3 leading-tight">
                                CCTV Surveillance
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-8">
                        <div className="
    w-40 h-40 rounded-full
    bg-green-100 border-2 border-green-300
    flex flex-col items-center justify-center gap-1.5
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:bg-green-900 hover:border-green-900 hover:scale-110
    group
  ">
                            <MdOutlinePeopleAlt className="text-3xl text-green-800 group-hover:text-green-300 transition-colors duration-300" />
                            <h1 className="text-sm font-extrabold text-center text-green-900 group-hover:text-white transition-colors duration-300 px-3 leading-tight">
                               Trained Teachers and Caring Staffs
                            </h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Servies
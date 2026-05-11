import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Header() {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <div
        style={{ backgroundColor: "#c45d26" }}
        className="flex  justify-between items-center w-full  text-white fixed"
      >
        {/* Logo Section */}
        <div className="flex ">
          <img
            width="80px"
            height="70px"
            src="/iconPNG.png"
            className="p-2 hover:drop-shadow-lg"
            alt="logo"
          />
          <div className="grid p-3 mt-2">
            <h1 className="text-white font-bold text-2xl leading-none">
              Kinderweg{" "}
              <span className="text-xl md:text-2xl">Montessori</span>
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="p-3 hidden md:flex justify-center items-center">
          <ul className="flex">
            <a href='#home' className="p-3 text-xl cursor-pointer  hover:text-gray-300">Home</a>
            <a href='#programs' className="p-3 text-xl  hover:text-gray-300 cursor-pointer">Programs</a>
            <a href='#gallery' className="p-3 text-xl  hover:text-gray-300 cursor-pointer">Gallery</a>
            <a href='#contact' className="p-3 text-xl  hover:text-gray-300 cursor-pointer">Connect Us</a>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-4">
          <button onClick={() => setClicked(!clicked)}>
            {!clicked ? (
              <FaBars className="text-2xl" />
            ) : (
              <FaX className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-[#c45d26] md:hidden z-50
  transition-all duration-700 ease-in-out
  ${clicked ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <ul className="flex flex-col items-center text-white py-4">
            <a href='#home' className="p-3 text-xl cursor-pointer hover:text-gray-300 border-b border-white/40">
              Home
            </a>

            <a href='#programs' className="p-3 text-xl cursor-pointer hover:text-gray-300 border-b border-white/40">
              Programs
            </a>
            <a href='#facility' className="p-3 text-xl cursor-pointer hover:text-gray-300 border-b border-white/40">
             Facilities
            </a>

            <a href='#gallery' className="p-3 text-xl cursor-pointer hover:text-gray-300 border-b border-white/40">
              Gallery
            </a>

            <a href='#contact' className="p-3 text-xl cursor-pointer hover:text-gray-300 border-b border-white/40">
              Connect Us
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
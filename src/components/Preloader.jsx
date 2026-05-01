import React from 'react'

function Preloader() {
  return (
    <div  style={{backgroundColor:'#c8e6f7'}} className='flex items-center justify-center min-h-screen  '>
        <h1 className='text-4xl md:text-6xl font-bold font-heading animate-glow'>Kinderweg</h1>
        <style>
  {`
    @keyframes glowText {
      0% {
        opacity: 0.3;
        color: #93c5fd;
        text-shadow: 0 0 5px rgba(147,197,253,0.2);
      }
      50% {
        opacity: 0.7;
        color: #3b82f6;
        text-shadow: 0 0 15px rgba(59,130,246,0.4);
      }
      100% {
        opacity: 1;
        color: #1e3a8a;
        text-shadow: 0 0 25px rgba(30,58,138,0.8);
      }
    }

    .animate-glow {
      animation: glowText 2s ease-in-out infinite alternate;
    }
  `}
</style>
        </div>
  )
}

export default Preloader
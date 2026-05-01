import React from 'react'

function HomeSection() {
  return (
    <div id='home'>
    {/* hero section */}
    <div style={{ height: '500px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-fixed bg-cover bg-center text-white'>
    <div className='flex  justify-center items-center rounded-2xl ' style={{backgroundColor:'rgba(24,29,25,0.4)'}}>
      <div className='p-3 text-xl italic text-center'>
        <p >"The greatest gifts we can give </p>
        <p  >our children are the roots of </p>
        <p  >responsibility and the wings of independence"</p>
        <p className='text-end'>-Maria Montessori</p>
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default HomeSection
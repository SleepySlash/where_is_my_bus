import React from 'react'
import hero from '@/public/hero.png'
import Image from 'next/image'
const Hero = () => {
  return (
    < >
      <div 
        className='flex flex-row justify-center items-center w-full pt-16'
      >
        <Image
            src={hero} 
            alt='hero'
            className='w-full h-[68vh] object-cover'
        />
      </div>

      <div
        className=' flex flox-col justify-center items-start pt-5 font-extrabold text-4xl bg-grey w-full h-44  '
      >
        <div className='group'>
          <span className='text-indigo-800'> Where is </span>
          <span className='text-indigo-800 text-7xl group-hover:text-amber-400' style={{transform: 'rotate(-45deg)'}}> ? </span>

          <div className='flex'>
            <span className=' text-indigo-800'> my </span>
            <span className='text-indigo-800 text-7xl group-hover:text-amber-400'> BUS </span>
          </div>
        </div>
    
      </div>

    </>
  )
}

export default Hero

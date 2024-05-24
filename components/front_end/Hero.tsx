import React from 'react'
import hero from '@/public/hero.png'
import Image from 'next/image'
import { Button } from '../ui/button'
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

      <div className=' flex flex-col justify-center items-center pt-8 font-extrabold text-4xl bg-grey w-full h-64 '>
        <div className='group flex flex-col'>
          
          <div className="flex">
            <span className='text-violetBlue'> Where is </span>

            <span className='px-5 transform rotate-45 text-violetBlue text-7xl group-hover:text-yellowDark  relative bottom-5 ' style={{transform: 'rotate(-45deg) '}}> ? </span> 
          </div>

          <div className='flex relative bottom-10'>
            <span className=' text-violetBlue'> my </span>
            <span className='text-violetBlue text-7xl group-hover:text-yellowDark'> BUS </span>
          </div>

        </div>   

        <Button className='' >
          <span className='' >Track Buses</span>
        </Button>

      </div>

    </>
  )
}

export default Hero

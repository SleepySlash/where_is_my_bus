import React from 'react'
import hero from '@/public/hero.png'
import Image from 'next/image'
import { Button } from '../ui/button'
import location from '@/public/location.svg'
import arrow_down from '@/public/arrow_down.svg'
import {Jua,Manrope} from '@next/font/google'
import { cn } from '@/lib/utils'

const jua = Jua({
  weight: "400",
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: "400",
  subsets: ['latin'],
});


const Hero = () => {
  return (
    < >
      <div className='flex flex-row justify-center items-center w-full pt-16 '>
        <Image
            src={hero} 
            alt='hero'
            className='w-full h-[68vh] object-cover'
        />
      </div>

      <div className="flex flex-col justify-start items-center pt-8 font-extrabold text-5xl bg-grey w-full h-96" >

        <div className={cn("group flex flex-col  text-violetBlue",jua.className )}>
          
          <div className="flex ">
            <span> Where is </span>
            <span className=  ' transform rotate-45 font-medium text-7xl group-hover:text-yellowDark relative bottom-5  ' style={{transform: 'rotate(-35deg) '}}> ? </span> 
          </div>

          <div className='flex relative bottom-10'>
            <span> my </span>
            <span className=' text-8xl pt-1 font-normal group-hover:text-yellowDark'> BUS </span>
          </div>

        </div>    

        <div className={ cn('flex flex-col justify-center items-center relative bottom-7 ',  manrope.className) } >
          <Button variant="outline" className=" bg-yellowDark  w-80  gap-1 shadow-lg border-neutral-950 h-[3rem]" >
            <Image src={location} alt='location_marker' className='size-6 pt-1 mb-0.5' />
            <span className='text-2xl font-semibold' >Track Buses</span>
          </Button>

          <div className='flex flex-row gap-2'>
            <Image src={arrow_down} alt="arrowdown" className='object-contain size-4 mt-2 ' />
            <span className='text-xl text-center font-semibold underline ' >Know More</span>
          </div>
        </div>

      </div>

    </>
  )
}

export default Hero

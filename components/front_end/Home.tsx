import React from 'react'
import {Jua,Manrope} from "next/font/google"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/public/logo.svg'

const jua = Jua({
  weight: "400",
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: "400",
  subsets: ['latin'],
});


const Home = () => {
  return (
    <>
       <div className='flex flex-col justify-start items-center h-[23.1em] w-full bg-yellowLight px-2'>
        <span className={cn("font-semibold text-textGrey text-[1.375rem] pr-2 mt-[1.25rem]", jua.className)}>Welcome to</span>
        <div className='flex flex-col justify-center text-justify ' >
          <span className={cn("font-extrabold text-violetBlue text-4xl pr-[-0.3rem] mt-[-0.3rem]", jua.className)}>Where is my bus?</span>
        </div>

        <div className='flex flex-col items-center justify-center p-4 text-justify '>
          <p className='max-w-full tracking-[-0.035em] text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Your ultimate companion for hassle-free college commutes! Designed with students in mind, our progressive web application provides real-time tracking for college buses, ensuring you never miss a ride. Join us and experience the convenience of knowing exactly where your bus is, every step of the way!</p>
        </div>

        <Image src={logo} alt='logo' className='mr-1 size-[9.5rem]'/>

    </div>
        
      
    </>
  )
}

export default Home

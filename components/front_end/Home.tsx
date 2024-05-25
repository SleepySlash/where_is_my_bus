import React from 'react'
import {Jua,Manrope} from "next/font/google"
import { cn } from '@/lib/utils'

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
       <div className='flex flex-col justify-start items-center h-[25.4375rem] w-full bg-yellowLight px-5'>
        <span className={cn("font-semibold text-textGrey text-[1.4rem] pr-5 pt-[1.1rem]", jua.className)}>Welcome to</span>
        <span className={cn("font-extrabold text-violetBlue text-4xl pr-3 pb-10 tracking-tight", jua.className)}>Where is my bus?</span>

        <div className='flex flex-col items-center justify-between p-4'>
          <p className='max-w-full break-words text-justify text-sm relative bottom-7 '>
            Your ultimate companion for hassle-free college commutes! Designed with students in mind, our progressive web application provides real-time tracking for college buses, ensuring you never miss a ride. Join us and experience the convenience of knowing exactly where your bus is, every step of the way!
          </p>
        </div>
    </div>
        
      
    </>
  )
}

export default Home

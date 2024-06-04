import React from 'react'
import {Jua,Manrope} from "next/font/google"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import carousel_item1 from '@/public/carousel_item1.png'
import carousel_item2 from '@/public/carousel_item3.png'
import carousel_item3 from '@/public/carousel_item2.png'
import carousel_item4 from '@/public/carousel_item4.png'

import carousel_item1svg from '@/public/carousel_item1.svg'
import carousel_item2svg from '@/public/carousel_item2.svg'
import carousel_item3svg from '@/public/carousel_item3.svg'
import carousel_item4svg from '@/public/carousel_item4.svg'

import {Carousel, CarouselContent, CarouselItem,  CarouselNext,  CarouselPrevious,} from "@/components/ui/carousel"


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
          <span className={cn("font-extrabold text-violetBlue text-4xl pr-[-0.2rem] mt-[-0.3rem]", jua.className)}>Where is my bus?</span>
        </div>

        <div className='flex flex-col items-center justify-center p-4 text-justify '>
          <p className='max-w-full tracking-[-0.035em] text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Your ultimate companion for hassle-free college commutes! Designed with students in mind, our progressive web application provides real-time tracking for college buses, ensuring you never miss a ride. Join us and experience the convenience of knowing exactly where your bus is, every step of the way!</p>
        </div>

        <Image src={logo} alt='logo' className='mr-1 size-[9.5rem]'/>
        

    </div>

    <div className= { cn('flex flex-col items-center max-w-screen-md h-[23.1rem] ')} >
      <span className={cn("text-violetBlue font-extrabold text-[2rem] violetBlue mt-4 ", jua.className)}>Our Features </span>

      
      <Carousel opts={{ loop:true, }}  className={cn('flex flex-row')} >
        <CarouselContent className={cn('flex flex-grow items-center')} >
          
          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item1svg} alt='student' className='w-[183px] h-[183px] mt-[0.9rem] '/>
            </div> 
            
            <p className='w-full p-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our solution is uniquely designed for college students, providing practical and student-focused functionalities that cater to their daily needs and challenges. </p>

          </CarouselItem>

          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item2svg} alt='student' className='w-[183px] h-[183px] mt-[0.9rem] '/>
            </div> 
            
            <p className='w-full p-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our solution is uniquely designed for college students, providing practical and student-focused functionalities that cater to their daily needs and challenges. </p>
          </CarouselItem>

          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item3svg} alt='student' className='w-[183px] h-[183px] mt-[0.8rem] '/>
            </div> 
            
            <p className='w-full p-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our solution is uniquely designed for college students, providing practical and student-focused functionalities that cater to their daily needs and challenges. </p>
          </CarouselItem>

          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item4} alt='student' className='w-[285px] h-[183px] mt-[0.9rem] '/>
            </div> 
            
            <p className='w-full p-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our solution is uniquely designed for college students, providing practical and student-focused functionalities that cater to their daily needs and challenges. </p>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    

    </div>
        
      
    </>
  )
}

export default Home

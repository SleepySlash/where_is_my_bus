import React from 'react';
import hero from '@/public/hero.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import location from '@/public/location.svg';
import arrow_down from '@/public/arrow_down.svg';
import { Jua, Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const jua = Jua({
  weight: '400',
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className='flex flex-row justify-center items-center w-full pt-12'>
        <Image src={hero} alt='hero' className='w-full h-[68vh] object-cover' />
      </div>

      <div className="flex flex-col justify-start relative items-center pt-9 font-extrabold text-justify text-5xl bg-grey w-full h-[20.5rem]">
        <div className={cn('group flex flex-col gap-7 text-violetBlue', jua.className)}>
          <div className="flex">
            <span className='tracking-tighter'> Where</span>
            <span className='tracking-tighter pl-2'> is</span>
            <span className='transform rotate-45 font-medium text-[4.5rem] group-hover:text-yellowDark relative bottom-5' style={{ transform: 'rotate(-35deg)' }}> ? </span>
          </div>

          <div className='flex relative bottom-[4rem]'>
            <span> my </span>
            <span className='text-[4.8rem] pt-1 pl-2 font-normal group-hover:text-yellowDark'> BUS </span>
          </div>
        </div>

        <div className={cn('flex flex-col items-strech relative bottom-14 text-textBlack', manrope.className)}>
          <div className='flex flex-col items-center pr-2'>
            <Link href="/signup" passHref>
              <Button variant="outline" className="bg-yellowDark rounded-lg w-[20.8rem] justify-center items-strech gap-1 shadow-xl border-[1.5px] border-black h-[3.1rem]">
                <Image src={location} alt='location_marker' className='size-6 p-[0.2rem]' />
                <span className='text-customfont_Sm tracking-wide font-semibold'>Track Buses</span>
              </Button>
            </Link>

            <div className='flex flex-row gap-2 mt-1'>
              <Image src={arrow_down} alt="arrowdown" className='object-contain size-4 mt-2' />
              <span className='text-lg text-black text-center font-semibold underline'>Know More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

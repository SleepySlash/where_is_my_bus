import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.svg'
import settings from '@/public/settings.svg'

interface NavbarProps {
    Route?: React.ReactNode,
    BusDetails?: React.ReactNode,
}
const Navbar = ({Route,BusDetails}:NavbarProps) => {
  return (
    <>
        <div className='fixed top-[-2px] left-0 w-full flex justify-between pb-4 items-strech shadow-xl bg-white z-50 '>
            <Link
                href="/"
                className=''
            >
                <Image
                    src={logo}
                    alt='logo'
                    className='cursor-pointer ml-6 h-8 w-8'
                />
            </Link>

            {/* The Route Details will be sent as a React Component*/}
            <span>
                {Route}
            </span>
    
            <Link
                href="/settings"
                className=''
            >
                <Image
                    src={settings}
                    alt='settings'
                    className='mr-5 pt-2 h-8 w-8'
                />
            </Link>

        </div>

        {/* When there Route Details sent they have to be rendered as bar below the navbar  */}
    </>    
  )
}

export default Navbar

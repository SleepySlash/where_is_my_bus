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
        <div 
            className='fixed top-0 left-0 w-full flex justify-between items-strech p-5 shadow-lg bg-white  '
        >
            <Link
                href="/"
                className=''
            >
                <Image
                    src={logo}
                    alt='logo'
                    className='cursor-pointer h-9 w-9'
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
                    className='h-9 w-9'
                />
            </Link>

        </div>

        {/* When there Route Details sent they have to be rendered as bar below the navbar  */}
    </>    
  )
}

export default Navbar

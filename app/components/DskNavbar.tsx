import React from 'react'
import NavbarLinks from './NavbarLinks'
import Image from 'next/image'
export default function DskNavbar() {
  return (
        <div className=' shadow-md e'>
            <div className="lg:flex justify-center gap-4 container mx-auto items-center hidden h-[10vh] 2xl:h-[7vh] bg-whit ">
            <Image width={645} height={640} className="w-20" src="/assets/logo.jpg" alt="logo"/>
            <NavbarLinks/>
        </div>
        </div>
            
  )
}

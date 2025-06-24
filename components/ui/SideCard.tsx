import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import topimage from '../../assets/topcardimg.webp'

function SideCard() {
  return (
    <Link href='#'>
        <div className='articlecard min-w-[300px] max-w-[540px] flex flex-row justify-between mb-[30px]'>
            <Image src={topimage} alt="topcardimg" width={150} height={150} className='mr-[10px]'/>
            <div>
                <div className='w-fit bg-myblue text-mywhite text-[11px] font-[700] font-poppins px-[10px] py-[5px] uppercase mb-[10px]'>
                Technology
                </div>
                <h3 className='font-[600] line-clamp-[2] mb-[15px] underline-lines'>
                    VR Is the Use of Computer Technology to Create a Simulated Environment.
                </h3>
                <div className='text-mygrey text-[14px] lg:text-[14px] font-poppins'>
                    <div className='mr-[10px]'>By Author Name</div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default SideCard

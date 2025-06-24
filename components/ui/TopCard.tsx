import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import topimage from '../../assets/topcardimg.webp'
import { TbActivityHeartbeat } from "react-icons/tb";

function TopCard() {
  return (
    <Link href='#'>
      <div className='min-w-[300px] max-w-[540px]'>
        <div className='relative'>
          <Image src={topimage} alt="topcardimg" width={540} height={540} className='mb-[15px]'/>
          <div className='absolute bottom-[52px] left-0 bg-myblue text-mywhite text-[11px] font-[700] font-poppins px-[10px] py-[5px] uppercase'>Technology</div>
        </div>
        <div>
          <h1 className='font-[600] line-clamp-[2] mb-[15px] '>VR Is the Use of Computer Technology to Create a Simulated Environment.</h1>
          <div className='text-mygrey text-[14px] lg:text-[14px] flex flex-row font-poppins'>
            <div className='mr-[10px]'>By Author Name</div>
            <div className='mr-[10px]'>Jun 23 2023</div>
            <div className='flex flex-row items-center'><TbActivityHeartbeat className='mr-[5px]'/>2k Views</div>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default TopCard

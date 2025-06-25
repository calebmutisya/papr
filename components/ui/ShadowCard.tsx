import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import surfer from '../../assets/surfer.webp'

function ShadowCard() {
  return (
    <Link href='#'>
      <div className='relative articlecard min-w-[375px] max-w-[740px] h-[440px] overflow-hidden'>
        {/* Background image */}
        <Image
          src={surfer}
          alt='topcardimg'
          fill
          className='object-cover'
        />

        {/* Black overlay */}
        <div className='absolute inset-0 bg-black opacity-20'></div>

        {/* Text container at the bottom */}
        <div className='absolute bg-translucentblack     bottom-0 w-full p-4'>
          <div className='w-fit bg-myblue text-mywhite text-[11px] font-[700] font-poppins px-[10px] py-[5px] uppercase mb-[10px]'>
            Technology
          </div>
          <div className='font-[600] line-clamp-2  underline-lines text-mywhite'>
            World Travel Holdings Will Be Honored Alongside Other Recipients at the 2023 World Travel Awards.
          </div>
          <div className='mt-[20px] text-[14px] lg:text-[14px] font-poppins text-mywhite'>
            By Author Name
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShadowCard

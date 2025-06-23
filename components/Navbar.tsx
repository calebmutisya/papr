import Image from 'next/image';
import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";


function Navbar() {
  return (
    <header>
        {/* Top Bar */}
        <div className='bg-myblack py-[8px] hidden md:block'>
            <div className='container flex justify-between '>
                <ul className='text-[14px]  text-textlight flex flex-row gap-2'>
                    <li className='mr-[20px] hover:text-mypink transition ease-in duration-300'>
                        {new Date().toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})}
                    </li>
                    <li className='mr-[20px] hover:text-mypink transition ease-in duration-300'>Advertisement</li>
                    <li className='mr-[20px] hover:text-mypink transition ease-in duration-300'>About</li>
                    <li className='hover:text-mypink transition ease-in duration-300'>Contact</li>
                </ul>
                <ul className='text-textlight flex flex-row items-center px-[15px] '>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaFacebook size={16}/></li>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaTwitter size={16}/></li>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaInstagram size={16}/></li>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaLinkedin size={16}/></li>
                </ul>
            </div>
        </div>
        <div className=' border-solid border-1  border-b border-textlight'>
            <nav className='container py-[22px] lg:py-[0px] flex justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <Image src="/logo-black.svg" alt="logo" width={102} height={34}/>
                    <ul className='navlinks hidden lg:flex flex-row items-center pl-[44px] '>
                        <li className='font-[500] mr-[34px] py-[30px] px-[5px] '><span className='hover:underline-animate'>Home</span></li>
                        <li className='font-[500] mr-[34px] py-[30px] px-[5px]'><span className='hover:underline-animate'>Fashion</span></li>
                        <li className='font-[500] mr-[34px] py-[30px] px-[5px]'><span className='hover:underline-animate'>Lifestyle</span></li>
                        <li className='font-[500] mr-[34px] py-[30px] px-[5px]'><span className='hover:underline-animate'>Technology</span></li>
                        <li className='font-[500] mr-[34px] py-[30px] px-[5px]'><span className='hover:underline-animate'>Sports</span></li>
                    </ul>
                </div>
                
                <div className='flex flex-row items-center'>
                    <CiSearch size={24} className='mr-[20px] cursor-pointer hover:text-mypink'/>
                    <div className='py-[8px] px-[10px] hover:bg-mylightgrey transition ease-in duration-300 cursor-pointer rounded-full'>
                        <CiMenuBurger size={24} />
                    </div>   
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar

"use client"
import Image from 'next/image';
import React, {useState} from 'react'
import Link from 'next/link';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar() {

    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);

    function toggleSearchBox() {
        setOpenSearchBox(!openSearchBox);
    }

    function toggleSideBar() {
        setOpenSideBar(!openSideBar);
    }

  return (
    <div>
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
                    <ul className='text-mywhite flex flex-row items-center px-[15px] '>
                        <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaFacebook size={16}/></li>
                        <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaTwitter size={16}/></li>
                        <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaInstagram size={16}/></li>
                        <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaLinkedin size={16}/></li>
                    </ul>
                </div>
            </div>
            <div className=' border-solid border-1  border-b border-textlight'>
                <div className='relative'>
                    <nav className='container  py-[22px] lg:py-[0px] flex justify-between items-center'>
                        <div className='flex flex-row items-center'>
                            <Link href="/">
                                <Image src="/logo-black.svg" alt="logo" width={102} height={34}/>
                            </Link>
                            <ul className='navlinks hidden lg:flex flex-row items-center pl-[44px] '>
                                <li className='font-[500] mr-[34px] py-[30px] px-[5px] '>
                                    <Link href="/" className='hover:underline-animate'>
                                        Home
                                    </Link>
                                </li>
                                <li className='font-[500] mr-[34px] py-[30px] px-[5px]'>
                                    <Link href="/category/fashion" className='hover:underline-animate'>
                                        Fashion
                                    </Link>
                                </li>
                                <li className='font-[500] mr-[34px] py-[30px] px-[5px]'>
                                    <Link href="/category/lifestyle" className='hover:underline-animate'>
                                        Lifestyle
                                    </Link>
                                </li>
                                <li className='font-[500] mr-[34px] py-[30px] px-[5px]'>
                                    <Link href="/category/technology" className='hover:underline-animate'>
                                        Technology
                                    </Link>
                                </li>
                                <li className='font-[500] mr-[34px] py-[30px] px-[5px]'>
                                    <Link href="/category/sports" className='hover:underline-animate'>
                                        Sports
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='flex flex-row items-center'>
                            <CiSearch size={24} className='mr-[20px] cursor-pointer hover:text-mypink' onClick={toggleSearchBox}/>
                            <div className='lg:hidden py-[8px] px-[10px] hover:bg-mylightgrey transition ease-in duration-300 cursor-pointer rounded-full' onClick={toggleSideBar}>
                                <CiMenuBurger size={24} />
                            </div>   
                        </div>
                    </nav>
                    
                    {/* Search Box */}
                    <div
                    className={`absolute top-0 left-0 w-full bg-mylightgrey py-[21px] z-10 transition-all duration-600 ${
                        openSearchBox ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                    >
                        <div className='container flex flex-row items-center'>
                            <input
                            placeholder='Search Here ..'
                            className='w-full py-[10px] px-[20px] text-[14px] outline-none border-b-1 border-myblack hover:border-mypink'
                            />
                            <div className='mr-[20px]'>
                            <IoMdClose size={24} className='hover:text-mypink cursor-pointer' onClick={toggleSearchBox} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* Right Side Nav */}
        <div className={`fixed top-0 right-0 z-50 bg-mywhite min-w-[300px] max-w-[450px] min-h-screen p-5 border-l-1 border-r-1 border-b-1 border-textlight transition-all duration-600 ${ openSideBar ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
            <div className='flex flex-col justify-center '>
                <div className='flex flex-row items-center justify-between'>
                    <Link href="/">
                        <Image src="/logo-black.svg" alt="logo" width={102} height={34}/>
                    </Link>
                    <div className='py-[8px] px-[10px] w-fit bg-mylightgrey rounded-[100px]'>
                        <IoMdClose size={24} className='hover:text-mypink cursor-pointer' onClick={toggleSideBar} />
                    </div>
                </div>
                <ul className='navlinks flex flex-col justify-center mt-[30px] pl-[10px] '>
                    <li className='font-[500] mr-[34px] py-[5px] px-[5px] '>
                        <Link href="/" className='hover:underline-animate'>
                            Home
                        </Link>
                    </li>
                    <li className='font-[500] mr-[34px] py-[5px] px-[5px]'>
                        <Link href="/category/fashion" className='hover:underline-animate'>
                            Fashion
                        </Link>
                    </li>
                    <li className='font-[500] mr-[34px] py-[5px] px-[5px]'>
                        <Link href="/category/lifestyle" className='hover:underline-animate'>
                            Lifestyle
                        </Link>
                    </li>
                    <li className='font-[500] mr-[34px] py-[5px] px-[5px]'>
                        <Link href="/category/technology" className='hover:underline-animate'>
                            Technology
                        </Link>
                    </li>
                    <li className='font-[500] mr-[34px] py-[5px] px-[5px]'>
                        <Link href="/category/sports" className='hover:underline-animate'>
                            Sports
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='mt-[50px]'>
                <h4 className='pb-[10px] font-[600]'>Contact Information</h4>
                <div className='pb-[30px] text-[14px] text-mygrey'>
                    <div>Publisher Towers, 3rd Floor</div>
                    <div>Nairobi,Kenya</div>
                </div>
            </div>
            <div>
                <h4 className='pb-[10px] font-[600]'>We're Available 24/7. Call Now.</h4>
                <div className='pb-[30px] text-[14px] text-mygrey'>
                    <div>Publisher Towers, 3rd Floor</div>
                    <div>Nairobi,Kenya</div>
                </div>
            </div>
            <div>
                <h4 className='pb-[10px] font-[600]'>Follow Us :</h4>
                <ul className='text-myblack flex flex-row items-center px-[5px] '>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaFacebook size={20}/></li>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaTwitter size={20}/></li>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaInstagram size={20}/></li>
                    <li className='ml-[20px] p-[5px] hover:text-mypink transition ease-in duration-300'><FaLinkedin size={20}/></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar

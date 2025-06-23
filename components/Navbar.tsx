import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";

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
        
      Navbar
    </header>
  )
}

export default Navbar

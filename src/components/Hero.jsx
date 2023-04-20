import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className="flex flex-col">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'>
            </div>
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#5e419c]'>Danny</span> </h1>
            <p className={`${styles.heroSubText} mt-2 text-white block sm:hidden`}>Hi..! I'm a fullstack <br /> developer. See me.</p>
            <p className={`${styles.heroSubText} hidden sm:block mt-2 text-white `}>I develop web systems, <br /> mobile applications, APIs and I can work as IT Support </p>
            <div className='flex gap-4 mt-7'>
              <span className="bg-[#5e419c] p-2 text-xs text-white"><Facebook /></span>
              <span className="bg-[#5e419c] p-2 text-xs text-white"><Linkedin /></span>
              <span className="bg-[#5e419c] p-2 text-xs text-white"><Mail /></span>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Hero
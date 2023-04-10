import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
          </div>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#5e419c]'>Danny</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white block sm:hidden`}>I'm a professional <br /> developer</p>
          <p className={`${styles.heroSubText} hidden sm:block mt-2 text-white `}>I develop web systems, <br /> mobile applications, APIs and I can work as IT Support </p>
        </div>
      </div>
    </section >
  )
}

export default Hero
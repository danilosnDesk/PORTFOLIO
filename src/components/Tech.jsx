import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'



const Tech = () => {
  return (
    <div className='flex items-center flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 bg-slate-700 flex justify-center items-center rounded' key={technology.name}>
          <img src={technology.icon} alt={technology.name} className='w-8/12' />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
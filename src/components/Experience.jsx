import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { experiences } from '../constants'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion'


import 'react-vertical-timeline-component/style.min.css';


const ExpericeCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1d1d', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1d1d1d' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div className=''>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2 mb-2'>
      {experience.points.map((Eachpoint, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-tighter'>
          {Eachpoint}
        </li>
      ))}
    </ul>

    <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.date}</p>



  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WhatI heve done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>



      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExpericeCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>
    </>


  )
}

export default SectionWrapper(Experience, "work")
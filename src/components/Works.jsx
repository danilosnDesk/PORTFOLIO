import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute flex justify-end m-0 inset-0  card-img_hover'>
            <div onClick={() => window.open(source_code_link, "__blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='object-contain w-1/2 h-1/2' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-row gap-2'>
          {tags.map((tag) => (
            <p key={`tag-${tag.name}`} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.heroSubText}>My works</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore explicabo eos nam aliquid accusantium perferendis possimus nulla, accusamus minus, fuga corporis porro? Iusto voluptas expedita, atque quidem consectetur voluptatum?
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}

          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
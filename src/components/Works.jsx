import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const projectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (

    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-360px w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
      >
        <div className='relative w-full h-[250px]'>

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
          <projectCard
            key={`project-${index}`}
            index={index}
            {...project}

          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
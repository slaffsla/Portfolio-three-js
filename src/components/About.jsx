import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles} from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper} from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5* index, 0.74)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt ={title} className="w-16 h-16"/>
          <h3 className="text-white text-[20px] front-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.3, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[29px]">
    I am a self-tought software developer with experience in JS, TypeScript, React, Redux, React Native, Node.js, Three.js, Firebase, TailwindCSS, Framer Motion and more. I am a quick learner and can pick up a skill when needed. This is my personal site where you can look into my accomplishments, skills and charisma, so that you're left without many options, other than hire me before i'm snatched. Let's build stuff together!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-8 justify-center' >
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
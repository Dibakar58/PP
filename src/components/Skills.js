import React from 'react';
import {motion} from 'framer-motion'


const Skill = ({name,x,y}) => {
return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
      
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y,transition:{duration:1.5} }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>

)
}

const Skills = () => {
  return (
<>
<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills
</h2>

    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-cicularLightLg lg:dark:bg-circularDarkLg
        md:bg-cicularLightMd md:dark:bg-circularDarkMd

            sm:bg-cicularLightSm sm:dark:bg-circularDarkSm

    '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer   dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'

        whileHover={{scale:1.05}}
        >

        </motion.div>
        <Skill name="Python" x="-15vw" y="-6vw" />
        <Skill name="SQL" x="15vw" y="-5vw" />
        <Skill name="PL/SQL" x="-20vw" y="5vw" />
        <Skill name="Machine Learning" x="20vw" y="-15vw" />
        <Skill name="Deep Learning" x="-15vw" y="-15vw" />
        <Skill name="Azure Data Factory" x="15vw" y="5vw" />
        <Skill name="PowerBI" x="-10vw" y="10vw" />
        <Skill name="Figma" x="10vw" y="10vw" />
        <Skill name="Product Lifecycle Management" x="-25vw" y="-2vw" />
        <Skill name="User Research" x="25vw" y="-2vw" />
        <Skill name="Stakeholder Management" x="-30vw" y="8vw" />
        <Skill name="Metrics Analysis" x="30vw" y="8vw" />
        <Skill name="A/B Testing" x="-35vw" y="15vw" />
        <Skill name="Feature Prioritization" x="35vw" y="15vw" />
        <Skill name="Market Sizing" x="-25vw" y="20vw" />
        <Skill name="Competitor Analysis" x="25vw" y="20vw" />
        <Skill name="Design Thinking" x="-20vw" y="-10vw" />
        <Skill name="Product Strategy" x="20vw" y="-10vw" />
        <Skill name="OKRs & KPIs Tracking" x="-15vw" y="25vw" />
        <Skill name="Go-to-Market Strategy" x="15vw" y="25vw" />
        <Skill name="Jobs To Be Done" x="0vw" y="18vw" />
        <Skill name="Data Analysis" x="-20vw" y="-20vw" />
        <Skill name="Customer Journey Mapping" x="20vw" y="-20vw" />
        <Skill name="Wireframing" x="0vw" y="-19vw" />
    </div>
    
</>
  )

} 

export default Skills;

import React, { useRef } from 'react';
import { motion,useScroll } from 'framer-motion';
import { userAgent } from 'next/server';
import Lilcon from './Lilcon';

const Details =({type,time,place,info}) => {
    const ref= useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <Lilcon reference={ref}/>

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type : "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-lg xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref= useRef(null);
    const {scrollYProgress}= useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Educations
        </h2>
        <div ref ={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
            <motion.div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top  dark:bg-light  md:w-[2px] md:leftt-[30px] xs:left-[20px]'
            
            style={{scaleY: scrollYProgress}}
            />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
  
            <Details
    type="Master of Science in Engineering Management - Data Science Track"
    time="Aug 2024 – May 2026"
    place="Johns Hopkins University"
    info="Current GPA : 3.92  | Relevant coursework includes Data Science, Accounting and Finance, Strategies for Innovation and Growth, and Demand Discovery."
  />
  
  <Details
    type="Bachelor Of Technology in Mechanical Engineering"
    time="Jul 2019 – Jun 2023"
    place="National Institute of Technology, Hamirpur"
    info="Graduated with a GPA of 3.91/4.00."
  />


</ul>

        </div>
    </div>
  );
};

export default Education;

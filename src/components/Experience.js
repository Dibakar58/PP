import React, { useRef } from 'react';
import { motion,useScroll } from 'framer-motion';
import { userAgent } from 'next/server';
import Lilcon from './Lilcon';

const Details =({position,company,companyLink,time,address,work}) => {
    const ref= useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <Lilcon reference={ref}/>

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type : "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-lg xs:text-lg'>
                {position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
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
            Experiences
        </h2>
        <div ref ={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
            <motion.div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:leftt-[30px] xs:left-[20px]
            '
        
            style={{scaleY: scrollYProgress}}
            />
<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
  <Details
    position="Product Manager"
    company="Intripid"
    companyLink="www.intripid.com"
    time="Oct 2024 – Nov 2024"
    address="Baltimore, MD"
    work="Led the development of a real-time travel discovery platform using user-driven Q&A inputs and AI algorithms to deliver personalized travel recommendations, achieving 90% user satisfaction in recommendation accuracy during early testing."
  />
  
  <Details
    position="Product Manager"
    company="Trax Retail"
    companyLink="www.traxretail.com"
    time="Oct 2024 – Nov 2024"
    address="Baltimore, MD"
    work="Spearheaded the development of a go-to-market strategy for the Signal-Based Merchandising (SBM) solution, enabling expansion into three new international markets with a target customer base of 5 million."
  />
  
  <Details
    position="Strategy Consultant"
    company="Johns Hopkins Hospital"
    companyLink="www.jhu.edu"
    time="Aug 2024 – Sept 2024"
    address="Baltimore, MD"
    work="Collaborated with Bayview Medical Center to propose recommendations for reducing bone cement contamination in surgical instruments, projecting a 70% reduction in contamination incidents and $840K annual savings in operational costs."
  />
  
  <Details
    position="Associate Product Manager"
    company="Oracle"
    companyLink="www.oracle.com"
    time="Jun 2023 – Jul 2024"
    address="Bangalore, India"
    work="Led the development of three MVPs for hypothesis testing using A/B tests and success metrics, validating product-market fit. Collaborated with four cross-functional teams to optimize CRM functionality for the secured lending team, delivering an MVP within a quarter and increasing leads to the loan page by 23%. Conducted user funnel analysis, driving an 8% conversion uplift and $1M in additional revenue through A/B testing and BI insights. Partnered with design teams to analyze UX breakpoints, reducing customer drop-off by 13% and improving conversion rates. Redesigned the customer acquisition funnel with predictive risk factor analysis, cutting fraudulent loan applications by 18%. Worked with PM leads to execute Agile-driven roadmaps, achieving a 98% completion rate for consumer loan projects."
  />
  
  
  <Details
    position="Research Intern"
    company="Technische Universität Berlin"
    companyLink="www.tu-berlin.de"
    time="May 2022 – Jul 2022"
    address="Berlin, Germany"
    work="Developed predictive models for PLA continuous fiber-reinforced 3D-printed structures, improving mechanical properties by 16%. Contributed to the creation of the open-source Python package Pyfurc for solving bifurcation problems in elastic stability."
  />
  

</ul>

        </div>
    </div>
  );
};

export default Experience;

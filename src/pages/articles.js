import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icon';
import Layout from '@/components/Layout';
import Head from 'next/head';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Insmed from "../../public/images/projects/Insmed.png"
import M1 from "../../public/images/projects/M1.png"
import Swiggy from "../../public/images/projects/Swiggy.png"
import NF from "../../public/images/projects/NF.png"
import MMT from "../../public/images/projects/MMT.png"
import PRD from "../../public/images/projects/PRD.png"
import Linkedin from "../../public/images/projects/Linkedin.png"
import Snap from "../../public/images/projects/Snap.png"
import AnimatedText from '@/components/AnimatedText';
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg =({title,img,link}) => {

    const x=useMotionValue(0) ;
    const y=useMotionValue(0) ;
    const imgRef = useRef(null) ;

    function handleMouse(event){
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX) ;
        y.set(-10)
    }


    function handleMouseLeave(event){
        imgRef.current.style.display = "none"
        x.set(0) ;
        y.set(0)
    }


return (

    <Link href={link} target='_blank'
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >


    <h2 className="capitalize hover:underline text-xl font-semibold">{title}</h2>
    <FramerImage style={{x:x ,y:y}} initial={{opacity:0}} whileInView={{opacity:1 , transition:{duration : 0.2}}} ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg dark:text-primaryDark md:!hidden' />
  </Link>
)

}

const Article = ({ link, title, date, img }) => {
  return (
    <motion.li 
    
    initial={{y:200}}
    whileInView={{y:0 , transition:{duration:0.5 , ease : "easeInOut"}}}
    viewport={{once: true}}
    className='relative w-full p-4 py-6 rounded-xl flex items-center my-4
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
sm:flex-col
    '>
<MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4  dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl -3xl' />
      <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 text-justify'>{summary}</p>      <span>{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Dibakar | Case Studies</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='"Solutions That Transform"' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className="space-y-16">
  {/* First Row */}
  <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
    <FeaturedArticle
      title="Strategic Roadmap for Insmed’s Profitability"
      summary="As a part of a strategic initiative, I conducted an in-depth analysis of Insmed Incorporated, a pharmaceutical company specializing in rare lung disease treatments, focusing on profitability challenges and revenue diversification. Leveraging financial analysis, I recommended prioritizing the accelerated development of Brensocatib, a promising therapeutic candidate with significant market potential. I proposed reallocating resources, optimizing marketing efforts, and enhancing supply chain readiness to ensure Brensocatib's successful launch by mid-2025. By addressing critical unmet medical needs and diversifying revenue streams, this roadmap projects Insmed's path to profitability by 2026 while establishing long-term market leadership."
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EVLeJ4c3jPtCn9KgnAw6bAYByehIfUEMO0jbdvDPavmnMg?e=7lC3Di"
      img={Insmed}
    />
    <FeaturedArticle
      title="Reimagining Snap Inc.: Empowering the Creator Economy"
      summary="I developed a strategic pivot plan for Snap Inc., targeting the $480 billion creator economy by focusing on micro-content creators with 10K–100K followers, who are known for high engagement and relatability. The proposal introduced two innovative solutions: Snap Studio, an AI and AR-powered content creation suite to streamline production and improve quality, and Snap Points, a gamified user engagement system incentivizing interaction and providing creators with monetization opportunities. The phased implementation plan outlined research, beta testing, and full-scale launch over 12 months, with success metrics including user engagement, creator retention, and revenue growth. By addressing current challenges and fostering a thriving creator ecosystem, this strategy positions Snap Inc. as a leader in content creation and monetization while enhancing profitability and user engagement."
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/Ea--7eKBCoNIlJF2-SbRF9gBeDayHygrgO_5UDzai3vrug?e=h76Pi1"
      img={Snap}
    />
  </ul>

  {/* Second Row */}
  <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
    <FeaturedArticle
      title="Swiggy Instamart: Simplifying Grocery Shopping"
      summary="I proposed innovative solutions for Swiggy Instamart, addressing challenges in meal planning and grocery shopping. By introducing features like AI-powered predictions, personalized meal plans, and Order with Reels, my approach aimed to streamline the user experience, enhance convenience, and boost user engagement and loyalty."
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EayHYD95YuhNndbhMReDwbMBth1OEeBds6d6PiQEFpv8qg?e=PVsF8W"
      img={Swiggy}
    />
    <FeaturedArticle
      title="Evaluating Investment Opportunities in the Cultivated Meat Market"
      summary="I conducted a comprehensive analysis of the cultivated meat market in Singapore, leveraging a PESTEL framework and a custom multi-factor evaluation system. The assessment identified Upside Foods as the most promising investment opportunity due to its superior cost efficiency, scalability, and product-market fit, supported by strong funding and advanced technology readiness. The framework emphasized critical factors such as Technology Readiness Level, Cost Efficiency, and Market Fit, offering actionable insights for strategic investment in a rapidly growing market sector."
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EdAWpl1yxq9Gh07NOYBlNUABDb_XyjrYZgGkGXJEthv-rg?e=0c0Xr8"
      img={M1}
    />
  </ul>

  {/* Third Row */}
  <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
    <FeaturedArticle
      title="Smart Group Trip Planner: Redefining Collaborative Travel Planning"
      summary="This project focuses on solving key challenges faced by group travelers in planning trips collaboratively. By introducing the Smart Group Trip Planner, MakeMyTrip leverages AI and user-friendly tools to enable seamless itinerary creation. The solution includes features like voting on destinations, tracking expenses, AI-generated itineraries, and real-time collaboration. The initiative targets millennial and Gen Z users, enhancing user experience, engagement, and platform trust. The outcome aims to increase bookings, attract new users, and establish MakeMyTrip as a leader in personalized group travel solutions.

"
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EZQOKP7J9XFHnP6DXp4MCNYBF5AwyIfWOBWcPJQl03rvbQ?e=KgfgQR"
      img={MMT}
    />
    <FeaturedArticle
      title="Find My Expert: Personalized Fertility Care Solutions"
      summary="The Find My Expert feature empowers users to navigate the complex fertility journey by connecting them with tailored specialists based on personalized preferences such as location, specialty, and fees. Designed for early adopters, the platform addresses user pain points like information overload and lack of direction while providing detailed doctor profiles, video introductions, and patient satisfaction scores. The solution focuses on creating a seamless experience through features like filter-based searches, appointment booking, and comprehensive post-appointment support. It aims to increase user acquisition, engagement, and retention, positioning the platform as a trusted resource in fertility care.

"
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/ETpoeCqTkrRNqFLfrgxn5IcBp31pdih59uXKuhtkchitXw?e=mcaiYn"
      img={PRD}
    />
  </ul>

  {/* Fourth Row */}
  <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
    <FeaturedArticle
      title="Revitalizing Netflix’s Revenue Growth: A Strategy for the Indian Market"
      summary="This project focuses on addressing Netflix's revenue growth slowdown in the Indian market by targeting a specific user segment: mid-aged men in Tier 1 and Tier 2 cities with families. Research highlights their preferences for family-friendly, diverse, and localized content. Challenges such as inadequate recommendations and high onboarding friction are identified. Proposed solutions include streamlined onboarding, personalized recommendations, and content tailored to family viewing preferences. These efforts aim to onboard 2 million new users, generating an estimated $90 million in annual revenue and strengthening Netflix's position in the competitive OTT market."
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EZA70uhUmA9DmKAngG06daUBc_nN5FXeeaIdPwthX8bvJw?e=5IKUDg"
      img={NF}
    />
    <FeaturedArticle
      title="Optimizing LinkedIn’s User Onboarding Experience"
      summary="This project analyzes LinkedIn's user onboarding process through the lens of a job-seeker persona. The study highlights friction points such as redundant steps, lack of clarity in privacy measures, and insufficient personalization for diverse professional needs. Key recommendations include streamlining user input with autofill features, providing skip options to reduce drop-offs, integrating progress indicators, and tailoring the onboarding process for varied user goals (e.g., job-seekers, recruiters, sales professionals). Implementing these strategies can enhance the onboarding completion rate, drive user engagement, and support LinkedIn’s mission to connect professionals worldwide."
      link="https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EdOzWQdvRBNEiY_moltwZLsB-t4kFRZRnvE9FDvCZvK4uA?e=hrfWeR"
      img={Linkedin}
    />
  </ul>
</div>
{/* 
<h2 className='font-bold text-4xl w-full text-center mt-32 my-16'>All Case Studies</h2>
<ul>
  <Article title='Evaluated the cultivated meat market in Singapore using a custom multi-factor framework ' date='September' img={M1} link='https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EdAWpl1yxq9Gh07NOYBlNUABDb_XyjrYZgGkGXJEthv-rg?e=0c0Xr8' />
  <Article title='Designed a user-centric solution for Swiggy Instamart by addressing meal planning challenges and enhancing user convenience' date='August' img={Swiggy} link='https://livejohnshopkins-my.sharepoint.com/:b:/g/personal/dchaudh7_jh_edu/EayHYD95YuhNndbhMReDwbMBth1OEeBds6d6PiQEFpv8qg?e=PVsF8W' />
  <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' date='March 22' img={project1} link='/' />
  <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' date='March 22' img={project1} link='/' />
  <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' date='March 22' img={project1} link='/' />
  <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' date='March 22' img={project1} link='/' />
  <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' date='March 22' img={project1} link='/' />
  <Article title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' date='March 22' img={project1} link='/' />
</ul> 
*/}

          
        </Layout>
      </main>
    </>
  );
};

export default Articles;

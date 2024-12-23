import AnimatedText from '@/components/AnimatedText';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import profilePic from '../../public/images/profile/Port_dib.png'
import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';



const AnimatedNumbers=({value}) => {
    const ref=useRef(null) ;
    const  motionValue=useMotionValue(0) ;
    const springValue = useSpring(motionValue,{duration :3000}) ;
    const isInView = useInView(ref) ;

    useEffect(()=>{
        if(isInView){
            motionValue.set(value) ;
        }
    },[isInView,value,motionValue ])

    useEffect(()=>{
        springValue.on("change",(latest) =>
            {
                if (ref.current && latest.toFixed(0) <=value){
                    ref.current.textContent=latest.toFixed(0) ;
                }
            }
    )
    },[isInView,value,motionValue ])

    return <span ref={ref}>

    </span>
}
const About = () => {
    return (
        <>
            <Head>
                <title>Dibakar | About page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                <AnimatedText text={"Building Impactful Products with Strategy, Data & Design"} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:nb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mnb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                        <p className='my-4 font-medium'>
                        - Hi, I’m Dibakar Chaudhary—a product manager and data-driven innovator with a passion for transforming insights into user-centered solutions. With hands-on experience across diverse industries like healthcare, travel, and technology, I excel in crafting MVPs, driving go-to-market strategies, and delivering measurable results.
                    

                        </p>
                        <p className='font-medium'>
- From leading product roadmaps at Oracle to designing AI-driven travel platforms with Intripid, I thrive on solving complex problems and turning challenges into opportunities. Whether it's reducing operational costs for hospitals or enhancing customer experiences with predictive analytics, my work bridges strategic vision and execution. 


                        </p>

                        <p className='font-medium'>

                        - I believe that impactful products aren't just built—they are carefully curated by understanding user pain points, leveraging data, and creating seamless experiences. Dive into my portfolio to explore how I bring bold ideas to life with precision and purpose.

                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                    '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="Dibakar" className='e-full h-auto rounded-2x1'
                        
                        priority
              sizes='(max-width:768px) 100vw , 
  (max-width:1200px) 50vw ,33vw'

                        />
                    </div>



                </div>
<Skills/>
<Experience/>
<Education/>
                </Layout>
            </main>
        </>
    );
};

export default About;

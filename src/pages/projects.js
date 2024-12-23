import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavEye from "../../public/images/projects/NavEye.png"
import Sentinel from "../../public/images/projects/Adya.png"
import Drone from "../../public/images/projects/Drone.png"
import IC from "../../public/images/projects/Image.png"
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { GithubIcon } from '@/components/Icon';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage=motion(Image) ;
const FeaturedProject = ({type,title,summary,img,link,github}) => {

return(
<article className='w-full flex items-center justify-between
rounded-3xl border vorder-solid border-dark bg-light shadow-2xl relative
p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
'>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]

'  

/>


<Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">


                <FramerImage src={img} alt={title} className="w-full h-auto rounded-lg"
                
                
whileHover={{scale:1.05}}
transition={{duration:0.2}}

                
                
                />
            </Link>


<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
    <span  className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
{type}
    </span>
    <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className=" my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p
  className="my-2 font-medium text-dark dark:text-light sm:text-sm"
  style={{ textAlign: "justify" }}
>
  {summary}
</p>
        
        <div className='mt-2 flex items-center'>
        <Link href={github} target ="_blank" className='w-10'></Link>
        <Link href={link} target ="_blank" 
        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark
        sm:px-4 sm:text-base
        '
        
        >Explore Project</Link>
        </div>
    
</div>

</article>


)

}



const Project = ({title,type,img,link,github})=>{

    return (
        <article className='w-full flex flex-col items-center justtify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light 
        xs:p-4
        '>


<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl -3xl dark:bg-light
md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] 
'  />


            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">


<FramerImage src={img} alt={title} className="w-full h-auto rounded-lg" 


whileHover={{scale:1.05}}
transition={{duration:0.2}}
priority
              sizes='(max-width:768px) 100vw , 
  (max-width:1200px) 50vw,50vw'

/>
</Link>

<div className='w-full flex flex-col items-start justify-between mt-4'>
<span  className='text-primary font-medium text-xl  dark:text-primaryDark
lg:text-lg md:text-base
'>
{type}
</span>
<Link href={link} target="_blank" className="hover:underline underline-offset-2">
    <h2 className=" my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
</Link>

<div className='w-full mt-2 flex items-center justify-between'>
<Link href={link} target ="_blank"
className='text-lg font-semibold underline md:text-base'

>Visit</Link>
<Link href={github} target ="_blank" className='w-8 md:w-6'><GithubIcon/></Link>

</div>

</div>
        </article>
    )

}


const projects = () => (
   <>
        <Head>
            <title>Dibakar | Projects page</title>
            <meta name='description' content='any description' />
        </Head>
        
<TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center  dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                
                
                />
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                       <FeaturedProject 
                       
                       title= 'NavEye'
                       summary='The Naveye project addresses accessibility gaps in current navigation tools, focusing on empowering visually impaired, colorblind, and cognitively challenged users to navigate independently and confidently. By leveraging AI-driven features, it offers innovative solutions such as low-obstacle routes, landmark detection, and a colorblind mode, ensuring inclusivity and usability. Targeting a market of 93 million U.S. adults at risk for serious vision loss, the project emphasizes user-centric design through tailored personas and real-world pain points. Naveye is now a prototype-ready product, showcasing its potential to redefine navigation for underserved communities.'
link='https://livejohnshopkins-my.sharepoint.com/:p:/g/personal/dchaudh7_jh_edu/EZChOQL9c2pCuAY5gvmdydIB7sB4XNdiQhvIbhno17wNpQ?e=azGOf9'

img = {NavEye}
github='/'
                       
                       
                       />
                    </div>



                    <div className='col-span-12'>
                    <FeaturedProject 
                       
                       title= 'Sentinel'
                       summary='Developed an innovative safety app designed to enhance public safety by enabling real-time sharing of live camera, microphone, and location data with friends or law enforcement, along with SOS alerts. Leveraged wireframing skills to design a user-friendly interface and utilized advanced large language models (LLMs) like BERT and DistilBERT to optimize crime data extraction from police reports. By implementing hyperparameter optimization techniques, improved the model accuracy, increasing the Exact Match score from 59.2% to 63.3% and the F1 score from 0.5885 to 0.6246. This project demonstrates my expertise in product design, AI integration, and applying LLMs to solve real-world problems effectively.'
link='https://livejohnshopkins-my.sharepoint.com/:p:/g/personal/dchaudh7_jh_edu/EdoYAzqhblNGtqow2MP18HgB3K-YyvxYF5gtm30X__51qQ?e=ikVbXW'
type=''
img = {Sentinel}
github='/'
                       
                       
                       />
                    </div>





                    {/*
                    <div className='col-span-6 sm:col-span-12'>






                        
                    <Project 
                       
                       title= 'Crypto Screener Application'
                       summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency'
link='/'
type='Featured Project'
img = {project1}
github='/'
                       
                       
                       />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                       
                       title= 'Crypto Screener Application'
                       summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency'
link='/'
type='Featured Project'
img = {project1}
github='/'               
                       />
                    </div>
*/}
                    <div className='col-span-12'>
                    <FeaturedProject 
                       
                       title= 'Vitarana Drone'
                       summary='Led the development of an autonomous drone for package delivery, funded by the E-Cell of NIT Hamirpur during my first year of college as part of my first startup. Successfully developed a prototype and engaged in discussions with the government for additional funding to deliver packages in the mountainous regions of Himachal Pradesh. Unfortunately, the startup ceased operations due to COVID-19. Leveraged Robot Operating System (ROS) and Gazebo to simulate drone operations, implementing advanced path planning, image processing, and Proportional Integral Derivative (PID) algorithms to design the Attitude and Position Controller. This experience highlights my entrepreneurial spirit, ability to secure funding and partnerships, and expertise in product design and technical innovation, showcasing strong potential for product-focused roles.'
link='https://drive.google.com/drive/folders/1H_iqmClU5byj2xQzm9SG7D8qRIk5wG6D?usp=sharing'
type=''
img = {Drone}
github='/'
                       
                       
                       />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 
                       
                       title= 'Image Captioning'
                       summary='Designed and developed an advanced image captioning system that combines computer vision and NLP, leveraging transfer learning with pre-trained CNN models (VGG-16/Inception) for feature extraction and LSTM networks for generating captions. Built a robust neural architecture comprising an Image Feature Encoder, Sequence Decoder, and Caption Generator, processing over 1,500 images from the Flickr8k dataset using TensorFlow, Keras, and GloVe embeddings. This project highlights my expertise in deep learning, computer vision, and natural language processing, showcasing proficiency in building end-to-end AI-driven solutions.'
link='https://github.com/Dibakar58/Image_Captioning'
type=''
img = {IC}
github='/'
                       
                       
                       />
                    </div>



                    {/* 
<div className='col-span-6 sm:col-span-12'>
    <Project 
        title= 'Crypto Screener Application'
        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
        local currency'
        link='/'
        type='Featured Project'
        img = {project1}
        github='/'               
    />                    
</div>
<div className='col-span-6 sm:col-span-12'>
    <Project 
        title= 'Crypto Screener Application'
        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
        local currency'
        link='/'
        type='Featured Project'
        img = {project1}
        github='/'               
    />                    
</div> 
*/}


                </div>
            </Layout>
        </main>
   </>
);

export default projects;

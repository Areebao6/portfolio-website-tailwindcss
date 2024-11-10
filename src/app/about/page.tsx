'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <h1 className='font-bold  text-6xl  flex justify-center text-purple-300 -400 mb-[100px] '>
        <TypeAnimation
    sequence={[
      
      '"INFO"',
      500, 
    ]}
    wrapper="span"
    speed={1}
    style={{ fontSize: '1em', display: 'inline-block' }}
    repeat={Infinity}
    />
    </h1> 

    <div className='grid grid-cols-2 px-[100px] '>
    <Image className=''
      src={"/about-image.png"}
      alt={"about"}
      width={400}
      height={400}
    > 
    </Image>
          
       

          
            <h2 className='text-4xl font-mono'>
              About ME:




            <p className='font-mono text-xl text-yellow-50 pt-[20px]  '>
              `Passionates about learning generative Ai and Web Development & a University student and I am a GIAIC student aswell, 
              pusuing a course in Artifical Intelligence,WEB Devlopment 3.0 & Meteverse,I`ve been working alot with HTML & CSS,
              I am learning Typscript and NEXT.JS and creating websites & really looking forward to learn Gerative AI``
              
              
 </p>
            </h2>


      




      
        </div>
        </div>
          



      







    



    







  )
}

export default page

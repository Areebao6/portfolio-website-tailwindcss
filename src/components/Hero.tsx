"use client";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
       <div className=' grid grid-cols-2 justify-between g-right pr-[400px]ap-[50] text bg-'>
    <Image  style={{backgroundSize:"70%"}} className='rounded-full bg-gradient-to-t from-pink-500 to-purple-700  w-[450px] h-[450px]'
    src={"/hero-image.png"}
    alt={"hero"}
    width={400}
    height={400}>
      

    </Image>
      <h1 className=' mb-4 text-center text-8xl font-extrabold pt-[100px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 '>
        `HELLO!, I`M{""}
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'AREEBA SHAD"',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A WEB DEVELOPER"',
        1000,
        '',
        
        
    
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </h1> 
    </div>  
  )
}
    




export default Hero

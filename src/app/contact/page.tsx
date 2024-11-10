"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { TbMailBolt } from "react-icons/tb"
import { BsTelephoneInbound } from "react-icons/bs"


const page = () => {
  return (
    
    <div className='grid grid-cols-2 justify-center g-right pr-[400px]ap-[50] ' >
    <h1 className='font-medium  mt-[100px] text-6xl flex justify-start text-transparent bg-clip-text  bg-gradient-to-b from-pink-500 to-purple-700'> 
    <TypeAnimation
    sequence={[
      
      '"CONTACT ME"',
      500, 
    ]}
    wrapper="span"
    speed={1}
    style={{ fontSize: '1em', display: 'inline-block' }}
    repeat={Infinity} 
/>
</h1> 


<div className='mb-[700px]'> 
<h2 className='text-4xl flex  mt-[200px] '> GET IN TOUCH:
  </h2>
  <p  className='text-3xl  mt-5'>`Send me an e-mail or give me call to collab`</p>
  <div className='flex gap-3 items-center hover:text-purple-500 '>
    <TbMailBolt size={50}/>areebashad1234@g-mail.com
  </div>
  <div className='flex gap-3  mt-4 items-center hover:text-teal-500'>
    <BsTelephoneInbound size={50} /> (021) 000-0000
  </div>



  <div> 
    <p className='text-xl '> areebashad@gmail.com</p>
        
      
      

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
      <h2 className='text-5xl font-bold text-orange-500 mb-4'>Let`s Connect</h2>
      <p className='text-white/70 mb-6'>Send me a messge and schedule a call</p>
      <form className='space-y-4' action= "https://getform.io/f/blllyreb" method="POST" >
        <div className='grid md:grid-cols-2 gap-4'>
            <input  type="text" name="name"className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='First Name'/><br />
            <input  type="text" name="name"className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name'/><br />
            <input type="text" name="email" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='E-mail'/><br />
            <input type="phone" name="phone"className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone'/>
        </div>
        <textarea className='bg-black/70  w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message' />
        <button className='bg-pink-700 hover:bg-pink-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl' >Send Message</button>
      </form>
      </div>










  </div>


    </div>
    </div>
)
}






export default page

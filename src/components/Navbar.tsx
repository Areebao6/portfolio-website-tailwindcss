"use client";


import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

  const navbar =() =>{
    return (
  
 
    <div>
      
      <div className='container pt-8'>
      <div className=' bg-no-repeat '></div> 
               <div className='flex justify-between  '>
               <Image
        src={"/OIP.png"}
        alt={"logo"}
        width={200}
        height={200}>
   </Image>
    
      <ul className='flex justify-between gap-[150px] font-medium'>
        <li><Link href="/" className='hover:text-pink-500'>Home</Link></li>
        <li><Link href="/about" className='hover:text-pink-500'>About </Link></li>
        <li><Link href="/project" className='hover:text-pink-500'>Project</Link></li>
        <li><Link href="/contact" className='hover:text-pink-500'>Contact</Link></li>
      </ul>
   <nav>
   















   </nav>

        </div>
</div>
















{/*   

               <button  className='menulink  '><a href='#hero'>Home</a></button >
               <button className='menulink'><a href='#about'>About</a></button >
                <button className='menulink '><a href='./projects'>Projects</a></button >
                <button  className='menulink'><a href='#skills'>Skills</a></button >
                <button className='menulink'><a href='#contact'>Contact</a></button > */}
               
            
            
            
                   
                
            
       
      
</div>    
  )}
  export default navbar


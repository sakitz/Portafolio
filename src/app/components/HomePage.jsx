"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowDown } from "react-icons/fa6";
import { motion } from 'framer-motion'

const HomePage = () => {

  const cvs = [
    {
      id:4,
      child: (
          <button className='px-4 bg-[#17202a] mr-6 text-white border border-white rounded-full hover:bg-[#e67e22] transition-all hover:text-white'>
           CV - ES
          </button> 
      ),
      href: '../../../CV/CV Ludmila Iñigo.pdf',
      download: true,
  },
  {
    id:4,
    child: (
        <button className='px-4 bg-[#17202a] mr-6 text-white border border-white rounded-full hover:bg-[#e67e22] transition-all hover:text-white'>
          CV - EN
       </button> 
    ),
    href: '../../../CV/benjamin.pdf',
    download: true,
},
  ]
  return (
    <main
      style={{ scrollBehavior: "smooth" }}
      id='Perfil' 
      className='w-full h-screen sm:w-full sm:h-[70vh] lg:h-[60vh] xl:h-screen xl:w-full sm:mx-2'
    >
      
      <section className='max-w-screen-lg
                  mx-auto flex flex-col items-center 
                  justify-center h-full md:px-4 md:flex-row px-10'>
        <article className='flex flex-col justify-center mr-6'>
          <motion.h1 
           initial={{ 
            y: -485,
            opacity: 0 
          }}
          animate={{
            y: 0,
            opacity:1
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}

          className='text-5xl text-white mb-4 font-semibold'>
          Hola!, 😁 soy  <span className='text-green-700'>benjamin </span>
            <TypeAnimation
             sequence={[
              'Desarrollador Web',
              700,
              'FronEnd',
              700,
              'Desarrollador Web',
              700,
              'FronEnd',
              700,
              'Desarrollador Web',
              700,
              'FronEnd',
              700,
              'Desarrollador Web',
              700,
              'FronEnd',
              2000,
            ]}
            speed={300}  
            >
            </TypeAnimation>
          </motion.h1>
          <motion.p 
             initial={{ 
              x: -485,
              opacity: 0 
            }}
            animate={{
              x: 0,
              opacity:1
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
          
          className='text-white'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique molestias earum aut fugit recusandae dignissimos quis, ipsa, ipsum in consequuntur atque porro assumenda repellendus veniam saepe. Pariatur eius culpa explicabo.
          </motion.p>
            <article className='flex mt-6 mb-4'>
              {cvs.map(({id, child, href, download})  => (
                <motion.span 
                initial={{ 
                  y: 485,
                  opacity: 0 
                }}
                animate={{
                  y: 0,
                  opacity:1
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              
                key={id}>
                  <a href={href} download={download}>
                    {child}
                  </a>
                </motion.span>
                
              ))}
            </article>
        </article>
        
          <motion.article 
           initial={{ 
            x: 700,
            opacity: 0 
          }}
          animate={{
            x: 0,
            opacity:1
          }}
          transition={{
            duration: .7,
            ease: "easeIn",
          }}
        
          >
            <Image 
              src='/giphy.gif'
              width={500}
              height={500}
              alt='imagen'
              className='rounded-2xl sm:max-w-md 
              sm:mt-8
              sm:w-[300px] md:w-[30rem]
              sm:h-[200px] md:h-[20rem]
              md:max-w-lg'
            />
          </motion.article>
      </section>
          
    </main>
  )
}

export default HomePage
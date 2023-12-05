"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ParticlesBackgraund from './ParticlesBackgraund'

const HomePage = () => {

  const cvs = [
  
    {
      id:1,
      child: (
          <button className='px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-full hover:bg-green-600 transition-all hover:text-white'>
           Descargar CV - ES
          </button> 
      ),
      href: '../../../CV/Benjamin.L-es.pdf',
      download: true,
    },
  {
    id:2,
    child: (
        <button className='px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-full hover:bg-green-600 transition-all hover:text-white'>
           Download CV - EN
       </button> 
    ),
    href: '../../../CV/Benjamin.L-en.pdf',
    download: true,
},

//flex flex-col justify-center mr-6
  ]
  return (

    <main
      id='Perfil' 
      className='w-full h-screen'
    >
             <ParticlesBackgraund />
      <section className=' max-w-screen-lg mx-auto
                           flex flex-col items-center h-full md:px-4 px-10 justify-center
                           md:flex-row md:justify-center md:ite'>

      
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

          className='text-3xl md:text-5xl text-white mb-4 font-semibold'>
          Hola!, 😁 soy  <span className='text-red-700'>Benjamin </span>
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
              'FrontEnd',
              2000,
              'Desarrollador Web',
              700,
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
          
          className='text-sm text-white'>
            y estoy comprometido a crear webs con un codigo legible, escalable y con el mejor performance posible. <br />
            
            <p className='mt-2'>dispuesto a aprender progresivamente y estudiar nuevas tecnologías, Si el trabajo lo requiere.</p>
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
              className='rounded-2xl 

              sm:max-w-md 
              sm:mt-8
              overflow-hidden
              md:w-[300px] lg:w-[30rem]
              md:h-[200px] lg:h-[20rem]
              md:max-w-lg'
            />
          </motion.article>
      </section>
          
    </main>
  )
}

export default HomePage
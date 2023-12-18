"use client"
import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import ParticlesBackgraund from './ParticlesBackgraund'
import { motion } from 'framer-motion'

/* {
      id:2,
      child: (
          <button className='px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-full hover:bg-green-600 transition-all hover:text-white'>
             Download CV - EN
         </button> 
      ),
      href: '../../../CV/Benjamin.L-en.pdf',
      download: true, 
    },*/ 

const HomePage = () => {

  const cvs = [
    {
      id:0,
      child: (
          <button className='flex gap-x-4 justify-center items-center px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-md hover:bg-blue-800 transition-all hover:text-white'>
            Descargar CV 
          </button> 
      ),
      href: '../../../CV/benjamin-Ll.pdf',
      download: true,
    }
  ]
  return (

    <main
      id='Perfil' 
      className='w-full h-screen'
    >
             <ParticlesBackgraund />
      <section className=' max-w-screen-lg mx-auto
                           flex flex-col items-center h-full md:px-4 px-10 justify-center
                           md:flex-row md:justify-center'>

      
        <motion.article 
           initial={{ x: -1000 }}
           animate={{ x: 0 }}
           transition={{
             duration: 1,
             ease: 'easeInOut',
             type: 'spring'
           }}
        className='flex flex-col justify-center mr-6'> 
          <h1 className='text-3xl md:text-[2.80rem] text-white mb-2 font-semibold' >
          Hola!, soy  <span className='text-blue-700'>Benjamin </span>
          </h1>
          <p className='text-[3.50rem] text-white font-bold'>
              <TypeAnimation
             sequence={['Desarrollador Web', 600,'FronEnd',600,'Desarrollador Web',600,'FronEnd',600,'Desarrollador Web',600,'FronEnd', 600,'Desarrollador Web',600,'FrontEnd',600,'Desarrollador Web',600,'FronEnd',600,'Desarrollador Web',600,'FronEnd', 600,'Desarrollador Web',600,'FrontEnd',600,'Desarrollador Web',600,'FronEnd',600,'Desarrollador Web',600,'FronEnd', 600,'Desarrollador Web',600,'FrontEnd',600,'Desarrollador Web FronEnt.',600,
            ]}
            speed={300}  
            >
            </TypeAnimation>
              </p><br />

          <p className='text-[1rem] text-white pt-4'>
            Y estoy comprometido a crear webs con un código legible, escalable y con el mejor rendimiento. <br />
            <span>Dispuesto a aprender progresivamente y estudiar nuevas tecnologías, si el trabajo lo requiere.</span>
          </p>
            <article className='flex mt-6 mb-4'>
              {cvs.map(({id, child, href, download})  => (
                <span 
                key={id}>
                  <a href={href} download={download}>
                    {child}
                  </a>
                </span>
                
              ))}
            </article>
        </motion.article>
        
          <motion.article
          initial={{ 
            y: -1000, 
            opacity: 0
          }}
          animate={{ 
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring'
          }}
          >
            <Image 
              src='/giphy2.gif'
              width={500}
              height={500}
              alt='imagen'
              className='rounded-2xl 
               tlmc:hidden
               md:block
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
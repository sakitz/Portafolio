"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ParticlesBackgraund from './ParticlesBackgraund'


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
      id:1,
      child: (
          <button className='flex gap-x-4 justify-center items-center px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-full hover:bg-blue-800 transition-all hover:text-white'>
           Descargar CV 
          </button> 
      ),
      href: '../../../CV/benjamin-L.pdf',
      download: true,
    }
   

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
                           md:flex-row md:justify-center'>

      
        <article className='flex flex-col justify-center mr-6'> 
          <motion.h1 
           initial={{ 
            y: -500,
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

          className='text-3xl md:text-3xl text-white mb-2 font-semibold'>
          Hola!, soy  <span className='text-blue-700'>Benjamin </span>
          </motion.h1>
          <p className='text-4xl text-white font-bold'>
              <TypeAnimation
             sequence={[
              'Desarrollador Web', 900,
              'FronEnd',900,
              'Desarrollador Web',900,
              'FronEnd',900,
              'Desarrollador Web',900,
              'FronEnd', 900,
              'Desarrollador Web',900,
              'FrontEnd',2000,
              'Desarrollador Web',700,
            ]}
            speed={300}  
            >
            </TypeAnimation>
              </p><br />

          <motion.p 
             initial={{ 
              x: -500,
              opacity: 0 
            }}
            animate={{
              x: 0,
              opacity:1
            }}
            transition={{
              duration: 1,
              ease: "easeIn"
            }}
          
          className='text-[1rem] text-white pt-4'>
            Y estoy comprometido a crear webs con un código legible, escalable y con el mejor rendimiento posible. <br />
            
            <p className='mt-2'>Dispuesto a aprender progresivamente y estudiar nuevas tecnologías, si el trabajo lo requiere.</p>
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
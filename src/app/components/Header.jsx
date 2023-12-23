"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {

  const [nav, setNav] = useState()

  const Links = [
    {
        id:1,
        link:'#Perfil',
        name:'Perfil'
    },
    {
        id:2,
        link:'#Tecnologias',
        name:'Tecnologias'
    },
    {
        id:3,
        link:'#Proyectos',
        name:'Proyectos'
    }, 
    {
        id:4,
        link: '#Sobre mi',
        name:'Sobre mi' 
    },
    {
      id:5,
      link: '#Contacto',
      name:'Contacto' 
    },

]


  return (
       <header
       id='home'
       className='w-full h-fit bg-[#0b0b0b] fixed z-50'
       >
        <section className=' text-white flex justify-between items-center p-8'>
        <Link
          href='#home'
          className='text-xl md:text-2xl xl:text-4xl md:hover:text-[2.75rem] font-bold transition-all'
        >
          <motion.h1
             initial={{
              opacity:0,
              x: -100
             }}
             animate={{
               opacity: 1,
               x:0
            }}
             transition={{
              duration: 0.5,
              ease: "easeIn",
             
            }}
            className=' font-Logo'
          >
            Benjamin L.
          </motion.h1>
          
        </Link>
          
          <ul className='hidden md:flex'>
              {Links.map(({link, name, id}) => (
                <motion.li
                  key={id}
                  className='text-white font-bold px-4 cursor-pointer capitalize 

                  after:h-[2px] after:w-0 after:bg-blue-700 after:block after:transition-all duration-[500ms] hover:after:w-[100%] border-green-600 ease-in'
                  initial={{ 
                    x: 485,
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
                >
                    <Link href={link} duration={500}>{name}</Link>
                </motion.li>
                ))}
          </ul>
          <article
            className='cursor-pointer z-10 text-white md:hidden'
            onClick={() => setNav(!nav)}
          >
               {nav ? <FaTimes size={30}/>  :  <FaBars size={30}/>}
          </article>

          {nav && (
            <ul
            className='flex flex-col absolute justify-center 
            items-center top-0 left-0 w-full h-screen bg-gradient-to-b 
          from-blue-800 via-blue-950 to-black text-white'>
              {Links.map(({link, name, id})  => (
                <motion.li
                initial={{ 
                  x: 485,
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
                key={id}
                className='px-4 cursor-pointer py-6 text-4xl'
                >
                  <Link onClick={() => setNav(!nav)} href={link} duration={500}>
                            <p className='hover:scale-105
                            after:h-[2px] after:w-0 after:bg-white after:block after:transition-all duration-[500ms] hover:after:w-[100%] text-white captalize text-4xl'>{name}</p>
                  </Link>      
                </motion.li>
              ))}
            </ul>
          )}
        </section>

       
       </header>
  )
}

export default Header
         
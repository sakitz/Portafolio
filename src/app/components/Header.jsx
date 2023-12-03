"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

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
       className='p-4 bg-[#0f161f]
           text-white
        fixed h-fit w-screen z-50'
       >
        <div className=' text-white  flex justify-between items-center '>
        <Link
          href='#home'
          className='text-4xl hover:text-[2.75rem] font-bold transition-all'
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
          >
            Benjamin L.
          </motion.h1>
          
        </Link>
          
          <ul className='hidden md:flex'>
              {Links.map(({link, name}) => (
                <motion.li
                  key={link.id}
                  className='text-white px-4 cursor-pointer capitalize 
                  font-medium
                  after:h-[2px] after:w-0 after:bg-[#0c2eeb] after:block after:transition-all duration-[500ms] hover:after:w-[100%] border-white ease-in'
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
          <div
            className='cursor-pointer z-10 text-white md:hidden'
            onClick={() => setNav(!nav)}
          >
               {nav ? <FaTimes size={30}/>  :  <FaBars size={30}/>}
          </div>

          {nav && (
            <ul
            className='flex flex-col absolute justify-center 
            items-center top-0 left-0 w-full h-screen bg-gradient-to-b 
          from-blue-950 to-black text-white'>
              {Links.map(({link, name})  => (
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
                key={link.id}
                className='px-4 cursor-pointer py-6 text-4xl'
                >
                  <Link onClick={() => setNav(!nav)} href={link} duration={500}>
                            <p className='hover:scale-105
                            after:h-[2px] after:w-0 after:bg-[#fff] after:block after:transition-all duration-[500ms] hover:after:w-[100%] text-white captalize text-4xl'>{name}</p>
                  </Link>      
                </motion.li>
              ))}
            </ul>
          )}
        </div>

       
       </header>
  )
}

export default Header
         
"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Header = () => {

  const [nav, setNav] = useState()

  const Links = [
    {
        id:1,
        link:'Perfil',
        name: 'Inicio'
    },
    {
        id:2,
        link:'Tecnologias',
        name: 'Tecnologias'
    },
    {
        id:3,
        link:'Proyectos',
        name: 'Proyectos'
    }, 
    {
        id:4,
        link: 'Sobre mi',
        name: 'Sobre mi'
    },

]

  return (
       <header
       className='w-full h-fit bg-[#05051b] fixed z-50'
       >
        <section className='text-white flex justify-between items-center p-8'>
          <motion.h1 
            initial={{
              opacity: 0,
              scale: 0,
              x: -500
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0
            }}
            transition={{
              duration: .5,
            }}
            className='font-Logo link'>
            Benjamin L.
          </motion.h1>  

          
          
          <ul className='hidden md:flex'>
              {Links.map(({link, name , id}) => (
                <motion.li
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: .2,
                }}
                  key={id}
                  className='lineborder'>
                    <Link to={link} href={link} spy={true} smooth={true} offset={50} duration={500}>{name}</Link>
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
            className='nav'>
              {Links.map(({link, name, id})  => (
                <li
                  key={id}
                  className='px-4 py-6 text-4xl'>

                  <Link to={link} href={link} spy={true} smooth={true} offset={50} duration={500} onClick={() => setNav(!nav)}>
                            <p className='text-white'>{name}</p>
                  </Link>      
                </li>
              ))}
            </ul>
          )}
        </section>       
    </header>
  )
}

export default Header
         
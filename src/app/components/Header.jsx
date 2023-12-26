"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
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
          <h1 className=' font-Logo'>
            Benjamin L.
          </h1>  
        </Link>

          
          <ul className='hidden md:flex'>
              {Links.map(({link, name, id}) => (
                <li
                  key={id}
                  className='text-white font-bold px-4 cursor-pointer
                  after:h-[2px] after:w-0 after:bg-violet-700 after:block after:transition-all duration-[500ms] hover:after:w-[100%] border-green-600 ease-in'>
                    <Link href={link} duration={500}>{name}</Link>
                </li>
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
          from-blue-800 to-black text-white'>
              {Links.map(({link, name, id})  => (
                <li
                  key={id}
                  className='px-4 py-6 text-4xl'>
                  <Link onClick={() => setNav(!nav)} href={link} duration={500}>
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
         
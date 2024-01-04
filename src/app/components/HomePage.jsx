"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaLinkedin  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { PiAddressBookBold } from "react-icons/pi";

const HomePage = () => {
  const links = [
    {
      id:1,
      child: (
        <>
        <PiAddressBookBold  size={30}/><span className=' text-lg'>Resume</span>
       </> 
    ),
      href: '../../../CV/benjamin-L.pdf',
      style: 'rounded-tr-md hover:bg-gradient-to-b from-green-500 via-green-950',
      download: true,
  },
  {
    id:1,
    child: (
        <>
        <FaLinkedin size={30}/><span className='text-lg'>LinkedIn</span>
       </> 
    ),
    href: 'https://www.linkedin.com/in/m%C3%A1ximo-benjamin-lopez-2476152a2/',
    style: 'rounded-tr-md hover:bg-gradient-to-b from-blue-500 via-blue-950'
},
{
    id:2,
    child: (
        <>
        <FaGithub size={30}/><span className='text-lg'>Github</span>
       </> 
    ),
    href: 'https://github.com/sakitz',
    style: 'rounded-tr-md hover:bg-gradient-to-b from-orange-500 via-orange-950'
},
{
    id:3,
    child: (
        <>
        <HiOutlineMail size={30}/><span className='text-lg'>Email</span>
       </> 
    ),
    href: 'mailto:benjaminlopezmia@gmail.com',
    style: 'rounded-tr-md hover:bg-gradient-to-b from-gray-400 via-gray-950'
},
]

  return (
    <main 
    id='Perfil'
      className='w-full h-screen'
    >      
             <section className='max-w-screen-lg 
                  mx-auto flex flex-col items-center 
                  justify-center h-full px-4 md:flex-row'>
              
        <motion.article
        initial={{
          x: -500,
          opacity:0
        }}
        animate={{
        x:0,
         opacity:1
        }}
        transition={{
          duration: 1,
          type: 'spring'
        }}
        className='flex flex-col justify-center mr-6'> 
          <h1  
            className='text-2xl md:text-3xl font-medium text-white mb-2'>
          Hola!, soy  <span className='text-blue-500'>Benjamin </span>
          </h1>
          <p 
          className='text-2xl md:text-5xl text-white font-bold pt-2'>
             <TypeAnimation
             sequence={['Desarrollador Web', 600,'FullStack',600,'Desarrollador Web FullStack.', 600
            ]}
            speed={300}>
            </TypeAnimation>
              </p><br />

          <p className='text-[1rem] text-white mt-4'>
            Y estoy comprometido a crear webs con un código legible, escalable y con el mejor rendimiento. <br />
          </p>
          <article
          
            className='flex mt-6 mb-4'>
              <ul className='flex justify-between'>
                 {links.map(({id, child , href, download, style}) => (
                <li key={id} className={`text-xl px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-md xl:${style} transition-all duration-300 `}>
                    <a 
                      href={href} 
                      download={download} 
                      target='_blank'
                      rel='noreferrer'
                      className='flex flex-col justify-center items-center gap-2'
                      >{child}</a>
                </li>
              ))}
              </ul>   
            </article>
        </motion.article>
        <motion.article
        initial={{
          scale:0
        }}
        animate={{
          scale:1
        }}
        transition={{
          duration: .2,
        }}
        >
            <Image 
              src='/giphy2.webp'
              width={500}
              height={500}
              alt='imagen de inicio'
              className='rounded-2xl 
               tlmc:hidden
               xl:block
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
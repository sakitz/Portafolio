"use client"
import Image from 'next/image'
import { LuFileSpreadsheet } from "react-icons/lu";
import { motion } from 'framer-motion';

const HomePage = () => {
  const links = [
    {
      id:1,
      href: '../../../CV/benjamin-L.pdf',
      download: true,
  },
]

  return (
    <main
      id='Perfil' 
      
      className='w-full h-screen'
    >      
             <section className=' max-w-screen-lg mx-auto pt-[10rem] tlc:pt-[3rem]
                           flex flex-col items-center h-full md:px-4 px-10 justify-center
                           md:flex-row md:justify-center'>
              
        <motion.article
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: .5,
        }}
        className='flex flex-col justify-center mr-6'> 
          <h1
          className='text-2xl md:text-3xl font-medium text-white mb-2'>
          Hola!, soy  <span className='text-violet-500'>Benjamin </span>
          </h1>
          <p 
          className='text-2xl md:text-5xl text-white font-bold pt-2'>
              Desarrollador Web fronEnd<span className='animate-pulse text-violet-600'>|</span> 
              </p><br />

          <p 
          className='text-[1rem] text-white mt-4'>
            Y estoy comprometido a crear webs con un código legible, escalable y con el mejor rendimiento. <br />
            
          </p>
          <article
            className='flex mt-6 mb-4'>
              <ul>
                 {links.map(({id, href, download}) => (
                <li key={id} className='flex gap-x-4 text-xl justify-center items-center px-4 py-2 bg-[#17202a] mr-6 text-white border border-white rounded-md xl:hover:bg-violet-800 transition-all'>
                    <a 
                      href={href} 
                      download={download} 
                      target='_blank'
                      rel='noreferrer'
                      className='flex gap-2'
                      >CV <LuFileSpreadsheet size={30}/></a>
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
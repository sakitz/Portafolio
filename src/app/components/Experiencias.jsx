"use client"
import { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { GrTools } from "react-icons/gr";
import { MdOutlineTerminal } from "react-icons/md";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi"
import { SiSequelize } from "react-icons/si";

import { TbBrandVite } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import Aos from "aos";
const Experiencias = () => {
  
  useEffect(() => {
    Aos.init()
  } ,[])

  const fronted = [
    {
      id: 1,
      child: (
        <>
        <FaHtml5 className=" bg-gray-800 rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "HTML",
    },
    {
      id: 2,
      child: (
        <>
        <IoLogoCss3 className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Css",
    },
    {
      id: 3,
      child: (
        <>
        <SiTailwindcss  className=" bg-gray-800 rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Tilwindcss",
    }, 
    {
      id: 4,
      child: (
        <>
        <SiSass  className=" bg-gray-800   rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Sass",
    },  
    {
      id: 5,
      child: (
        <>
        <TbBrandFramerMotion className=" bg-gray-800 rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Framer-motion",
    },

    {
      id: 6,
      child: (
        <>
        <IoLogoJavascript className=" bg-gray-800 rounded-md  hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "JavaScript",
    },
    {
      id: 7,
      child: (
        <>
        <BiLogoTypescript className=" bg-gray-800 rounded-md b hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "TypeScript",
    },
    {
      id: 8,
      child: (
        <>
        <IoLogoReact className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "React.Js",
    },
    {
      id: 9,
      child: (
        <>
        <TbBrandNextjs className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Next.js",
    },
  ];
  const backend = [
    {
      id: 1,
      child: (
        <>
        <FaNodeJs  className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Node.js",
    },
    {
      id: 2,
      child: (
        <>
        <SiExpress   className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Express",
    },
    {
      id: 3,
      child: (
        <>
        <BiLogoMongodb    className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "MongoDB",
    },
    {
      id: 4,
      child: (
        <>
        <SiSqlite className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Sqlite",
    },
    {
      id: 5,
      child: (
        <>
        <BiLogoPostgresql  className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Postgresql",
    },
    {
      id: 6,
      child: (
        <>
        <SiSequelize   className=" bg-gray-800  rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Sequelize",
    },
  ];
  const Tools = [
    {
      id: 1,
      child: (
        <>
        <TbBrandVite className=" bg-gray-800 rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Vite",
    },
    {
      id: 2,
      child: (
        <>
        <FaGitAlt className="bg-gray-800 rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Git",
    },
    {
      id: 3,
      child: (
        <>
        <BiLogoVisualStudio className=" bg-gray-800 rounded-md hover:scale-125 transition-all" size={60} />
       </> 
    ),
      title: "Vs Code",
    },
  ];

  return (
    <section className="w-full h-screen tlmc:pt-[5rem] tlc:pt-[5rem]" id="Tecnologias">
       <h1 className="text-6xl text-transparent text-center flex justify-center">Proyectos</h1>
    <article  className="mb-6 flex flex-col justify-center max-w-screen-lg mx-auto px-10">
      <article>
        <h1 className="text-white text-5xl mb-2 text-center font-bold pb-[1rem] pt-[5rem]">Tecnologias</h1>
        <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-blue-500 mb-6  transition-all flex ">F<p className="text-white">ront</p>E<p className="text-white">nd</p> <FaReact className="hover:animate-spin ml-4 mt-2" /></h1>
        <article
        className="flex flex-wrap tlmc:justify-between lg:justify-start lg:gap-16 xl:gap-4">
          {fronted.map(({ id,child ,title }) => (
            <div
            key={id} className="text-white mb-6" data-aos="fade-left">
              <div>
                {child}
              </div>
              <p className="text-center pt-2 tlc:mr-10 xl:mr-0" data-aos="fade-up">{title}</p>
            </div>
          ))}
        </article>
      </article>
 
     <article className="mt-4">
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-green-700 mb-6  transition-all flex ">B<p className="text-white">ack</p>E<p className="text-white">nd</p> <MdOutlineTerminal  className="ml-4 hover:animate-bounce mt-2" /></h1>
        <article className="flex flex-wrap text-center tlmc:justify-between md:justify-start md:gap-16">
          {backend.map(({ id, child, title }) => (
            <div key={id} className='text-white mb-6' data-aos="fade-left">
              <div>
                {child}
              </div>
              <p className="text-center pt-2 mr-10 xl:mr-0" data-aos="fade-up">{title}</p>
            </div>
          ))}
        </article>
      </article>

      <article data-aos = 'fade-right'>
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-orange-500 mb-6  transition-all flex ">H<p className="text-white">erramientas</p> <GrTools className="hover:animate-spin ml-4 mt-2" /></h1>
        <article className="flex flex-wrap tlmc:justify-between md:justify-start md:gap-12">
          {Tools.map(({ id, child, title }) => (
            <div key={id} className="text-white mb-6" data-aos="fade-left">
             <div>
              {child}
             </div>
              <p className="text-center pt-2 tlc:mr-10 xl:mr-0" data-aos="fade-up">{title}</p>
            </div>
          ))}
        </article>
      </article>
    </article>
</section>
     
   
  );
};

export default Experiencias;

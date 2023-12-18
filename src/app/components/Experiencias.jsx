"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { GrTools } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import Aos from "aos";

const Experiencias = () => {
  useEffect(() => {
    Aos.init()
  } ,[])

  const fronted = [
    {
      id: 1,
      src: "/experiencias/html-5.png",
      title: "HTML",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 2,
      src: "/experiencias/css.png",
      title: "CSS",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 3,
      src: "/experiencias/tailwind.jpeg",
      title: "TailwindCss",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 4,
      src: "/experiencias/Framer-Motion.jpeg",
      title: "Framer-Motion",
      style: "bg-white hover:scale-125 transition-all"
    },
    {
      id: 5,
      src: "/experiencias/js.png",
      title: "JavaScript",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 6,
      src: "/experiencias/typescript.png",
      title: "TypeScript",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 7,
      src: "/experiencias/react.png",
      title: "React",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 8,
      src: "/experiencias/Next..js.png",
      title: "Next.Js",
      style: "hover:scale-125 transition-all"
    },
  ];

  const backend = [
    {
      id: 1,
      src: "/experiencias/Prismaorm.png",
      title: "Prisma ORM",
      style: "hover:scale-125 transition-all bg-white"
    },
    {
      id: 2,
      src: "/experiencias/sqlite_logo_icon_169724.png",
      title: "SQLite",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 3,
      src: "/experiencias/st,small,507x507-pad,600x600,f8f8f8.jpg",
      title: "PostgreSQL",
      style: "hover:scale-125 transition-all"
    },
  ];

  const Tools = [
    {
      id: 1,
      src: "/experiencias/git.png",
      title: "Git",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 2,
      src: "/experiencias/vite.png",
      title: "Vite",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 3,
      src: "/experiencias/visual-studio-code7642.jpg",
      title: "VS Code",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 4,
      src: "/experiencias/postman.png",
      title: "Postman",
      style: "hover:scale-125 transition-all"
    },
  ];

  return (
    <section className="w-full h-screen pt-10" id="Tecnologias" >
    <article  className="mb-6 flex flex-col justify-center max-w-screen-lg mx-auto px-10">
    <h1 className="text-6xl text-transparent text-center flex justify-center">Proyectos</h1>
      <article data-aos = 'fade-right'>
        <h1 className="text-white text-5xl mb-2 text-center font-bold ">Tecnologias</h1>
        <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-blue-500 mb-6  transition-all flex ">F<p className="text-white">ront</p>E<p className="text-white">nd</p> <FaReact className="hover:animate-spin ml-4 mt-2" /></h1>
        <article
        className="flex flex-wrap justify-between">
          {fronted.map(({ id, src, title, style }) => (
            <div
            key={id} className="text-white mb-6" data-aos="fade-up-left">
              <Image
                className={`mx-auto w-[90px] h-[90px]  ${style}`}
                src={src}
                alt="imagen"
                width={100}
                height={100}
              />
              <p className="text-center pt-2" data-aos="fade-up-right">{title}</p>
            </div>
          ))}
        </article>
        <hr />
      </article>
 
      <article>
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-green-700 mb-6  transition-all flex ">D<p className="text-white">ata</p>B<p className="text-white">ase</p> <FaDatabase className="ml-4 hover:animate-bounce mt-2" /></h1>
        <article className="flex flex-wrap text-center gap-12">
          {backend.map(({ id, src, title, style }) => (
            <div key={id} className='text-white mb-6' data-aos="fade-up-left">
              <Image
                className={`mx-auto  w-[90px] h-[90px] ${style}`}
                src={src}
                alt="imagen"
                width={100}
                height={100}
              />
              <p className="text-center pt-2" data-aos="fade-up-right">{title}</p>
            </div>
          ))}
        </article>
        <hr className="" />
      </article>

      <article data-aos = 'fade-right'>
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-orange-500 mb-6  transition-all flex ">T<p className="text-white">ools</p> <GrTools className="hover:animate-spin ml-4 mt-2" /></h1>
        <article className="flex flex-wrap text-center gap-16">
          {Tools.map(({ id, src, title, style }) => (
            <div key={id} className="text-white mb-6" data-aos="fade-up-left">
              <Image
                className={`mx-auto   w-[90px] h-[90px] ${style}`}
                src={src}
                alt="imagen"
                width={100}
                height={100}
              />
              <p className="text-center pt-2" data-aos="fade-up-right">{title}</p>
            </div>
          ))}
        </article>
        <hr />
      </article>
    </article>
</section>
     
   
  );
};

export default Experiencias;

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
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 2,
      src: "/experiencias/css.png",
      title: "CSS",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 3,
      src: "/experiencias/tailwind.jpeg",
      title: "TailwindCss",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 4,
      src: "/experiencias/framer-motion.svg",
      title: "Framer-Motion",
      style: "bg-white hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 5,
      src: "/experiencias/js.png",
      title: "JavaScript",
      style: "hover:hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 6,
      src: "/experiencias/typescript.png",
      title: "TypeScript",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 7,
      src: "/experiencias/react.png",
      title: "React",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 8,
      src: "/experiencias/Next..js.png",
      title: "Next.Js",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
  ];

  const backend = [
    {
      id: 1,
      src: "/experiencias/Prismaorm.png",
      title: "Prisma ORM",
      style: "bg-white p-2 hover:w-[100px] hover:h-[100px] transition-all "
    },
    {
      id: 2,
      src: "/experiencias/sqlite_logo_icon_169724.png",
      title: "SQLite",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 3,
      src: "/experiencias/st,small,507x507-pad,600x600,f8f8f8.jpg",
      title: "PostgreSQL",
      style: " hover:w-[100px] hover:h-[100px] transition-all"
    },
  ];

  const Tools = [
    {
      id: 1,
      src: "/experiencias/git.png",
      title: "Git",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 2,
      src: "/experiencias/vite.png",
      title: "Vite",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
    {
      id: 3,
      src: "/experiencias/visual-studio-code7642.jpg",
      title: "VS Code",
      style: "hover:w-[100px] hover:h-[100px] transition-all"
    },
  ];

  return (
    <section
    style={{ scrollBehavior: "smooth"}}
    className="h-screen w-full md:h-[100vh] xl:h-screen">
      <h1 id="Tecnologias" className="text-5xl font-bold text-white text-center mb-10 flex justify-center">Tecnologias</h1>
      <article className="mb-6 flex flex-col justify-center max-w-screen-lg mx-auto px-10" data-aos = 'fade-right'>
        <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-blue-500 mb-6 transition-all flex ">F<p className="text-white">ront</p>E<p className="text-white">nd</p> <FaReact className="hover:animate-spin ml-4 mt-2" /></h1>
        <article
        className="flex flex-wrap justify-between">
          {fronted.map(({ id, src, title, style }) => (
            <div
            key={id} className="text-white mb-6">
              <Image
                className={`mx-auto w-[90px] h-[90px]  ${style}`}
                src={src}
                alt="imagen"
                width={100}
                height={100}
              />
              <p className="text-center">{title}</p>
            </div>
          ))}
        </article>
        <hr />
      </article>
 
      <article className="mt-6 max-w-screen-lg mx-auto px-10" data-aos = 'fade-left'>
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-green-700 mb-6  transition-all flex ">D<p className="text-white">ata</p>B<p className="text-white">ase</p> <FaDatabase className="ml-4 hover:animate-bounce mt-2" /></h1>
        <article className="flex flex-wrap text-center gap-12">
          {backend.map(({ id, src, title, style }) => (
            <div key={id} className='text-white mb-6'>
              <Image
                className={`mx-auto  w-[90px] h-[90px] ${style}`}
                src={src}
                alt="imagen"
                width={100}
                height={100}
              />
              <p className="text-cente">{title}</p>
            </div>
          ))}
        </article>
        <hr className="" />
      </article>

      <article className="mt-6 max-w-screen-lg mx-auto px-10" data-aos = 'fade-right'>
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-orange-500 mb-6  transition-all flex ">T<p className="text-white">ools</p> <GrTools className="hover:animate-spin ml-4 mt-2" /></h1>
        <article className="flex flex-wrap text-center gap-16">
          {Tools.map(({ id, src, title, style }) => (
            <div key={id} className="text-white mb-6">
              <Image
                className={`mx-auto   w-[90px] h-[90px] ${style}`}
                src={src}
                alt="imagen"
                width={100}
                height={100}
              />
              <p className="text-center">{title}</p>
            </div>
          ))}
        </article>
        <hr />
      </article>
    </section>
  );
};

export default Experiencias;

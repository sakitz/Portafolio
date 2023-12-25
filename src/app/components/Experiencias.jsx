"use client"
import { useEffect } from "react";
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
      src: "/experiencias/html5.webp",
      title: "HTML",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 2,
      src: "/experiencias/css.webp",
      title: "CSS",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 3,
      src: "/experiencias/tailwindCss.webp",
      title: "TailwindCss",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 4,
      src: "/experiencias/materialui.webp",
      title: "Material-UI",
      style: " hover:scale-125 transition-all"
    },
    {
      id: 5,
      src: "/experiencias/Framer-Motion.webp",
      title: "Framer-Motion",
      style: "bg-white hover:scale-125 transition-all"
    },
    {
      id: 6,
      src: "/experiencias/js.webp",
      title: "JavaScript",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 7,
      src: "/experiencias/typescript.webp",
      title: "TypeScript",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 8,
      src: "/experiencias/react.webp",
      title: "React",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 9,
      src: "/experiencias/next.webp",
      title: "Next.Js",
      style: "hover:scale-125 transition-all"
    },
  ];

  const backend = [
    {
      id: 1,
      src: "/experiencias/Prismaorm.webp",
      title: "Prisma ORM",
      style: "hover:scale-125 transition-all bg-white"
    },
    {
      id: 2,
      src: "/experiencias/sqlite_logo_icon_169724.webp",
      title: "SQLite",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 3,
      src: "/experiencias/postgresql.webp",
      title: "PostgreSQL",
      style: "hover:scale-125 transition-all"
    },
  ];

  const Tools = [
    {
      id: 1,
      src: "/experiencias/git.webp",
      title: "Git",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 2,
      src: "/experiencias/vite.webp",
      title: "Vite",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 3,
      src: "/experiencias/visual-studio-code7642.webp",
      title: "VS Code",
      style: "hover:scale-125 transition-all"
    },
    {
      id: 4,
      src: "/experiencias/postman.webp",
      title: "Postman",
      style: "hover:scale-125 transition-all"
    },
  ];

  return (
    <section className="w-full h-screen tlmc:pt-[5rem] tlc:pt-[5rem] "id="Tecnologias" >
    <article  className="mb-6 flex flex-col justify-center max-w-screen-lg mx-auto px-10">
    <h1 className="text-6xl text-transparent text-center flex justify-center">Proyectos</h1>
      <article data-aos = 'fade-right'>
        <h1 className="text-white text-5xl mb-2 text-center font-bold pb-[1rem]">Tecnologias</h1>
        <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-blue-500 mb-6  transition-all flex ">F<p className="text-white">ront</p>E<p className="text-white">nd</p> <FaReact className="hover:animate-spin ml-4 mt-2" /></h1>
        <article
        className="flex flex-wrap tlmc:justify-between lg:justify-start lg:gap-16 xl:gap-4">
          {fronted.map(({ id, src, title, style }) => (
            <div
            key={id} className="text-white mb-6" data-aos="fade-up-left">
              <Image
                className={`mx-auto w-[90px] h-[90px] tlc:mr-10 xl:mr-0 ${style}`}
                src={src}
                alt="tecnologias frontend"
                width={256}
                height={236}
              />
              <p className="text-center pt-2 tlc:mr-10 xl:mr-0" data-aos="fade-up-right">{title}</p>
            </div>
          ))}
        </article>
        <hr />
      </article>
 
      <article className="mt-4">
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-green-700 mb-6  transition-all flex ">D<p className="text-white">ata</p>B<p className="text-white">ase</p> <FaDatabase className="ml-4 hover:animate-bounce mt-2" /></h1>
        <article className="flex flex-wrap text-center tlmc:justify-between md:justify-start md:gap-16">
          {backend.map(({ id, src, title, style }) => (
            <div key={id} className='text-white mb-6' data-aos="fade-up-left">
              <Image
                className={`mx-auto w-[90px] h-[90px] tlc:mr-10 xl:mr-0 ${style}`}
                src={src}
                alt="bases de datos"
                width={256}
                height={311}
              />
              <p className="text-center pt-2 mr-10 xl:mr-0" data-aos="fade-up-right">{title}</p>
            </div>
          ))}
        </article>
        <hr />
      </article>

      <article data-aos = 'fade-right'>
      <h1 className="text-[2.50rem] hover:text-[2.85rem] font-bold  text-white hover:text-orange-500 mb-6  transition-all flex ">H<p className="text-white">erramientas</p> <GrTools className="hover:animate-spin ml-4 mt-2" /></h1>
        <article className="flex flex-wrap tlmc:justify-between md:justify-start md:gap-12">
          {Tools.map(({ id, src, title, style }) => (
            <div key={id} className="text-white mb-6" data-aos="fade-up-left">
              <Image
                className={`mx-auto w-[90px] h-[90px] tlc:mr-10 xl:mr-0 ${style}`}
                src={src}
                alt="herramientas que utilizo"
                width={256}
                height={256}
              />
              <p className="text-center pt-2 tlc:mr-10 xl:mr-0" data-aos="fade-up-right">{title}</p>
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

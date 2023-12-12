"use client";
import React, { useEffect }  from "react";
import Image from "next/image";
import Aos from "aos";

const Aboutme = () => {

  useEffect(() => {
    Aos.init()
  } ,[])


  return (
    <div
      id="Sobre mi"
      className="h-screen w-full md:h-[50vh] xl:h-screen tlc:mt-10"
    
    >
      <h2 className="text-transparent text-7xl font-bold mb-10 text-center" id="Proyectos">Proyectos</h2>
      <section
        className="max-w-screen-lg sm:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center items-center px-4 justify-center"
      >
        <h1 className="font-bold text-white capitalize text-3xl md:text-5xl col-span-1 md:col-span-2 m-auto mb-4" data-aos = 'fade-top'>
          Sobre mi <span className="animate-pulse">🎮🕹️</span> 
        </h1>
        <article className="h-full" data-aos = 'fade-right'>
          <p className="text-white text-xl">
          Hola me llamo <span className="text-red-500">Benjamin</span> Tengo 17 años, nací el 08/03/2006, me dedico al apartado Frontend aplicando React y Next.js para un mejor rendimiento. Tengo +1 año de experiencia en proyectos personales como operaciones CRUD, E-commerce, conexión a una API para recopilar usuarios. Actualmente estoy estudiando Python para backend con FastAPI para en un futuro ser un FullStack Developer.
          </p><br />
          <br />
          <p className="text-red-500 text-xl"> Si te a gustado mi perfil, podrias contactame en la siguiente seccion.</p>
          <div className="flex pt-2 justify-center items-center flex-col gap-4">
          </div>
        </article>
        <article data-aos = 'fade-left'>
          <Image
            width={1000000}
            height={1000000}
            alt="imagen"
            src="/hero.jpg"
            className="grid-cols-2 place-content-center w-[400px] h-[500px] rounded-md border border-black"
          />
        </article>
      </section>
    </div>
);
};

export default Aboutme;

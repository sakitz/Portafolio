"use client";
import React, { useEffect }  from "react";
import Image from "next/image";
import Aos from "aos";
import { GiThreeFriends } from "react-icons/gi";
import { FaPersonHarassing } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";

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
          Hola me llamo <span className="text-blue-700">Benjamin</span> Tengo 17 años, nací el 08/03/2006, me dedico al apartado Frontend aplicando React y Next.js para un mejor rendimiento. Tengo +1 año de experiencia en proyectos personales como operaciones CRUD, E-commerce, conexión a una API para recopilar usuarios. Actualmente estoy estudiando Python para backend con FastAPI para en un futuro ser un FullStack Developer.
          </p><br />


          <section className="h-fit w-full grid tlmc:place-content-center tlmc:grid-rows-1 md:place md:grid-cols-3 gap-2">
          <div className="p-4 border-2 border-blue-700 w-32 h-36">
          <p className="text-white ">
          <FaPersonHarassing size={30} className="text-white" />
            ayudar al que lo nesesita.</p>
          </div>
         <div className=" p-4 border-2 border-blue-700 w-32  h-36">
          <p className="text-white ">
          <GiThreeFriends size={30} className="text-white" />
            Sociable y buena comunicacion  </p>
          </div>
          <div className="border-2 border-blue-700 tlmc:w-[9rem] h-36">
          <p className="text-white p-4 ">
          <FaUserClock size={30} className="text-white" />
            Responsabilidad con horarios y tareas.</p>
          </div>  
          </section>
         
          

          <p className=" text-blue-700  text-xl mt-14"> Si te a gustado mi perfil, podrias contactame en la siguiente seccion.</p>
          
        </article>
        <article className="grid place-content-center" data-aos = 'fade-left'>
          <Image
            width={1000000}
            height={1000000}
            alt="imagen"
            src="/hero.jpg"
            className="grid-cols-2 place-content-center w-[400px] h-[500px] rounded-2xl border-2 border-blue-700"
          />
        </article>
      </section>
    </div>
);
};

export default Aboutme;
